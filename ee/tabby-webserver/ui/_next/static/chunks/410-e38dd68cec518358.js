"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{75561:function(n,e,t){t.d(e,{B:function(){return s}});var r=t(18500);let i={"\n  query ListUserEvents(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n  ) {\n    userEvents(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n      start: $start\n      end: $end\n      users: $users\n    ) {\n      edges {\n        node {\n          id\n          userId\n          createdAt\n          kind\n          payload\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.UQ,"\n  mutation uploadUserAvatarBase64($id: ID!, $avatarBase64: String!) {\n    uploadUserAvatarBase64(id: $id, avatarBase64: $avatarBase64)\n  }\n":r.eI,"\n  mutation UpdateUserName($id: ID!, $name: String!) {\n    updateUserName(id: $id, name: $name)\n  }\n":r.DQ,"\n  mutation PasswordChange($input: PasswordChangeInput!) {\n    passwordChange(input: $input)\n  }\n":r.oZ,"\n  mutation updateEmailSetting($input: EmailSettingInput!) {\n    updateEmailSetting(input: $input)\n  }\n":r.gl,"\n  mutation deleteEmailSetting {\n    deleteEmailSetting\n  }\n":r.wZ,"\n  mutation SendTestEmail($to: String!) {\n    sendTestEmail(to: $to)\n  }\n":r.nI,"\n  query emailSetting {\n    emailSetting {\n      smtpUsername\n      smtpServer\n      fromAddress\n      encryption\n      authMethod\n      smtpPort\n    }\n  }\n":r.k6,"\n  mutation DeleteGithubRepositoryProvider($id: ID!) {\n    deleteGithubRepositoryProvider(id: $id)\n  }\n":r.Zj,"\n  mutation UpdateGithubRepositoryProvider(\n    $input: UpdateRepositoryProviderInput!\n  ) {\n    updateGithubRepositoryProvider(input: $input)\n  }\n":r.Z_,"\n  mutation DeleteGitlabRepositoryProvider($id: ID!) {\n    deleteGitlabRepositoryProvider(id: $id)\n  }\n":r.$1,"\n  mutation UpdateGitlabRepositoryProvider(\n    $input: UpdateRepositoryProviderInput!\n  ) {\n    updateGitlabRepositoryProvider(input: $input)\n  }\n":r.Qn,"\n  mutation DeleteGithubSelfHostedRepositoryProvider($id: ID!) {\n    deleteGithubSelfHostedRepositoryProvider(id: $id)\n  }\n":r.YO,"\n  mutation UpdateGithubSelfHostedRepositoryProvider(\n    $input: UpdateSelfHostedRepositoryProviderInput!\n  ) {\n    updateGithubSelfHostedRepositoryProvider(input: $input)\n  }\n":r.xj,"\n  mutation DeleteGitlabSelfHostedRepositoryProvider($id: ID!) {\n    deleteGitlabSelfHostedRepositoryProvider(id: $id)\n  }\n":r.Fz,"\n  mutation UpdateGitlabSelfHostedRepositoryProvider(\n    $input: UpdateSelfHostedRepositoryProviderInput!\n  ) {\n    updateGitlabSelfHostedRepositoryProvider(input: $input)\n  }\n":r.zI,"\n    mutation UpdateGithubProvidedRepositoryActive($id: ID!, $active: Boolean!) {\n      updateGithubProvidedRepositoryActive(id: $id, active: $active)\n    }\n  ":r.SS,"\n    mutation UpdateGitlabProvidedRepositoryActive($id: ID!, $active: Boolean!) {\n      updateGitlabProvidedRepositoryActive(id: $id, active: $active)\n    }\n  ":r.lc,"\n    mutation UpdateGithubSelfHostedProvidedRepositoryActive(\n      $id: ID!\n      $active: Boolean!\n    ) {\n      updateGithubSelfHostedProvidedRepositoryActive(id: $id, active: $active)\n    }\n  ":r.ax,"\n    mutation UpdateGitlabSelfHostedProvidedRepositoryActive(\n      $id: ID!\n      $active: Boolean!\n    ) {\n      updateGitlabSelfHostedProvidedRepositoryActive(id: $id, active: $active)\n    }\n  ":r.wj,"\n  mutation CreateGithubRepositoryProvider(\n    $input: CreateRepositoryProviderInput!\n  ) {\n    createGithubRepositoryProvider(input: $input)\n  }\n":r.Xt,"\n  mutation CreateGithubSelfHostedRepositoryProvider(\n    $input: CreateSelfHostedRepositoryProviderInput!\n  ) {\n    createGithubSelfHostedRepositoryProvider(input: $input)\n  }\n":r.t3,"\n  mutation CreateGitlabRepositoryProvider(\n    $input: CreateRepositoryProviderInput!\n  ) {\n    createGitlabRepositoryProvider(input: $input)\n  }\n":r.Sx,"\n  mutation CreateGitlabSelfHostedRepositoryProvider(\n    $input: CreateSelfHostedRepositoryProviderInput!\n  ) {\n    createGitlabSelfHostedRepositoryProvider(input: $input)\n  }\n":r.PP,"\n  mutation deleteGitRepository($id: ID!) {\n    deleteGitRepository(id: $id)\n  }\n":r.TS,"\n  mutation createGitRepository($name: String!, $gitUrl: String!) {\n    createGitRepository(name: $name, gitUrl: $gitUrl)\n  }\n":r.ad,"\n  mutation updateOauthCredential($input: UpdateOAuthCredentialInput!) {\n    updateOauthCredential(input: $input)\n  }\n":r.m,"\n  mutation deleteOauthCredential($provider: OAuthProvider!) {\n    deleteOauthCredential(provider: $provider)\n  }\n":r.ZH,"\n  query OAuthCallbackUrl($provider: OAuthProvider!) {\n    oauthCallbackUrl(provider: $provider)\n  }\n":r.L$,"\n  query OAuthCredential($provider: OAuthProvider!) {\n    oauthCredential(provider: $provider) {\n      provider\n      clientId\n      createdAt\n      updatedAt\n    }\n  }\n":r.Fd,"\n  mutation updateNetworkSettingMutation($input: NetworkSettingInput!) {\n    updateNetworkSetting(input: $input)\n  }\n":r.rN,"\n  mutation updateSecuritySetting($input: SecuritySettingInput!) {\n    updateSecuritySetting(input: $input)\n  }\n":r.Nl,"\n  query SecuritySetting {\n    securitySetting {\n      allowedRegisterDomainList\n      disableClientSideTelemetry\n    }\n  }\n":r.rU,"\n  mutation UploadLicense($license: String!) {\n    uploadLicense(license: $license)\n  }\n":r.Yo,"\n  mutation ResetLicense {\n    resetLicense\n  }\n":r.d0,"\n  mutation CreateInvitation($email: String!) {\n    createInvitation(email: $email)\n  }\n":r.ib,"\n  mutation DeleteInvitation($id: ID!) {\n    deleteInvitation(id: $id)\n  }\n":r.YM,"\n  mutation updateUserRole($id: ID!, $isAdmin: Boolean!) {\n    updateUserRole(id: $id, isAdmin: $isAdmin)\n  }\n":r.XF,"\n  mutation UpdateUserActive($id: ID!, $active: Boolean!) {\n    updateUserActive(id: $id, active: $active)\n  }\n":r.dv,"\n  query GetRegistrationToken {\n    registrationToken\n  }\n":r.bh,"\n  mutation ResetRegistrationToken {\n    resetRegistrationToken\n  }\n":r.wW,"\n  query GetDiskUsageStats {\n    diskUsageStats {\n      events {\n        filepath\n        sizeKb\n      }\n      indexedRepositories {\n        filepath\n        sizeKb\n      }\n      database {\n        filepath\n        sizeKb\n      }\n      models {\n        filepath\n        sizeKb\n      }\n    }\n  }\n":r.xX,"\n  mutation ResetUserAuthToken {\n    resetUserAuthToken\n  }\n":r.qq,"\n  mutation passwordReset($input: PasswordResetInput!) {\n    passwordReset(input: $input)\n  }\n":r.vK,"\n  mutation requestPasswordResetEmail($input: RequestPasswordResetEmailInput!) {\n    requestPasswordResetEmail(input: $input)\n  }\n":r.i8,"\n  mutation requestInvitationEmail($input: RequestInvitationInput!) {\n    requestInvitationEmail(input: $input) {\n      email\n      code\n    }\n  }\n":r.S_,"\n  mutation tokenAuth($email: String!, $password: String!) {\n    tokenAuth(email: $email, password: $password) {\n      accessToken\n      refreshToken\n    }\n  }\n":r.UO,"\n  mutation register(\n    $name: String!\n    $email: String!\n    $password1: String!\n    $password2: String!\n    $invitationCode: String\n  ) {\n    register(\n      name: $name\n      email: $email\n      password1: $password1\n      password2: $password2\n      invitationCode: $invitationCode\n    ) {\n      accessToken\n      refreshToken\n    }\n  }\n":r.YR,"\n  query RepositorySearch($kind: RepositoryKind!, $id: ID!, $pattern: String!) {\n    repositorySearch(kind: $kind, id: $id, pattern: $pattern) {\n      type\n      path\n      indices\n    }\n  }\n":r.BH,"\n  query RepositoryList {\n    repositoryList {\n      id\n      name\n      kind\n      gitUrl\n    }\n  }\n":r.HC,"\n  query GetLicenseInfo {\n    license {\n      type\n      status\n      seats\n      seatsUsed\n      issuedAt\n      expiresAt\n    }\n  }\n":r.eZ,"\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isPasswordSet\n      name\n    }\n  }\n":r.fk,"\n  query NetworkSetting {\n    networkSetting {\n      externalUrl\n    }\n  }\n":r.m2,"\n  query GetServerInfo {\n    serverInfo {\n      isAdminInitialized\n      isEmailConfigured\n      isChatEnabled\n      allowSelfSignup\n      isDemoMode\n    }\n  }\n":r.a,"\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n":r.FR,"\n  mutation LogoutAllSessions {\n    logoutAllSessions\n  }\n":r.Il,"\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.Xx,"\n  query gitRepositories(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitRepositories(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.Mi,"\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          finishedAt\n          exitCode\n          stdout\n          stderr\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.$S,"\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n":r.np,"\n  query ListJobs {\n    jobs\n  }\n":r.Ax,"\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.by,"\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n":r.Wd,"\n  query DailyStats(\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n":r.Sm,"\n  query ListGithubRepositoryProviders(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    githubRepositoryProviders(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.BK,"\n  query ListGithubRepositories(\n    $providerIds: [ID!]!\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    githubRepositories(\n      providerIds: $providerIds\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          vendorId\n          githubRepositoryProviderId\n          name\n          gitUrl\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.rV,"\n  query ListGitlabRepositoryProviders(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitlabRepositoryProviders(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.EW,"\n  query ListGitlabRepositories(\n    $providerIds: [ID!]!\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitlabRepositories(\n      providerIds: $providerIds\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          vendorId\n          gitlabRepositoryProviderId\n          name\n          gitUrl\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.ct,"\n  query ListGithubSelfHostedRepositoryProviders(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    githubSelfHostedRepositoryProviders(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n          apiBase\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.dE,"\n  query ListGitlabSelfHostedRepositoryProviders(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitlabSelfHostedRepositoryProviders(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n          apiBase\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.KQ,"\n  query ListGithubSelfHostedRepositories(\n    $providerIds: [ID!]!\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    githubSelfHostedRepositories(\n      providerIds: $providerIds\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          vendorId\n          githubRepositoryProviderId\n          name\n          gitUrl\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.fx,"\n  query ListGitlabSelfHostedRepositories(\n    $providerIds: [ID!]!\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitlabSelfHostedRepositories(\n      providerIds: $providerIds\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          vendorId\n          name\n          gitUrl\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.kz};function s(n){var e;return null!==(e=i[n])&&void 0!==e?e:{}}},43240:function(n,e,t){t.d(e,{BX:function(){return r.B}});var r=t(75561)},70410:function(n,e,t){t.d(e,{Cl:function(){return f},DQ:function(){return d},GG:function(){return o},HH:function(){return S},Nk:function(){return I},S1:function(){return s},Vt:function(){return p},Y6:function(){return $},Zr:function(){return v},cO:function(){return g},hC:function(){return l},lE:function(){return i},lp:function(){return c},nI:function(){return b},yB:function(){return a},yw:function(){return u}});var r=t(43240);let i=(0,r.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),s=(0,r.BX)("\n  query gitRepositories(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitRepositories(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),o=(0,r.BX)("\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          finishedAt\n          exitCode\n          stdout\n          stderr\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),a=(0,r.BX)("\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n"),d=(0,r.BX)("\n  query ListJobs {\n    jobs\n  }\n"),u=(0,r.BX)("\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),$=(0,r.BX)("\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n"),f=(0,r.BX)("\n  query DailyStats(\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n"),l=(0,r.BX)("\n  query ListGithubRepositoryProviders(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    githubRepositoryProviders(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),p=(0,r.BX)("\n  query ListGithubRepositories(\n    $providerIds: [ID!]!\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    githubRepositories(\n      providerIds: $providerIds\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          vendorId\n          githubRepositoryProviderId\n          name\n          gitUrl\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),g=(0,r.BX)("\n  query ListGitlabRepositoryProviders(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitlabRepositoryProviders(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),v=(0,r.BX)("\n  query ListGitlabRepositories(\n    $providerIds: [ID!]!\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitlabRepositories(\n      providerIds: $providerIds\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          vendorId\n          gitlabRepositoryProviderId\n          name\n          gitUrl\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),I=(0,r.BX)("\n  query ListGithubSelfHostedRepositoryProviders(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    githubSelfHostedRepositoryProviders(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n          apiBase\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),b=(0,r.BX)("\n  query ListGitlabSelfHostedRepositoryProviders(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitlabSelfHostedRepositoryProviders(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n          apiBase\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),c=(0,r.BX)("\n  query ListGithubSelfHostedRepositories(\n    $providerIds: [ID!]!\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    githubSelfHostedRepositories(\n      providerIds: $providerIds\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          vendorId\n          githubRepositoryProviderId\n          name\n          gitUrl\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),S=(0,r.BX)("\n  query ListGitlabSelfHostedRepositories(\n    $providerIds: [ID!]!\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitlabSelfHostedRepositories(\n      providerIds: $providerIds\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          vendorId\n          name\n          gitUrl\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n")}}]);