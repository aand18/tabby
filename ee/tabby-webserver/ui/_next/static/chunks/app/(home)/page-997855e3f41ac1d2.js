(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5608],{75042:function(){},91783:function(e,t,n){Promise.resolve().then(n.bind(n,51824))},51824:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ed}});var s=n(57437),a=n(2265),r=n(24033),l=n(81860),i=n(60106),o=n(13287),c=n(10356),d=n(52720),u=n(19567),f=n(58001),m=n(7820),x=n(93023),h=n(86110),p=n(84168),j=n(51908),g=n(66672),v=n(16775),b=n(33555),N=n(12609);let y="community-dialog-shown";function w(){let{status:e}=(0,f.kP)(),[t,n]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{"authenticated"!==e||localStorage.getItem(y)||(n(!0),localStorage.setItem(y,"true"))},[e]),(0,s.jsx)(N.Vq,{open:t,onOpenChange:n,children:(0,s.jsxs)(N.cZ,{children:[(0,s.jsxs)(N.fK,{className:"gap-3",children:[(0,s.jsx)(N.$N,{children:"Join the Tabby community"}),(0,s.jsx)(N.Be,{children:"Connect with other contributors building Tabby. Share knowledge, get help, and contribute to the open-source project."})]}),(0,s.jsx)(N.cN,{className:"sm:justify-start",children:(0,s.jsxs)("a",{target:"_blank",href:"https://links.tabbyml.com/join-slack-webserver",className:(0,x.d)(),children:[(0,s.jsx)(p.IconSlack,{className:"-ml-2 h-8 w-8"}),"Join us on Slack"]})})]})})}var k=n(15376),Y=n(55909),M=n(50439),C=n(42232),D=n(62067),S=n.n(D),Z=n(6435),T=n(76586),R=n(45253),I=n(44909),P=n(31346),F=n(561),O=n(36612),_=n(24235),E=n(50039),z=n(86812),q=n(40711),K=n.n(q),B=n(99109),H=n(70349),A=n(67887),U=n(57166),W=n(25645),Q=n(70825),V=n(61958),$=n(55194),G=n.n($),J=n(38227),L=n(19223);function X(e){let{active:t,payload:n}=e;if(t&&n&&n.length){let{value:e,views:t,name:a}=n[0].payload;return t?(0,s.jsx)(h.Zb,{children:(0,s.jsxs)(h.aY,{className:"flex flex-col gap-y-0.5 px-4 py-2 text-sm",children:[(0,s.jsxs)("p",{className:"flex items-center",children:[(0,s.jsx)("span",{className:"mr-3 inline-block w-20",children:"Rate:"}),(0,s.jsxs)("b",{children:[e,"%"]})]}),(0,s.jsx)("p",{className:"text-muted-foreground",children:a})]})}):null}return null}function ee(e){let{active:t,payload:n,type:a}=e;if(t&&n&&n.length){let{views:e,selects:t,name:r}=n[0].payload;return e?(0,s.jsx)(h.Zb,{children:(0,s.jsxs)(h.aY,{className:"flex flex-col gap-y-0.5 px-4 py-2 text-sm",children:[("view"===a||"all"===a)&&(0,s.jsxs)("p",{className:"flex items-center",children:[(0,s.jsx)("span",{className:"mr-3 inline-block w-20",children:"Completions:"}),(0,s.jsx)("b",{children:e})]}),("accept"===a||"all"===a)&&(0,s.jsxs)("p",{className:"flex items-center",children:[(0,s.jsx)("span",{className:"mr-3 inline-block w-20",children:"Acceptances:"}),(0,s.jsx)("b",{children:t})]}),(0,s.jsx)("p",{className:"text-muted-foreground",children:r})]})}):null}return null}function et(e){let{from:t,to:n,dailyStats:a}=e,{theme:r}=(0,Z.F)(),l=(0,V.Z)(null==a?void 0:a.map(e=>e.views)),i=(0,V.Z)(null==a?void 0:a.map(e=>e.selects)),o=(0,C.Z)({start:t,end:n}),c={},d={};null==a||a.forEach(e=>{let t=S()(e.start).format("YYYY-MM-DD");c[t]=c[t]||0,d[t]=d[t]||0,c[t]+=e.views,d[t]+=e.selects},{});let u=0===l?0:(i/l*100).toFixed(2),f=o.map(e=>{let t=S()(e).format("YYYY-MM-DD"),n=c[t]||0,s=d[t]||0;return{name:S()(e).format("MMMM D"),value:0===n?0:parseFloat((s/n*100).toFixed(2)),selects:s,views:n}}),m=o.map(e=>{let t=S()(e).format("YYYY-MM-DD"),n=c[t]||0,s=d[t]||0,a=n-s;return{name:S()(e).format("MMMM D"),views:n,selects:s,pending:0===n?.5:a,realPending:0===n?0:a,viewPlaceholder:0===n?.5:0,selectPlaceholder:0===s?.5:0}});return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex w-full flex-col items-center justify-center space-y-5 md:flex-row md:space-x-6 md:space-y-0 xl:justify-start",children:[(0,s.jsxs)(h.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-transparent pb-6 md:block",children:[(0,s.jsx)(h.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-1",children:(0,s.jsx)(h.ll,{className:"text-base font-normal tracking-tight",children:"Acceptance Rate"})}),(0,s.jsx)(h.aY,{children:(0,s.jsxs)("div",{className:"text-2xl font-bold",children:[u,"%"]})}),(0,s.jsx)(R.h,{width:"100%",height:60,children:(0,s.jsxs)(J.w,{data:f,margin:{top:15,right:30,left:20,bottom:5},children:[(0,s.jsx)(L.x,{type:"monotone",dataKey:"value",stroke:"dark"===r?"#e8e1d3":"#54452c",strokeWidth:1.5}),(0,s.jsx)(z.u,{cursor:{fill:"transparent"},content:(0,s.jsx)(X,{})})]})})]}),(0,s.jsxs)(h.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-transparent pb-6 md:block",children:[(0,s.jsx)(h.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-1",children:(0,s.jsx)(h.ll,{className:"text-base font-normal tracking-tight",children:"Completions"})}),(0,s.jsx)(h.aY,{children:(0,s.jsx)("div",{className:"text-2xl font-bold",children:G()(l).format("0,0")})}),(0,s.jsx)(R.h,{width:"100%",height:60,children:(0,s.jsxs)(I.v,{data:m,margin:{top:0===l?40:5,right:20,left:20,bottom:5},children:[(0,s.jsx)(P.$,{dataKey:"views",stackId:"stats",fill:"dark"===r?"#e8e1d3":"#54452c",radius:3}),(0,s.jsx)(P.$,{dataKey:"viewPlaceholder",stackId:"stats",fill:"dark"===r?"#423929":"#e8e1d3",radius:3}),(0,s.jsx)(z.u,{cursor:{fill:"transparent"},content:(0,s.jsx)(ee,{type:"view"})})]})})]}),(0,s.jsxs)(h.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-transparent pb-6 md:block",children:[(0,s.jsx)(h.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-1",children:(0,s.jsx)(h.ll,{className:"text-base font-normal tracking-tight",children:"Acceptances"})}),(0,s.jsx)(h.aY,{children:(0,s.jsx)("div",{className:"text-2xl font-bold",children:G()(i).format("0,0")})}),(0,s.jsx)(R.h,{width:"100%",height:60,children:(0,s.jsxs)(I.v,{data:m,margin:{top:0===l?40:5,right:20,left:20,bottom:5},children:[(0,s.jsx)(P.$,{dataKey:"selects",stackId:"stats",fill:"dark"===r?"#e8e1d3":"#54452c",radius:3}),(0,s.jsx)(P.$,{dataKey:"selectPlaceholder",stackId:"stats",fill:"dark"===r?"#423929":"#e8e1d3",radius:3}),(0,s.jsx)(z.u,{cursor:{fill:"transparent"},content:(0,s.jsx)(ee,{type:"accept"})})]})})]})]})})}function en(e){let{data:t}=e,{theme:n}=(0,Z.F)(),a=(0,M.iP)(),r=a.width||0;return(0,s.jsx)(T.ZP,{data:t,colorScheme:"dark"===n?"dark":"light",theme:{light:["#ebedf0","#9be9a8","#40c463","#30a14e","#216e39"],dark:["rgb(45, 51, 59)","#0e4429","#006d32","#26a641","#39d353"]},blockSize:r>=1300?13:r>=1e3?8:r>=800?10:9,hideTotalCount:!0,showWeekdayLabels:!0})}let es=e=>{let{x:t,y:n,value:a,languageData:r,theme:l}=e,i=r.find(e=>e.name===a);return i&&0!==i.views?(0,s.jsx)("text",{x:+t,y:+n-7,fill:"dark"===l?"#e8e1d3":"#54452c",fontSize:10,fontWeight:"bold",textAnchor:"start",dominantBaseline:"middle",children:(0,A.t)(a)}):null};function ea(e){let{active:t,payload:n}=e;if(t&&n&&n.length){let{views:e,name:t}=n[0].payload;return e&&"NONE"!==t?(0,s.jsx)(h.Zb,{children:(0,s.jsxs)(h.aY,{className:"flex flex-col gap-y-0.5 px-4 py-2 text-sm",children:[(0,s.jsxs)("p",{className:"flex items-center",children:[(0,s.jsx)("span",{className:"mr-3 inline-block w-20",children:"Completions:"}),(0,s.jsx)("b",{children:e})]}),(0,s.jsx)("p",{className:"text-muted-foreground",children:(0,A.t)(t)})]})}):null}return null}function er(){var e,t,n;let a,l;let[{data:i}]=(0,c.P)(),{theme:o}=(0,Z.F)(),d=(0,r.useSearchParams)(),f=(0,u.UA)(),m=f||"true"===d.get("sample"),x=S()().subtract(6,"day").startOf("day").utc().format(),h=S()().endOf("day").utc().format(),[{data:p,fetching:j}]=(0,B.aM)({query:U.Cl,variables:{start:x,end:h,users:null==i?void 0:null===(e=i.me)||void 0===e?void 0:e.id}});if(m){let e=(0,C.Z)({start:S()().subtract(6,"day").toDate(),end:S()().toDate()});a=e.map(e=>{let t=[H.SQ.Typescript,H.SQ.Python,H.SQ.Rust],n=K()(S()(e).format("YYYY-MM-DD")+(null==i?void 0:i.me.id)),s=Math.ceil(20*n()),a=Math.ceil(s/.35);return{start:S()(e).utc().format(),end:S()(e).add(1,"day").utc().format(),completions:a,selects:s,views:a,language:t[s%t.length]}})}else a=null==p?void 0:p.dailyStats.map(e=>({start:e.start,end:e.end,completions:e.completions,selects:e.selects,views:e.views,language:e.language}));let[{data:g,fetching:v}]=(0,B.aM)({query:U.Y6,variables:{users:null==i?void 0:null===(t=i.me)||void 0===t?void 0:t.id}}),b=0;if(m){let e=(0,C.Z)({start:S()().toDate(),end:S()().subtract(365,"days").toDate()});l=e.map(e=>{let t=K()(S()(e).format("YYYY-MM-DD")+(null==i?void 0:i.me.id)),n=Math.ceil(20*t()),s=n+Math.floor(10*t());return{start:S()(e).format("YYYY-MM-DD[T]HH:mm:ss[Z]"),end:S()(e).add(1,"day").format("YYYY-MM-DD[T]HH:mm:ss[Z]"),completions:s,selects:n,views:s}})}else l=null==g?void 0:g.dailyStatsInPastYear.map(e=>({start:e.start,end:e.end,completions:e.completions,selects:e.selects,views:e.views}));let N=(null==l?void 0:l.reduce((e,t)=>{let n=S().utc(t.start).format("YYYY-MM-DD");return b+=t.views+t.selects,{...e,[n]:t.views}},{}))||{},y=Array(365).fill("").map((e,t)=>{let n=S()().subtract(t,"days").format("YYYY-MM-DD"),s=N[n]||0;return{date:n,count:s,level:Math.min(4,Math.ceil(s/5))}}).reverse(),w={};null==a||a.forEach(e=>{w[e.language]=w[e.language]||{views:0,name:e.language},w[e.language].views+=e.views});let k=Object.entries(w).map(e=>{let[t,n]=e;return{name:n.name,views:n.views}}).filter(e=>e.views).sort((e,t)=>t.views-e.views).slice(0,5);return(0===k.length&&(k=[{name:"NONE",views:.01}]),null==i?void 0:null===(n=i.me)||void 0===n?void 0:n.id)?(0,s.jsxs)("div",{className:"flex w-full flex-col gap-y-8",children:[(0,s.jsx)(Q.Z,{loading:v,fallback:(0,s.jsx)(W.O,{className:"h-48"}),children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("h3",{className:"mb-2 text-sm font-medium tracking-tight",children:[(0,s.jsx)("b",{children:b})," activities in the last year"]}),(0,s.jsx)("div",{className:"flex items-end justify-center rounded-xl border p-5",children:(0,s.jsx)(en,{data:y})})]})}),(0,s.jsx)(Q.Z,{loading:j,fallback:(0,s.jsx)(W.O,{className:"h-48"}),children:(0,s.jsx)(et,{dailyStats:a,from:S()().subtract(6,"day").toDate(),to:S()().toDate()})}),(0,s.jsx)(Q.Z,{loading:j,fallback:(0,s.jsx)(W.O,{className:"h-48"}),children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"mb-2 text-sm font-medium tracking-tight",children:"Top programming languages"}),(0,s.jsx)("div",{className:"flex items-end justify-center rounded-xl border p-5",children:(0,s.jsx)(R.h,{width:"100%",height:(k.length+1)*50,children:(0,s.jsxs)(I.v,{layout:"vertical",data:k,barCategoryGap:12,margin:{top:5,right:5,left:5,bottom:5},children:[(0,s.jsxs)(P.$,{dataKey:"views",radius:3,children:[(0,s.jsx)(F.e,{dataKey:"name",content:(0,s.jsx)(es,{languageData:k,theme:o})}),k.map((e,t)=>{let n=(0,A.zV)(e.name);return(0,s.jsx)(O.b,{fill:n||("dark"===o?"#e8e1d3":"#54452c")},"cell-".concat(t))})]}),(0,s.jsx)(_.K,{type:"number",fontSize:12,allowDecimals:!1}),(0,s.jsx)(E.B,{type:"category",dataKey:"name",hide:!0,padding:{bottom:10}}),(0,s.jsx)(z.u,{cursor:{fill:"transparent"},content:(0,s.jsx)(ea,{})})]})})})]})})]}):(0,s.jsx)(s.Fragment,{})}let el=(0,i.BX)("\n  mutation ResetUserAuthToken {\n    resetUserAuthToken\n  }\n");function ei(e){let{className:t}=e,[{data:n},a]=(0,c.P)(),r=(0,d.j)(),i=(0,m.D)(el,{onCompleted:()=>a()});return(null==n?void 0:n.me)?(0,s.jsxs)("div",{className:t,children:[(0,s.jsxs)(h.aY,{className:"flex flex-col gap-6 px-0",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)(g._,{className:"text-xs font-semibold",children:"Endpoint URL"}),(0,s.jsx)(b.q,{value:r})]}),(0,s.jsx)("span",{className:"flex items-center gap-1",children:(0,s.jsx)(j.I,{value:r,onChange:l.Z,className:"h-7 max-w-[320px] rounded-none border-x-0 !border-t-0 border-muted-foreground p-0 shadow-none dark:border-primary/50"})})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)(g._,{className:"text-xs font-semibold",children:"Token"}),(0,s.jsx)(b.q,{value:n.me.authToken}),(0,s.jsx)(x.z,{title:"Rotate",size:"icon",variant:"hover-destructive",onClick:()=>i(),children:(0,s.jsx)(p.IconRotate,{})})]}),(0,s.jsx)("span",{className:"flex items-center gap-1",children:(0,s.jsx)(j.I,{className:"h-7 max-w-[320px] rounded-none border-x-0 !border-t-0 border-muted-foreground p-0 font-mono shadow-none dark:border-primary/50",value:n.me.authToken,onChange:l.Z})})]})]}),(0,s.jsx)(h.eW,{className:"px-0 pb-2 text-xs text-muted-foreground",children:(0,s.jsxs)("span",{children:["Use information above for IDE extensions / plugins configuration, see"," ",(0,s.jsx)("a",{className:"underline",target:"_blank",href:"https://tabby.tabbyml.com/docs/extensions/configurations#server",children:"documentation website"})," ","for details"]})})]}):(0,s.jsx)(s.Fragment,{})}function eo(){let{data:e}=(0,o.Q)(),[{data:t}]=(0,c.P)(),n=(0,u.xG)(),r=(0,f.QJ)(),[l,i]=(0,a.useState)(!1);if(!e||!(null==t?void 0:t.me))return(0,s.jsx)(s.Fragment,{});let d=async()=>{l||(i(!0),await r(),i(!1))};return(0,s.jsx)("div",{className:"flex flex-1 justify-center lg:mt-[10vh]",children:(0,s.jsxs)("div",{className:"mx-auto flex w-screen flex-col px-5 py-20 lg:w-auto lg:flex-row lg:justify-center lg:gap-x-10 lg:px-0 lg:py-10",children:[(0,s.jsxs)("div",{className:"relative mb-5 flex flex-col rounded-lg pb-4 lg:mb-0 lg:mt-12 lg:w-64",children:[(0,s.jsx)(Y.Y,{className:"h-20 w-20 border-4 border-background"}),(0,s.jsxs)("div",{className:"mt-2 flex w-full",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(p.IconMail,{className:"text-muted-foreground"}),(0,s.jsx)("p",{className:"max-w-[10rem] truncate text-sm",children:t.me.email})]}),(0,s.jsx)(k.T,{className:"ml-auto"})]}),(0,s.jsx)(v.Z,{className:"my-4"}),(0,s.jsx)(ei,{}),(0,s.jsxs)("div",{className:"mt-auto flex flex-col gap-1 lg:mb-[28px]",children:[(0,s.jsx)(ec,{href:"/profile",icon:(0,s.jsx)(p.IconGear,{}),children:"Settings"}),n&&(0,s.jsx)(ec,{href:"/playground",icon:(0,s.jsx)(p.IconChat,{}),target:"_blank",children:"Chat Playground"}),(0,s.jsx)(ec,{href:"/files",icon:(0,s.jsx)(p.IconCode,{}),target:"_blank",children:"Code Browser"}),(0,s.jsxs)(ec,{icon:(0,s.jsx)(p.IconLogout,{}),onClick:d,children:[(0,s.jsx)("span",{children:"Sign out"}),l&&(0,s.jsx)(p.IconSpinner,{className:"ml-1"})]})]})]}),(0,s.jsx)("div",{className:"lg:min-h-[700px] lg:w-[calc(100vw-30rem)] xl:w-[62rem]",children:(0,s.jsx)(er,{})})]})})}function ec(e){let{children:t,icon:n,href:a,target:l,onClick:i}=e,o=(0,r.useRouter)();return(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("div",{className:"text-muted-foreground",children:n}),(0,s.jsx)("div",{className:"flex cursor-pointer items-center gap-1 text-sm transition-opacity hover:opacity-50",onClick:e=>{if(e.stopPropagation(),i)return i();if(a){if("_blank"===l)return window.open(a);o.push(a)}},children:t})]})}function ed(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(eo,{}),(0,s.jsx)(w,{})]})}},33555:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var s=n(57437);n(2265);var a=n(77723),r=n(93023),l=n(84168);function i(e){let{className:t,value:n,...i}=e,{isCopied:o,copyToClipboard:c}=(0,a.m)({timeout:2e3});return n?(0,s.jsxs)(r.z,{variant:"ghost",size:"icon",className:t,onClick:()=>{o||c(n)},...i,children:[o?(0,s.jsx)(l.IconCheck,{className:"text-green-600"}):(0,s.jsx)(l.IconCopy,{}),(0,s.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},70825:function(e,t,n){"use strict";var s=n(57437),a=n(2265),r=n(36850),l=n(93111);t.Z=e=>{let{loading:t,fallback:n,delay:i,children:o}=e,[c,d]=a.useState(!t),[u]=(0,r.n)(c,null!=i?i:200);return(a.useEffect(()=>{t||c||d(!0)},[t]),u)?o:n||(0,s.jsx)(l.cg,{})}},15376:function(e,t,n){"use strict";n.d(t,{T:function(){return o}});var s=n(57437),a=n(2265),r=n(6435),l=n(93023),i=n(84168);function o(e){let{className:t}=e,{setTheme:n,theme:o}=(0,r.F)(),[c,d]=a.useTransition();return(0,s.jsxs)(l.z,{variant:"ghost",size:"icon",onClick:()=>{d(()=>{n("light"===o?"dark":"light")})},className:t,children:["dark"===o?(0,s.jsx)(i.IconMoon,{className:"transition-all"}):(0,s.jsx)(i.IconSun,{className:"transition-all"}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}},86110:function(e,t,n){"use strict";n.d(t,{Ol:function(){return i},Zb:function(){return l},aY:function(){return d},eW:function(){return u},ll:function(){return o}});var s=n(57437),a=n(2265),r=n(39311);let l=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...a})});l.displayName="Card";let i=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",n),...a})});i.displayName="CardHeader";let o=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("h3",{ref:t,className:(0,r.cn)("text-2xl font-semibold leading-none tracking-tight",n),...a})});o.displayName="CardTitle";let c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("p",{ref:t,className:(0,r.cn)("text-sm text-muted-foreground",n),...a})});c.displayName="CardDescription";let d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("p-6 pt-0",n),...a})});d.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("flex items-center p-6 pt-0",n),...a})});u.displayName="CardFooter"},12609:function(e,t,n){"use strict";n.d(t,{$N:function(){return h},Be:function(){return p},Vq:function(){return o},cN:function(){return x},cZ:function(){return f},fK:function(){return m},hg:function(){return c}});var s=n(57437),a=n(2265),r=n(43452),l=n(39311),i=n(84168);let o=r.fC,c=r.xz,d=e=>{let{className:t,children:n,...a}=e;return(0,s.jsx)(r.h_,{className:(0,l.cn)(t),...a,children:(0,s.jsx)("div",{className:"fixed inset-0 z-50 flex items-start justify-center sm:items-center",children:n})})};d.displayName=r.h_.displayName;let u=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(r.aV,{ref:t,className:(0,l.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",n),...a})});u.displayName=r.aV.displayName;let f=a.forwardRef((e,t)=>{let{className:n,children:a,...o}=e;return(0,s.jsxs)(d,{children:[(0,s.jsx)(u,{}),(0,s.jsxs)(r.VY,{ref:t,className:(0,l.cn)("fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-sm animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",n),...o,children:[a,(0,s.jsxs)(r.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(i.IconClose,{}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=r.VY.displayName;let m=e=>{let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};m.displayName="DialogHeader";let x=e=>{let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...n})};x.displayName="DialogFooter";let h=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(r.Dx,{ref:t,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",n),...a})});h.displayName=r.Dx.displayName;let p=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(r.dk,{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",n),...a})});p.displayName=r.dk.displayName},51908:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var s=n(57437),a=n(2265),r=n(39311);let l=a.forwardRef((e,t)=>{let{className:n,type:a,...l}=e;return(0,s.jsx)("input",{type:a,className:(0,r.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...l})});l.displayName="Input"},66672:function(e,t,n){"use strict";n.d(t,{_:function(){return c}});var s=n(57437),a=n(2265),r=n(36743),l=n(7404),i=n(39311);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(r.f,{ref:t,className:(0,i.cn)(o(),n),...a})});c.displayName=r.f.displayName},55909:function(e,t,n){"use strict";n.d(t,{Y:function(){return v},n:function(){return b}});var s=n(57437),a=n(11372),r=n(30713),l=n(1589),i=n(10356),o=n(1592),c=n(39311),d=n(2265),u=n(26694);let f=d.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(u.fC,{ref:t,className:(0,c.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",n),...a})});f.displayName=u.fC.displayName;let m=d.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(u.Ee,{ref:t,className:(0,c.cn)("aspect-square h-full w-full",n),...a})});m.displayName=u.Ee.displayName;let x=d.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(u.NY,{ref:t,className:(0,c.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",n),...a})});x.displayName=u.NY.displayName;var h=n(25645),p=n(67133).lW;let j="not_found",g=!0;function v(e){var t;let{className:n}=e,[{data:r}]=(0,i.P)(),d=null==r?void 0:r.me.id,u=d&&"/avatar/".concat(r.me.id)||null,{data:v,isLoading:b,error:N}=(0,l.Z)(u,e=>{if(g)return(0,o.Z)(e,{responseFormatter:async e=>{let t=await e.blob(),n=p.from(await t.arrayBuffer());return"data:image/png;base64,".concat(n.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(j)}})});if(!d)return null;if(b)return(0,s.jsx)(h.O,{className:(0,c.cn)("h-16 w-16 rounded-full",n)});if((null==N?void 0:N.message)===j&&(g=!1),!v){let e=(0,a.B)(r.me.email);return(0,s.jsx)(a.Z,{className:(0,c.cn)("h-16 w-16",n),...e})}return(0,s.jsxs)(f,{className:(0,c.cn)("h-16 w-16",n),children:[(0,s.jsx)(m,{src:v,alt:r.me.email,className:"object-cover"}),(0,s.jsx)(x,{children:null===(t=r.me)||void 0===t?void 0:t.email.substring(0,2)})]})}let b=e=>{g=!0,(0,r.JG)("/avatar/".concat(e))}},77723:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var s=n(2265),a=n(2390),r=n.n(a),l=n(71424);function i(e){let{timeout:t=2e3,onError:n}=e,[a,i]=s.useState(!1),o=()=>{i(!0),setTimeout(()=>{i(!1)},t)},c=e=>{if("function"==typeof n){null==n||n(e);return}l.A.error("Failed to copy.")};return{isCopied:a,copyToClipboard:e=>{var t;if(e){if(null===(t=navigator.clipboard)||void 0===t?void 0:t.writeText)navigator.clipboard.writeText(e).then(o).catch(c);else{let t=r()(e);t?o():c()}}}}}},13287:function(e,t,n){"use strict";n.d(t,{Q:function(){return r}});var s=n(30713),a=n(1592);function r(){return(0,s.ZP)("/v1/health",e=>(0,a.Z)(e,{errorHandler:()=>{throw Error("Unhealth")}}),{shouldRetryOnError:!1})}},10356:function(e,t,n){"use strict";n.d(t,{P:function(){return l}});var s=n(99109),a=n(60106);let r=(0,a.BX)("\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isPasswordSet\n    }\n  }\n"),l=()=>(0,s.aM)({query:r})},52720:function(e,t,n){"use strict";n.d(t,{e:function(){return o},j:function(){return c}});var s=n(2265),a=n(99109),r=n(60106),l=n(39311);let i=(0,r.BX)("\n  query NetworkSetting {\n    networkSetting {\n      externalUrl\n    }\n  }\n"),o=e=>(0,a.aM)({query:i,...e}),c=()=>{let[{data:e}]=o(),t=null==e?void 0:e.networkSetting,n=s.useMemo(()=>(null==t?void 0:t.externalUrl)||((0,l.S_)()?new URL(window.location.href).origin:""),[t]);return n}},1592:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(18398),a=n(34084),r=n(53771),l=n(58001),i=n(37004);async function o(e,t){var n;let s=null!==(n=null==t?void 0:t.customFetch)&&void 0!==n?n:window.fetch;if(function(e){var t;if(e.startsWith("/oauth/providers"))return!1;let n=null===(t=(0,i.bW)())||void 0===t?void 0:t.accessToken;if(!n)return!0;try{let{exp:e}=(0,r.o)(n);return(0,i.pw)(e)}catch(e){return!0}}(e))return i.gN.refreshToken(c).then(n=>f(e,t));let a=await s(e,d(t));return 401===a.status?i.gN.refreshToken(c).then(n=>f(e,t)):m(a,t)}async function c(){var e,t;let n=null===(e=(0,i.bW)())||void 0===e?void 0:e.refreshToken;if(!n)return;let s=await u(n);return null==s?void 0:null===(t=s.data)||void 0===t?void 0:t.refreshToken}function d(e){var t;let n=new Headers(null==e?void 0:e.headers);return n.append("authorization","Bearer ".concat(null===(t=(0,i.bW)())||void 0===t?void 0:t.accessToken)),{...e||{},headers:n}}async function u(e){let t=new s.KU({url:"/graphql",requestPolicy:"network-only",exchanges:[s.Ek]}),n=t.createRequestOperation("mutation",(0,a.h)(l.Dp,{refreshToken:e}));return t.executeMutation(n)}function f(e,t){var n;let s=null!==(n=null==t?void 0:t.customFetch)&&void 0!==n?n:window.fetch;return s(e,d(t)).then(e=>m(e,t))}function m(e,t){return(null==e?void 0:e.ok)?(null==t?void 0:t.responseFormatter)?t.responseFormatter(e):(null==t?void 0:t.responseFormat)==="blob"?e.blob():e.json():(null==t?void 0:t.errorHandler)?t.errorHandler(e):void 0}}},function(e){e.O(0,[6990,768,9109,584,7166,1424,3714,7463,3452,713,3815,2256,1408,6719,7753,4168,2445,2235,2971,7864,1744],function(){return e(e.s=91783)}),_N_E=e.O()}]);