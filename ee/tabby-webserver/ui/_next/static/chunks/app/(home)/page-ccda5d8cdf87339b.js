(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5608],{97895:function(){},95588:function(e,t,s){Promise.resolve().then(s.bind(s,19820))},19820:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return ej}});var a=s(36164),n=s(3546),l=s(42891),r=s.n(l),i=s(11978),c=s(83332),o=s(40055),d=s(21808),u=s(6246),x=s(98454),m=s(80605),f=s(25647),h=s(37266),p=s(70410),g=s(1544),j=s(57830),v=s(68172),y=s(30601),b=s(91302),N=s(31458),w=s(30220),M=s(81565);let Y="community-dialog-shown";function k(){let{status:e}=(0,b.kP)(),[t,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{"authenticated"!==e||localStorage.getItem(Y)||(s(!0),localStorage.setItem(Y,"true"))},[e]),(0,a.jsx)(w.Vq,{open:t,onOpenChange:s,children:(0,a.jsxs)(w.cZ,{children:[(0,a.jsxs)(w.fK,{className:"gap-3",children:[(0,a.jsx)(w.$N,{children:"Join the Tabby community"}),(0,a.jsx)(w.Be,{children:"Connect with other contributors building Tabby. Share knowledge, get help, and contribute to the open-source project."})]}),(0,a.jsx)(w.cN,{className:"sm:justify-start",children:(0,a.jsxs)("a",{target:"_blank",href:"https://links.tabbyml.com/join-slack-webserver",className:(0,N.d)(),children:[(0,a.jsx)(M.IconSlack,{className:"-ml-2 h-8 w-8"}),"Join us on Slack"]})})]})})}var A=s(24203),D=s(63743),S=s(52569),I=s(7449),Z=s(39027);let E={ease:"easeOut",duration:.5};function C(e){let{viewport:t,children:s,className:n,style:l,delay:r}=e;return(0,a.jsx)(Z.E.div,{initial:"initial",whileInView:"onscreen",viewport:t,style:l,className:n,children:(0,a.jsx)(Z.E.div,{variants:{initial:{opacity:0,y:24,transition:E},onscreen:{opacity:1,y:0,transition:{...E,delay:r}}},children:s})})}var P=s(94755),R=s(36619),$=s(99092),T=s.n($),O=s(72223),H=s(42390),q=s.n(H),F=s(18500),_=s(9010),B=s(35814),Q=s(39018),V=s.n(Q),L=s(60079),z=s(994),K=s(37568),U=s(16294),G=s(82382),J=s(85948),W=s(79972);function X(e){let{active:t,payload:s}=e;if(t&&s&&s.length){let{value:e,views:t,name:n}=s[0].payload;return t?(0,a.jsx)(W.Zb,{children:(0,a.jsxs)(W.aY,{className:"flex flex-col gap-y-0.5 px-4 py-2 text-sm",children:[(0,a.jsxs)("p",{className:"flex items-center",children:[(0,a.jsx)("span",{className:"mr-3 inline-block w-20",children:"Rate:"}),(0,a.jsxs)("b",{children:[e,"%"]})]}),(0,a.jsx)("p",{className:"text-muted-foreground",children:n})]})}):null}return null}function ee(e){let{active:t,payload:s,type:n}=e;if(t&&s&&s.length){let{views:e,selects:t,name:l}=s[0].payload;return e?(0,a.jsx)(W.Zb,{children:(0,a.jsxs)(W.aY,{className:"flex flex-col gap-y-0.5 px-4 py-2 text-sm",children:[("view"===n||"all"===n)&&(0,a.jsxs)("p",{className:"flex items-center",children:[(0,a.jsx)("span",{className:"mr-3 inline-block w-20",children:"Completions:"}),(0,a.jsx)("b",{children:e})]}),("accept"===n||"all"===n)&&(0,a.jsxs)("p",{className:"flex items-center",children:[(0,a.jsx)("span",{className:"mr-3 inline-block w-20",children:"Acceptances:"}),(0,a.jsx)("b",{children:t})]}),(0,a.jsx)("p",{className:"text-muted-foreground",children:l})]})}):null}return null}function et(e){let{from:t,to:s,dailyStats:n}=e,{theme:l}=(0,_.X)(),r=(0,B.Z)(null==n?void 0:n.map(e=>e.views)),i=(0,B.Z)(null==n?void 0:n.map(e=>e.selects)),c=(0,R.Z)({start:t,end:s}),o={},d={};null==n||n.forEach(e=>{let t=T()(e.start).format("YYYY-MM-DD");o[t]=o[t]||0,d[t]=d[t]||0,o[t]+=e.views,d[t]+=e.selects},{});let u=0===r?0:(i/r*100).toFixed(2),x=c.map(e=>{let t=T()(e).format("YYYY-MM-DD"),s=o[t]||0,a=d[t]||0;return{name:T()(e).format("MMMM D"),value:0===s?0:parseFloat((a/s*100).toFixed(2)),selects:a,views:s}}),m=c.map(e=>{let t=T()(e).format("YYYY-MM-DD"),s=o[t]||0,a=d[t]||0,n=s-a;return{name:T()(e).format("MMMM D"),views:s,selects:a,pending:0===s?.5:n,realPending:0===s?0:n,viewPlaceholder:0===s?.5:0,selectPlaceholder:0===a?.5:0}});return(0,a.jsxs)("div",{className:"flex w-full flex-col items-center justify-center space-y-5 md:flex-row md:space-x-4 md:space-y-0 xl:justify-start",children:[(0,a.jsx)(C,{viewport:{margin:"-140px 0px 0px 0px"},delay:.15,className:"flex-1 self-stretch",children:(0,a.jsxs)(W.Zb,{className:"flex flex-col justify-between self-stretch rounded-2xl bg-transparent pb-4",children:[(0,a.jsx)(W.Ol,{className:"flex flex-row items-center justify-between space-y-0 px-4 pb-1 pt-4",children:(0,a.jsx)(W.ll,{className:"text-base font-medium tracking-normal",children:"Acceptance Rate"})}),(0,a.jsx)(W.aY,{className:"mb-1 px-4 py-0",children:(0,a.jsxs)("div",{className:"text-xl font-semibold",style:{fontFamily:"var(--font-montserrat)"},children:[u,"%"]})}),(0,a.jsx)(L.h,{width:"100%",height:68,children:(0,a.jsxs)(z.w,{data:x,margin:{top:10,right:20,left:15,bottom:5},children:[(0,a.jsx)(K.x,{type:"monotone",dataKey:"value",stroke:"dark"===l?"#e8e1d3":"#54452c",strokeWidth:1.5}),(0,a.jsx)(U.u,{cursor:{fill:"transparent"},content:(0,a.jsx)(X,{})})]})})]})}),(0,a.jsx)(C,{viewport:{margin:"-140px 0px 0px 0px"},delay:.2,className:"flex-1 self-stretch",children:(0,a.jsxs)(W.Zb,{className:"flex flex-col justify-between self-stretch bg-transparent pb-4",children:[(0,a.jsx)(W.Ol,{className:"flex flex-row items-center justify-between space-y-0 px-4 pb-1 pt-4",children:(0,a.jsx)(W.ll,{className:"text-base font-medium tracking-normal",children:"Completions"})}),(0,a.jsx)(W.aY,{className:"mb-1 px-4 py-0",children:(0,a.jsx)("div",{className:"text-xl font-semibold",style:{fontFamily:"var(--font-montserrat)"},children:V()(r).format("0,0")})}),(0,a.jsx)(L.h,{width:"100%",height:68,children:(0,a.jsxs)(G.v,{data:m,margin:{top:0===r?30:5,right:15,left:15,bottom:0},children:[(0,a.jsx)(J.$,{dataKey:"views",stackId:"stats",fill:"dark"===l?"#e8e1d3":"#54452c",radius:3}),(0,a.jsx)(J.$,{dataKey:"viewPlaceholder",stackId:"stats",fill:"dark"===l?"#423929":"#e8e1d3",radius:3}),(0,a.jsx)(U.u,{cursor:{fill:"transparent"},content:(0,a.jsx)(ee,{type:"view"})})]})})]})}),(0,a.jsx)(C,{viewport:{margin:"-140px 0px 0px 0px"},delay:.25,className:"flex-1 self-stretch",children:(0,a.jsxs)(W.Zb,{className:"flex flex-col justify-between self-stretch bg-transparent pb-4",children:[(0,a.jsx)(W.Ol,{className:"flex flex-row items-center justify-between space-y-0 px-4 pb-1 pt-4",children:(0,a.jsx)(W.ll,{className:"text-base font-medium tracking-normal",children:"Acceptances"})}),(0,a.jsx)(W.aY,{className:"mb-1 px-4 py-0",children:(0,a.jsx)("div",{className:"text-xl font-semibold",style:{fontFamily:"var(--font-montserrat)"},children:V()(i).format("0,0")})}),(0,a.jsx)(L.h,{width:"100%",height:68,children:(0,a.jsxs)(G.v,{data:m,margin:{top:0===r?30:5,right:15,left:15,bottom:0},children:[(0,a.jsx)(J.$,{dataKey:"selects",stackId:"stats",fill:"dark"===l?"#e8e1d3":"#54452c",radius:3}),(0,a.jsx)(J.$,{dataKey:"selectPlaceholder",stackId:"stats",fill:"dark"===l?"#423929":"#e8e1d3",radius:3}),(0,a.jsx)(U.u,{cursor:{fill:"transparent"},content:(0,a.jsx)(ee,{type:"accept"})})]})})]})})]})}function es(e){let{data:t}=e,{theme:s}=(0,_.X)(),n=(0,P.iP)(),l=n.width||0;return(0,a.jsx)("div",{className:"h-[152px]",children:(0,a.jsx)(O.ZP,{data:t,colorScheme:"dark"===s?"dark":"light",theme:{light:["#ebedf0","#9be9a8","#40c463","#30a14e","#216e39"],dark:["rgb(45, 51, 59)","#0e4429","#006d32","#26a641","#39d353"]},blockSize:l>=968?12:11,hideTotalCount:!0,fontSize:12})})}function ea(){var e,t,s;let n,l;let[{data:r}]=(0,x.P)(),c=(0,i.useSearchParams)(),d=(0,m.UA)(),u=d||"true"===c.get("sample"),f=T()().subtract(6,"day").startOf("day").utc().format(),h=T()().endOf("day").utc().format(),[{data:g,fetching:j}]=(0,o.aM)({query:p.Cl,variables:{start:f,end:h,users:null==r?void 0:null===(e=r.me)||void 0===e?void 0:e.id}});if(u){let e=(0,R.Z)({start:T()().subtract(6,"day").toDate(),end:T()().toDate()});n=e.map(e=>{let t=[F.SQ.Typescript,F.SQ.Python,F.SQ.Rust],s=q()(T()(e).format("YYYY-MM-DD")+(null==r?void 0:r.me.id)),a=Math.ceil(20*s()),n=Math.ceil(a/.35);return{start:T()(e).utc().format(),end:T()(e).add(1,"day").utc().format(),completions:n,selects:a,views:n,language:t[a%t.length]}})}else n=null==g?void 0:g.dailyStats.map(e=>({start:e.start,end:e.end,completions:e.completions,selects:e.selects,views:e.views,language:e.language}));let[{data:v,fetching:y}]=(0,o.aM)({query:p.Y6,variables:{users:null==r?void 0:null===(t=r.me)||void 0===t?void 0:t.id}}),b=0;if(u){let e=(0,R.Z)({start:T()().toDate(),end:T()().subtract(365,"days").toDate()});l=e.map(e=>{let t=q()(T()(e).format("YYYY-MM-DD")+(null==r?void 0:r.me.id)),s=Math.ceil(20*t()),a=s+Math.floor(10*t());return{start:T()(e).format("YYYY-MM-DD[T]HH:mm:ss[Z]"),end:T()(e).add(1,"day").format("YYYY-MM-DD[T]HH:mm:ss[Z]"),completions:a,selects:s,views:a}})}else l=null==v?void 0:v.dailyStatsInPastYear.map(e=>({start:e.start,end:e.end,completions:e.completions,selects:e.selects,views:e.views}));let N=(null==l?void 0:l.reduce((e,t)=>{let s=T().utc(t.start).format("YYYY-MM-DD");return b+=t.views+t.selects,{...e,[s]:t.views}},{}))||{},w=Array(365).fill("").map((e,t)=>{let s=T()().subtract(t,"days").format("YYYY-MM-DD"),a=N[s]||0;return{date:s,count:a,level:Math.min(4,Math.ceil(a/5))}}).reverse();return(null==r?void 0:null===(s=r.me)||void 0===s?void 0:s.id)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C,{viewport:{margin:"-140px 0px 0px 0px"},style:{width:"100%"},delay:.1,children:(0,a.jsxs)("div",{className:"rounded-2xl border px-[1.125rem] py-4",children:[(0,a.jsxs)("div",{className:"mb-3 text-base",children:[(0,a.jsx)("span",{className:"font-semibold",children:b})," ","activities in the past year"]}),(0,a.jsx)(es,{data:w})]})}),(0,a.jsx)(et,{dailyStats:n,from:T()().subtract(6,"day").toDate(),to:T()().toDate()})]}):(0,a.jsx)(a.Fragment,{})}var en=s(70652),el=s.n(en),er=s(54767),ei=s(43240),ec=s(36758),eo=s(11208),ed=s(3448),eu=s(54173),ex=s(6230);let em=(0,n.createContext)({}),ef=(0,ei.BX)("\n  query ListThreads(\n    $ids: [ID!]\n    $isEphemeral: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    threads(\n      ids: $ids\n      isEphemeral: $isEphemeral\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          userId\n          createdAt\n          updatedAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n");function eh(e){var t;let{className:s,onNavigateToThread:l}=e,[r,i]=(0,ec.d)(),[c,d]=(0,n.useState)(),[{data:u,fetching:x}]=(0,o.aM)({query:ef,variables:{last:10,before:c,isEphemeral:!1}}),[{data:m,fetching:f}]=(0,o.aM)({query:p.Gx}),h=(0,n.useMemo)(()=>{var e;let t=null==u?void 0:null===(e=u.threads)||void 0===e?void 0:e.edges;return(null==t?void 0:t.length)?t.slice().reverse():[]},[null==u?void 0:null===(t=u.threads)||void 0===t?void 0:t.edges]),j=null==u?void 0:u.threads.pageInfo;return(0,a.jsx)(em.Provider,{value:{allUsers:r,fetchingUsers:i,sources:null==m?void 0:m.contextInfo.sources,fetchingSources:f,onNavigateToThread:l},children:(0,a.jsx)("div",{className:(0,g.cn)("w-full",s),children:(0,a.jsx)(C,{delay:.4,style:{width:"100%"},children:(0,a.jsxs)(ex.Z,{loading:x||i,fallback:(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(M.IconSpinner,{className:"h-8 w-8"})}),children:[(0,a.jsx)("div",{className:"mb-2.5 w-full text-lg font-semibold",children:"Recent Activities"}),(0,a.jsx)(eo.Z,{className:"mb-4 w-full"}),(0,a.jsxs)(Z.E.div,{initial:"initial",whileInView:"onscreen",viewport:{margin:"0px 0px -140px 0px",once:!0},transition:{delay:.5,delayChildren:.3,staggerChildren:.2},style:{width:"100%",paddingBottom:"1rem"},children:[(0,a.jsx)("div",{className:"flex flex-col gap-3 text-sm",children:h.map(e=>(0,a.jsx)(ep,{data:e},e.node.id))}),!!(null==j?void 0:j.hasPreviousPage)&&(0,a.jsx)(eu.d,{onLoad:()=>{(null==j?void 0:j.startCursor)&&d(j.startCursor)},isFetching:x,intersectionOptions:{rootMargin:"0px 0px 200px 0px"},children:(0,a.jsx)("div",{className:"mt-8 flex justify-center",children:(0,a.jsx)(M.IconSpinner,{className:"h-8 w-8"})})})]})]})})})})}function ep(e){var t;let{data:s}=e,l=s.node.userId,r=s.node.id,{sources:i,allUsers:c,onNavigateToThread:u}=(0,n.useContext)(em),[{data:x,fetching:m}]=(0,o.aM)({query:p.r4,variables:{first:1,threadId:s.node.id}}),f=null==x?void 0:null===(t=x.threadMessages)||void 0===t?void 0:t.edges,h=(0,n.useMemo)(()=>(null==f?void 0:f.length)?(0,g.i8)(i||[],f[0].node.content):"",[f,i]),j=(0,n.useMemo)(()=>{let e=h.slice(0,d.$I);return(0,er.Z)(e)},[h]),v=(0,n.useMemo)(()=>null==c?void 0:c.find(e=>e.id===s.node.userId),[c,l]);return(0,a.jsx)(el(),{href:h?"/search/".concat(j,"-").concat(r):"javascript:void",onClick:u,children:(0,a.jsxs)("div",{className:"transform-bg group flex-1 overflow-hidden rounded-lg px-3 py-2 hover:bg-accent",children:[(0,a.jsxs)("div",{className:"mb-1.5 flex items-center gap-2",children:[(0,a.jsx)(M.IconFiles,{className:"shrink-0"}),(0,a.jsx)(ex.Z,{loading:m,fallback:(0,a.jsx)("div",{className:"w-full py-1.5",children:(0,a.jsx)(ed.O,{className:"w-[60%]"})}),children:(0,a.jsx)("div",{className:"break-anywhere truncate text-lg font-medium",children:h})})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(S.Yt,{user:v,className:"mr-0.5 h-4 w-4 shrink-0"}),(0,a.jsxs)("div",{className:"flex items-baseline gap-0.5",children:[(0,a.jsx)("div",{className:"text-sm",children:(null==v?void 0:v.name)||(null==v?void 0:v.email)}),(0,a.jsx)("span",{className:"text-muted-foreground",children:"\xb7"}),(0,a.jsx)("div",{className:"text-xs text-muted-foreground",children:function(e,t){let s=T()(e);if(s.isBefore(T()().subtract(1,"year"))){let e=s.format("MMM D, YYYY");return"".concat(t," on ").concat(e)}if(s.isBefore(T()().subtract(1,"month"))){let e=s.format("MMM D");return"".concat(t," on ").concat(e)}return"".concat(t," ").concat(s.fromNow())}(s.node.createdAt,"Asked")})]})]})]})})}function eg(){let e=(0,n.useRef)(!1),t=(0,n.useRef)(null),{data:s}=(0,u.Q)(),[{data:l}]=(0,x.P)(),b=(0,m.xG)(),[N]=(0,y.Hb)(),w=(0,n.useRef)(null),M=(0,i.useRouter)(),[Y,k]=(0,n.useState)(!1),[{data:Z,fetching:E}]=(0,o.aM)({query:p.Gx}),P=(0,f.o)(h.CR,e=>e.homePage);if((0,n.useEffect)(()=>{M.prefetch("/search")},[M]),(0,n.useLayoutEffect)(()=>{e.current||(P&&setTimeout(()=>{var e;null===(e=t.current)||void 0===e||e.scrollTo({top:Number(P)}),(0,h.wh)()}),e.current=!0)},[]),!s||!(null==l?void 0:l.me))return(0,a.jsx)(a.Fragment,{});let R=N?{height:"calc(100vh - ".concat(y.wt,")")}:{height:"100vh"};return(0,a.jsxs)(j.ScrollArea,{style:R,ref:t,children:[(0,a.jsx)("header",{className:"fixed right-0 top-0 z-10 flex h-16 items-center justify-end px-4 lg:px-10",children:(0,a.jsxs)("div",{className:"flex items-center gap-x-6",children:[(0,a.jsx)(v.q,{children:(0,a.jsx)(D.T,{})}),(0,a.jsx)(I.Z,{showHome:!1,showSetting:!0,children:(0,a.jsx)(S.SQ,{className:"h-10 w-10 border"})})]})}),(0,a.jsx)("main",{className:"flex-col items-center justify-center pt-16 lg:flex",ref:w,children:(0,a.jsxs)("div",{className:"mx-auto flex w-full flex-col items-center gap-6 px-10 lg:-mt-[2vh] lg:max-w-4xl lg:px-0",children:[(0,a.jsx)(C,{viewport:{margin:"-70px 0px 0px 0px"},children:(0,a.jsx)(r(),{src:c.Z,alt:"logo",width:192,className:(0,g.cn)("mt-4 invert dark:invert-0",{"mb-4":b,"mb-2":!b})})}),b&&(0,a.jsx)(C,{viewport:{margin:"-140px 0px 0px 0px"},style:{width:"100%"},delay:.05,children:(0,a.jsx)(A.Z,{onSearch:(e,t)=>{k(!0),sessionStorage.setItem(d.$6.SEARCH_INITIAL_MSG,e),sessionStorage.setItem(d.$6.SEARCH_INITIAL_CONTEXTS,JSON.stringify(t)),M.push("/search")},showBetaBadge:!0,autoFocus:!0,loadingWithSpinning:!0,isLoading:Y,cleanAfterSearch:!1,contextInfo:null==Z?void 0:Z.contextInfo,fetchingContextInfo:E})}),(0,a.jsx)(ea,{}),(0,a.jsx)(eh,{className:"lg:mt-8",onNavigateToThread:()=>{t.current&&(0,h.F0)(t.current.scrollTop)}})]})})]})}function ej(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(eg,{}),(0,a.jsx)(k,{})]})}},54173:function(e,t,s){"use strict";s.d(t,{d:function(){return c}});var a=s(36164),n=s(3546),l=s(76297),r=s(1544);let i=e=>{let{onLoad:t,isFetching:s,children:i,className:c,intersectionOptions:o}=e,{ref:d,inView:u}=(0,l.YD)(o);return n.useEffect(()=>{u&&!s&&(null==t||t())},[u]),(0,a.jsx)("div",{className:(0,r.cn)("w-full",c),ref:d,children:null!=i?i:(0,a.jsx)("div",{children:"loading..."})})},c=e=>(0,a.jsx)(i,{...e})},6230:function(e,t,s){"use strict";var a=s(36164),n=s(3546),l=s(24449),r=s(90379);t.Z=e=>{let{loading:t,fallback:s,delay:i,children:c}=e,[o,d]=n.useState(!t),[u]=(0,l.n)(o,null!=i?i:200);return(n.useEffect(()=>{t||o||d(!0)},[t]),u)?c:s||(0,a.jsx)(r.cg,{})}},30220:function(e,t,s){"use strict";s.d(t,{$N:function(){return h},Be:function(){return p},Vq:function(){return c},cN:function(){return f},cZ:function(){return x},fK:function(){return m},hg:function(){return o}});var a=s(36164),n=s(3546),l=s(4318),r=s(1663),i=s(1544);let c=l.fC,o=l.xz,d=l.h_;l.x8;let u=n.forwardRef((e,t)=>{let{className:s,...n}=e;return(0,a.jsx)(l.aV,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...n})});u.displayName=l.aV.displayName;let x=n.forwardRef((e,t)=>{let{className:s,children:n,...c}=e;return(0,a.jsxs)(d,{children:[(0,a.jsx)(u,{}),(0,a.jsxs)(l.VY,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s),...c,children:[n,(0,a.jsxs)(l.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(r.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});x.displayName=l.VY.displayName;let m=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...s})};m.displayName="DialogHeader";let f=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...s})};f.displayName="DialogFooter";let h=n.forwardRef((e,t)=>{let{className:s,...n}=e;return(0,a.jsx)(l.Dx,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",s),...n})});h.displayName=l.Dx.displayName;let p=n.forwardRef((e,t)=>{let{className:s,...n}=e;return(0,a.jsx)(l.dk,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",s),...n})});p.displayName=l.dk.displayName},36758:function(e,t,s){"use strict";s.d(t,{d:function(){return r}});var a=s(3546),n=s(40055),l=s(70410);function r(){let[{data:e,fetching:t,error:s}]=(0,n.aM)({query:l.TH}),r=(0,a.useMemo)(()=>{var t;return null!==(t=null==e?void 0:e.users.edges.map(e=>e.node))&&void 0!==t?t:[]},[null==e?void 0:e.users]);return[r,t,s]}},6246:function(e,t,s){"use strict";s.d(t,{Q:function(){return l}});var a=s(21454),n=s(3765);function l(){return(0,a.ZP)("/v1/health",e=>(0,n.Z)(e,{errorHandler:()=>{throw Error("Unhealth")}}),{shouldRetryOnError:!1})}},25647:function(e,t,s){"use strict";s.d(t,{o:function(){return l}});var a=s(3546),n=s(38785);let l=(e,t)=>{let s=(0,n.U)(),l=e(e=>null==e?void 0:e._hasHydrated),r=e(t),[i,c]=a.useState(s&&l?r:void 0);return a.useEffect(()=>{c(r)},[r]),i}},83332:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo-dark.362a169d.png",height:149,width:395,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAOklEQVR42gXAIQqAMBQA0A+K3eIVHNhEk21Wk5iN4g6w6z9GyBaDZDLr9OH0qD6/4nWHUZLtNqvL0QDmsR1AxwcSfQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}}},function(e){e.O(0,[8415,7565,3078,753,1386,55,1058,4007,9664,3643,2578,6345,9421,4421,1454,4546,4318,9275,9148,4405,4553,9073,446,9018,514,3031,7266,1544,1565,3821,1068,3375,5289,1744],function(){return e(e.s=95588)}),_N_E=e.O()}]);