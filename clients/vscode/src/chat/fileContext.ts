import type { TextEditor, TextDocument } from "vscode";
import type { FileContext } from "tabby-chat-panel";
import type { GitProvider } from "../git/GitProvider";
import { workspace, window, Position, Range, Selection, TextEditorRevealType, Uri, ViewColumn, commands } from "vscode";
import path from "path";
import { getLogger } from "../logger";

const logger = getLogger("FileContext");

export interface FilePathParams {
  filePath: string;
  gitRemoteUrl?: string;
}

export async function getFileContextFromSelection(
  editor: TextEditor,
  gitProvider: GitProvider,
): Promise<FileContext | null> {
  return getFileContext(editor, gitProvider, true);
}

export async function getFileContext(
  editor: TextEditor,
  gitProvider: GitProvider,
  useSelection = false,
): Promise<FileContext | null> {
  const text = editor.document.getText(useSelection ? editor.selection : undefined);
  if (!text || text.trim().length < 1) {
    return null;
  }
  const content = useSelection ? alignIndent(text) : text;
  const range = useSelection
    ? {
        start: editor.selection.start.line + 1,
        end: editor.selection.end.line + 1,
      }
    : {
        start: 1,
        end: editor.document.lineCount,
      };

  const filePathParams = await buildFilePathParams(editor.document.uri, gitProvider);

  return {
    kind: "file",
    content,
    range,
    filepath: filePathParams.filePath,
    git_url: filePathParams.gitRemoteUrl ?? "",
  };
}

async function showCellInUntitledNotebook(uri: Uri, range?: Range) {
  const notebookDocument = workspace.notebookDocuments.find((notebook) => {
    return notebook.getCells().some((cell) => cell.document.uri.toString() === uri.toString());
  });

  if (notebookDocument) {
    const notebookEditor = await window.showNotebookDocument(notebookDocument);

    const targetCell = notebookDocument.getCells().find((cell) => cell.document.uri.toString() === uri.toString());

    if (notebookEditor && targetCell && range) {
        // FIXME  revealRange
    } else {
      throw new Error(`Cell not found in notebook: ${uri.toString()}`);
    }
  } else {
    throw new Error(`Notebook not found for URI: ${uri.toString()}`);
  }
}

export async function showFileContext(fileContext: FileContext, gitProvider: GitProvider): Promise<void> {
  if (fileContext.filepath.startsWith("output:")) {
    const channelId = Uri.parse(fileContext.filepath).fsPath;
    await commands.executeCommand(`workbench.action.output.show.${channelId}`);
    return;
  }

  if (fileContext.filepath.startsWith("vscode-notebook-cell")) {
    const uri = Uri.parse(fileContext.filepath);
    const cellUri = parseVscodeNotebookCellURI(uri);
    if (cellUri?.scheme === "untitled") {
      showCellInUntitledNotebook(uri);
      return;
    }
  }

  logger.info("CALL openTextDocument");
  const document = await openTextDocument(
    {
      filePath: fileContext.filepath,
      gitRemoteUrl: fileContext.git_url,
    },
    gitProvider,
  );
  if (!document) {
    throw new Error(`File not found: ${fileContext.filepath}`);
  }

  const editor = await window.showTextDocument(document, {
    viewColumn: ViewColumn.Active,
    preview: false,
    preserveFocus: true,
  });

  // Move the cursor to the specified line
  const start = new Position(Math.max(0, fileContext.range.start - 1), 0);
  const end = new Position(fileContext.range.end, 0);
  editor.selection = new Selection(start, end);
  editor.revealRange(new Range(start, end), TextEditorRevealType.InCenter);
}

