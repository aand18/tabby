(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8043],{7404:function(e,t,r){"use strict";r.d(t,{j:function(){return o}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.flat(1/0).filter(Boolean).join(" ")},o=(e,t)=>r=>{var o;if((null==t?void 0:t.variants)==null)return i(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:s,defaultVariants:a}=t,l=Object.keys(s).map(e=>{let t=null==r?void 0:r[e],i=null==a?void 0:a[e];if(null===t)return null;let o=n(t)||n(i);return s[e][o]}),u=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{}),c=null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:r,className:n,...i}=t;return Object.entries(i).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...u}[t]):({...a,...u})[t]===r})?[...e,r,n]:e},[]);return i(e,l,c,null==r?void 0:r.class,null==r?void 0:r.className)}},95380:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(2265),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:u="",children:c,...d},f)=>(0,n.createElement)("svg",{ref:f,...i,width:s,height:s,stroke:r,strokeWidth:l?24*Number(a)/Number(s):a,className:["lucide",`lucide-${o(e)}`,u].join(" "),...d},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r}},47154:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(95380);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,n.Z)("BookOpenText",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]])},44680:function(e,t,r){Promise.resolve().then(r.bind(r,4791))},99268:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var n=r(57437),i=r(52373);let o=e=>{let{className:t}=e;return(0,n.jsx)(i.b,{className:t,externalLink:"https://tabby.tabbyml.com/blog/2023/10/16/repository-context-for-code-completion",children:"Connect to Git repositories and uses these repositories as a context to enhance performance of large language model."})}},4791:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(57437),i=r(61396),o=r.n(i),s=r(93023),a=r(99268),l=r(2265),u=r(71424),c=r(99109),d=r(61985),f=r(60106),m=r(7820),v=r(57166),h=r(84168),x=r(91320),p=r(32553),g=r(70825);let j=(0,f.BX)("\n  mutation deleteRepository($id: ID!) {\n    deleteRepository(id: $id)\n  }\n"),b=d.L;function y(){var e,t;let r=(0,c.m8)(),[{data:i,fetching:o}]=(0,c.aM)({query:v.S1,variables:{first:b}}),[a,d]=l.useState(1),f=null==i?void 0:null===(e=i.repositories)||void 0===e?void 0:e.edges,y=null==i?void 0:null===(t=i.repositories)||void 0===t?void 0:t.pageInfo,N=Math.ceil(((null==f?void 0:f.length)||0)/b),w=l.useMemo(()=>{var e;return null==f?void 0:null===(e=f.slice)||void 0===e?void 0:e.call(f,(a-1)*b,a*b)},[a,f]),Z=(null==y?void 0:y.hasNextPage)||a<N,k=a>1,O=!!(null==w?void 0:w.length)&&(Z||k),C=e=>r.query(v.S1,e).toPromise(),R=(0,m.D)(j),T=e=>{R({id:e.id}).then(e=>{if(null==e?void 0:e.error){u.A.error(e.error.message);return}})};return l.useEffect(()=>{N<a&&a>1&&d(N)},[N,a]),(0,n.jsxs)(g.Z,{loading:o,children:[(0,n.jsxs)(p.iA,{className:"table-fixed border-b",children:[(0,n.jsx)(p.xD,{children:(0,n.jsxs)(p.SC,{children:[(0,n.jsx)(p.ss,{className:"w-[25%]",children:"Name"}),(0,n.jsx)(p.ss,{children:"Git URL"}),(0,n.jsx)(p.ss,{className:"w-[100px]"})]})}),(0,n.jsx)(p.RM,{children:(null==w?void 0:w.length)||1!==a?(0,n.jsx)(n.Fragment,{children:null==w?void 0:w.map(e=>(0,n.jsxs)(p.SC,{children:[(0,n.jsx)(p.pj,{className:"truncate",children:e.node.name}),(0,n.jsx)(p.pj,{className:"truncate",children:e.node.gitUrl}),(0,n.jsx)(p.pj,{className:"flex justify-end",children:(0,n.jsx)("div",{className:"flex gap-1",children:(0,n.jsx)(s.z,{size:"icon",variant:"hover-destructive",onClick:()=>T(e.node),children:(0,n.jsx)(h.IconTrash,{})})})})]},e.node.id))}):(0,n.jsx)(p.SC,{children:(0,n.jsx)(p.pj,{colSpan:3,className:"h-[100px] text-center",children:"No Data"})})})]}),O&&(0,n.jsx)(x.tl,{className:"my-4",children:(0,n.jsxs)(x.ng,{children:[(0,n.jsx)(x.nt,{children:(0,n.jsx)(x.dN,{disabled:!k,onClick:()=>{!(a<=1)&&(o||d(e=>e-1))}})}),(0,n.jsx)(x.nt,{children:(0,n.jsx)(x.$0,{disabled:!Z,onClick:()=>{Z&&(o||C({first:b,after:null==y?void 0:y.endCursor}).then(e=>{var t,r,n;(null==e?void 0:null===(n=e.data)||void 0===n?void 0:null===(r=n.repositories)||void 0===r?void 0:null===(t=r.edges)||void 0===t?void 0:t.length)&&d(e=>e+1)}))}})})]})})]})}function N(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.I,{}),(0,n.jsx)(y,{}),(0,n.jsx)("div",{className:"mt-4 flex justify-end",children:(0,n.jsx)(o(),{href:"/settings/git/new",className:(0,s.d)(),children:"Create"})})]})}},70825:function(e,t,r){"use strict";var n=r(57437),i=r(2265),o=r(36850),s=r(93111);t.Z=e=>{let{loading:t,fallback:r,delay:a,children:l}=e,[u,c]=i.useState(!t),[d]=(0,o.n)(u,null!=a?a:200);return(i.useEffect(()=>{t||u||c(!0)},[t]),d)?l:r||(0,n.jsx)(s.cg,{})}},93111:function(e,t,r){"use strict";r.d(t,{PF:function(){return l},cg:function(){return s},tB:function(){return a}});var n=r(57437),i=r(39311),o=r(25645);let s=e=>{let{className:t,...r}=e;return(0,n.jsxs)("div",{className:(0,i.cn)("space-y-3",t),...r,children:[(0,n.jsx)(o.O,{className:"h-4 w-full"}),(0,n.jsx)(o.O,{className:"h-4 w-full"}),(0,n.jsx)(o.O,{className:"h-4 w-full"}),(0,n.jsx)(o.O,{className:"h-4 w-full"})]})},a=e=>{let{className:t,...r}=e;return(0,n.jsx)(o.O,{className:(0,i.cn)("h-4 w-full",t),...r})},l=e=>{let{className:t,...r}=e;return(0,n.jsxs)("div",{className:(0,i.cn)("flex flex-col gap-3",t),...r,children:[(0,n.jsx)(o.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(o.O,{className:"h-4 w-full"}),(0,n.jsx)(o.O,{className:"h-4 w-[20%]"}),(0,n.jsx)(o.O,{className:"h-4 w-full"})]})}},52373:function(e,t,r){"use strict";r.d(t,{b:function(){return l}});var n=r(57437);r(2265);var i=r(61396),o=r.n(i),s=r(39311),a=r(84168);let l=e=>{let{className:t,externalLink:r,externalLinkText:i="Learn more",children:l}=e;return(0,n.jsx)("div",{className:(0,s.cn)("mb-4 flex items-center gap-4",t),children:(0,n.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[l,!!r&&(0,n.jsxs)(o(),{className:"ml-2 inline-flex cursor-pointer flex-row items-center text-primary hover:underline",href:r,target:"_blank",children:[i,(0,n.jsx)(a.IconExternalLink,{className:"ml-1"})]})]})})}},93023:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return u}});var n=r(57437),i=r(2265),o=r(67256),s=r(7404),a=r(39311);let l=(0,s.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef((e,t)=>{let{className:r,variant:i,size:s,asChild:u=!1,...c}=e,d=u?o.g7:"button";return(0,n.jsx)(d,{className:(0,a.cn)(l({variant:i,size:s,className:r})),ref:t,...c})});u.displayName="Button"},91320:function(e,t,r){"use strict";r.d(t,{$0:function(){return m},dN:function(){return f},ng:function(){return u},nt:function(){return c},tl:function(){return l}});var n=r(57437),i=r(2265),o=r(39311),s=r(93023),a=r(84168);let l=e=>{let{className:t,...r}=e;return(0,n.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,o.cn)("mx-auto flex w-full justify-center",t),...r})};l.displayName="Pagination";let u=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("ul",{ref:t,className:(0,o.cn)("flex flex-row items-center gap-1",r),...i})});u.displayName="PaginationContent";let c=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("li",{ref:t,className:(0,o.cn)("",r),...i})});c.displayName="PaginationItem";let d=e=>{let{className:t,isActive:r,size:i="icon",...a}=e;return(0,n.jsx)("a",{"aria-current":r?"page":void 0,className:(0,o.cn)((0,s.d)({variant:r?"outline":"ghost",size:i}),t),...a})};d.displayName="PaginationLink";let f=e=>{let{className:t,disabled:r,...i}=e;return(0,n.jsxs)(d,{"aria-label":"Go to previous page",size:"default",className:(0,o.cn)("cursor-pointer gap-1 pl-2.5",r&&"cursor-not-allowed text-muted-foreground",t),...i,children:[(0,n.jsx)(a.IconChevronLeft,{className:"h-4 w-4"}),(0,n.jsx)("span",{children:"Previous"})]})};f.displayName="PaginationPrevious";let m=e=>{let{className:t,disabled:r,...i}=e;return(0,n.jsxs)(d,{"aria-label":"Go to next page",size:"default",className:(0,o.cn)("cursor-pointer gap-1 pr-2.5",r&&"cursor-not-allowed text-muted-foreground",t),...i,children:[(0,n.jsx)("span",{children:"Next"}),(0,n.jsx)(a.IconChevronRight,{className:"h-4 w-4"})]})};m.displayName="PaginationNext"},25645:function(e,t,r){"use strict";r.d(t,{O:function(){return o}});var n=r(57437),i=r(39311);function o(e){let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,i.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...r})}},32553:function(e,t,r){"use strict";r.d(t,{RM:function(){return l},SC:function(){return c},iA:function(){return s},pj:function(){return f},ss:function(){return d},xD:function(){return a}});var n=r(57437),i=r(2265),o=r(39311);let s=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("table",{ref:t,className:(0,o.cn)("w-full caption-bottom text-sm",r),...i})});s.displayName="Table";let a=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("thead",{ref:t,className:(0,o.cn)("[&_tr]:border-b",r),...i})});a.displayName="TableHeader";let l=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("tbody",{ref:t,className:(0,o.cn)("[&_tr:last-child]:border-0",r),...i})});l.displayName="TableBody";let u=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("tfoot",{ref:t,className:(0,o.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...i})});u.displayName="TableFooter";let c=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("tr",{ref:t,className:(0,o.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...i})});c.displayName="TableRow";let d=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("th",{ref:t,className:(0,o.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...i})});d.displayName="TableHead";let f=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("td",{ref:t,className:(0,o.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...i})});f.displayName="TableCell";let m=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)("caption",{ref:t,className:(0,o.cn)("mt-4 text-sm text-muted-foreground",r),...i})});m.displayName="TableCaption"},61985:function(e,t,r){"use strict";r.d(t,{L:function(){return i},o:function(){return n}});let n="name@yourcompany.com",i=20},36850:function(e,t,r){"use strict";r.d(t,{S:function(){return a},n:function(){return l}});var n=r(2265),i=r(50976),o=r(15357);let s=e=>{let t=(0,o.d)(e);n.useEffect(()=>()=>{t.current()},[])};function a(e,t,r){let a=(0,o.d)(e),l=n.useMemo(()=>(0,i.Z)(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return a.current(...t)},t,r),[]);return s(()=>l.cancel()),{run:l,cancel:l.cancel,flush:l.flush}}function l(e,t,r){let[i,o]=n.useState(e),{run:s}=a(()=>{o(e)},t,r);return n.useEffect(()=>{s()},[e]),[i,o]}},15357:function(e,t,r){"use strict";r.d(t,{d:function(){return i}});var n=r(2265);function i(e){let t=n.useRef(e);return t.current=e,t}},34463:function(e,t,r){"use strict";var n=r(90440).Z.Symbol;t.Z=n},87916:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(34463),i=Object.prototype,o=i.hasOwnProperty,s=i.toString,a=n.Z?n.Z.toStringTag:void 0,l=function(e){var t=o.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch(e){}var i=s.call(e);return n&&(t?e[a]=r:delete e[a]),i},u=Object.prototype.toString,c=n.Z?n.Z.toStringTag:void 0,d=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?l(e):u.call(e)}},18838:function(e,t){"use strict";var r="object"==typeof global&&global&&global.Object===Object&&global;t.Z=r},90440:function(e,t,r){"use strict";var n=r(18838),i="object"==typeof self&&self&&self.Object===Object&&self,o=n.Z||i||Function("return this")();t.Z=o},50976:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(64164),i=r(90440),o=function(){return i.Z.Date.now()},s=r(4091),a=Math.max,l=Math.min,u=function(e,t,r){var i,u,c,d,f,m,v=0,h=!1,x=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var r=i,n=u;return i=u=void 0,v=t,d=e.apply(n,r)}function j(e){var r=e-m,n=e-v;return void 0===m||r>=t||r<0||x&&n>=c}function b(){var e,r,n,i=o();if(j(i))return y(i);f=setTimeout(b,(e=i-m,r=i-v,n=t-e,x?l(n,c-r):n))}function y(e){return(f=void 0,p&&i)?g(e):(i=u=void 0,d)}function N(){var e,r=o(),n=j(r);if(i=arguments,u=this,m=r,n){if(void 0===f)return v=e=m,f=setTimeout(b,t),h?g(e):d;if(x)return clearTimeout(f),f=setTimeout(b,t),g(m)}return void 0===f&&(f=setTimeout(b,t)),d}return t=(0,s.Z)(t)||0,(0,n.Z)(r)&&(h=!!r.leading,c=(x="maxWait"in r)?a((0,s.Z)(r.maxWait)||0,t):c,p="trailing"in r?!!r.trailing:p),N.cancel=function(){void 0!==f&&clearTimeout(f),v=0,i=m=u=f=void 0},N.flush=function(){return void 0===f?d:y(o())},N}},64164:function(e,t){"use strict";t.Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},92403:function(e,t){"use strict";t.Z=function(e){return null!=e&&"object"==typeof e}},45856:function(e,t,r){"use strict";var n=r(87916),i=r(92403);t.Z=function(e){return"symbol"==typeof e||(0,i.Z)(e)&&"[object Symbol]"==(0,n.Z)(e)}},4091:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=/\s/,i=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t},o=/^\s+/,s=r(64164),a=r(45856),l=0/0,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,m=function(e){if("number"==typeof e)return e;if((0,a.Z)(e))return l;if((0,s.Z)(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=(0,s.Z)(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=(t=e)?t.slice(0,i(t)+1).replace(o,""):t;var n=c.test(e);return n||d.test(e)?f(e.slice(2),n?2:8):u.test(e)?l:+e}}},function(e){e.O(0,[768,9109,584,1396,1424,7753,4168,2445,2971,7864,1744],function(){return e(e.s=44680)}),_N_E=e.O()}]);