export async function buildFilePathParams(uri: Uri, gitProvider: GitProvider): Promise<FilePathParams> {
  const workspaceFolder =
    workspace.getWorkspaceFolder(uri) ?? (uri.scheme === "untitled" ? workspace.workspaceFolders?.[0] : undefined);
  const repo =
    gitProvider.getRepository(uri) ?? (workspaceFolder ? gitProvider.getRepository(workspaceFolder.uri) : undefined);
  const gitRemoteUrl = repo ? gitProvider.getDefaultRemoteUrl(repo) : undefined;
  let filePath = uri.toString(true);
  if (repo && gitRemoteUrl) {
    const relativeFilePath = path.relative(repo.rootUri.toString(true), filePath);
    if (!relativeFilePath.startsWith("..")) {
      filePath = relativeFilePath;
    }
  } else if (workspaceFolder) {
    const relativeFilePath = path.relative(workspaceFolder.uri.toString(true), filePath);
    if (!relativeFilePath.startsWith("..")) {
      filePath = relativeFilePath;
    }
  }
  return {
    filePath,
    gitRemoteUrl,
  };
}

function parseVscodeNotebookCellURI(uri: Uri) {
  if (!uri.scheme) return undefined;
  if (!uri.scheme.startsWith("vscode-notebook-cell")) return undefined;

  const _lengths = ["W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f"];
  const _padRegexp = new RegExp(`^[${_lengths.join("")}]+`);
  const _radix = 7;
  const fragment = uri.fragment.split("#").pop() || "";
  const idx = fragment.indexOf("s");
  if (idx < 0) {
    return undefined;
  }
  const handle = parseInt(fragment.substring(0, idx).replace(_padRegexp, ""), _radix);
  const scheme = Buffer.from(fragment.substring(idx + 1), "base64").toString("utf-8");

  if (isNaN(handle)) {
    return undefined;
  }
  return {
    handle,
    scheme,
  };
}

export async function openTextDocument(
  filePathParams: FilePathParams,
  gitProvider: GitProvider,
): Promise<TextDocument | null> {
  const { filePath, gitRemoteUrl } = filePathParams;
  logger.info("CALL OPEN TEXT DOCUMENT", filePath);

  // Try parse as absolute path
  try {
    const absoluteFilepath = Uri.parse(filePath, true);
    if (absoluteFilepath.scheme) {
      logger.info("openTextDocument: absoluteFilepath.scheme", JSON.stringify(absoluteFilepath));
      return await workspace.openTextDocument(absoluteFilepath);
    }
  } catch (err) {
    // ignore
  }

  logger.info("Try find file in provided git repository");
  // Try find file in provided git repository
  if (gitRemoteUrl && gitRemoteUrl.trim().length > 0) {
    const localGitRoot = gitProvider.findLocalRootUriByRemoteUrl(gitRemoteUrl);
    if (localGitRoot) {
      try {
        const absoluteFilepath = Uri.joinPath(localGitRoot, filePath);
        return await workspace.openTextDocument(absoluteFilepath);
      } catch (err) {
        // ignore
      }
    }
  }

  for (const root of workspace.workspaceFolders ?? []) {
    // Try find file in workspace folder
    const absoluteFilepath = Uri.joinPath(root.uri, filePath);
    try {
      return await workspace.openTextDocument(absoluteFilepath);
    } catch (err) {
      // ignore
    }

    // Try find file in git repository of workspace folder
    const localGitRoot = gitProvider.getRepository(root.uri)?.rootUri;
    if (localGitRoot) {
      try {
        const absoluteFilepath = Uri.joinPath(localGitRoot, filePath);
        return await workspace.openTextDocument(absoluteFilepath);
      } catch (err) {
        // ignore
      }
    }
  }

  // Try find file in workspace folders using workspace.findFiles
  logger.info("File not found in workspace folders, trying with findFiles...");
  const files = await workspace.findFiles(filePath, undefined, 1);
  if (files[0]) {
    try {
      return await workspace.openTextDocument(files[0]);
    } catch (err) {
      // ignore
    }
  }

  return null;
}

function alignIndent(text: string): string {
  const lines = text.split("\n");
  const subsequentLines = lines.slice(1);

  // Determine the minimum indent for subsequent lines
  const minIndent = subsequentLines.reduce((min, line) => {
    const match = line.match(/^(\s*)/);
    const indent = match ? match[0].length : 0;
    return line.trim() ? Math.min(min, indent) : min;
  }, Infinity);

  // Remove the minimum indent
  const adjustedLines = lines.slice(1).map((line) => line.slice(minIndent));

  return [lines[0]?.trim(), ...adjustedLines].join("\n");
}
