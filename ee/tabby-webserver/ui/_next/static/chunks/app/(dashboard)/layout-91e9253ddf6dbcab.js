(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5642],{83394:function(e,t,n){Promise.resolve().then(n.bind(n,94700)),Promise.resolve().then(n.bind(n,34494))},94700:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(36164),s=n(57830),l=n(30601);n(3546);var a=n(35646),i=n(6246),o=n(36327),c=n(1544),u=n(31458),d=n(81565),f=n(68172),h=n(63743),m=n(52569),x=n(7449);function p(){var e;let{data:t}=(0,i.Q)(),n=null==t?void 0:null===(e=t.version)||void 0===e?void 0:e.git_describe,{data:s}=(0,o.Z)("https://api.github.com/repos/TabbyML/tabby/releases/latest",e=>fetch(e).then(e=>e.json())),l=function(e,t){try{return e&&t&&(0,a.q)(t.name,e,">")}catch(e){return console.warn(e),!0}}(n,s);return(0,r.jsxs)("header",{className:"sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b px-4 backdrop-blur-xl lg:px-10",children:[(0,r.jsx)("div",{className:"flex items-center",children:l&&(0,r.jsxs)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby/releases/latest",rel:"noopener noreferrer",className:(0,c.cn)("!pl-0",(0,u.d)({variant:"ghost"})),children:[(0,r.jsx)(d.IconNotice,{className:"text-yellow-600 dark:text-yellow-400"}),(0,r.jsxs)("span",{className:"ml-2 hidden md:flex",children:["New version (",null==s?void 0:s.name,") available"]})]})}),(0,r.jsxs)("div",{className:"flex items-center justify-center gap-6",children:[(0,r.jsx)(f.q,{children:(0,r.jsx)(h.T,{})}),(0,r.jsx)(x.Z,{children:(0,r.jsx)(m.SQ,{className:"h-10 w-10 border"})})]})]})}function v(e){let{children:t}=e,[n]=(0,l.Hb)(),a=n?{height:"calc(100vh - ".concat(l.wt,")")}:{height:"100vh"};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s.ScrollArea,{className:"flex flex-1 flex-col transition-all",style:a,children:[(0,r.jsx)(p,{}),(0,r.jsx)("div",{className:"flex-1 p-4 lg:p-10",children:t})]})})}},34494:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(36164),s=n(3546),l=n(42891),a=n.n(l),i=n(70652),o=n.n(i),c=n(11978),u=n(83332),d={src:"/_next/static/media/logo.526f7cf9.png",height:184,width:607,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASklEQVR4nGPsKQh1f/HshV/PqtNtagrC8p++//rDAgQM//9/ZWJifMZYnRqg9+bVq6iZ51+1SP/5ovH//z8eRgbGbwyMjPxA9n0AMi8g2L1xUkUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},f=n(14375),h=n(58388),m=n(98454),x=n(1544),p=n(17989);let v=p.fC,g=p.wy,b=p.Fw;var j=n(81565),N=n(57830),w=n(30601),y=n(6230);let A=[{title:"Profile",icon:(0,r.jsx)(j.IconUser,{}),href:"/profile",allowUser:!0},{title:"Information",icon:(0,r.jsx)(j.IconBookOpenText,{}),children:[{title:"System",href:"/system"},{title:"Jobs",href:"/jobs"},{title:"Reports",href:"/reports"},{title:"Activities",href:"/activities"}]},{title:"Settings",icon:(0,r.jsx)(j.IconGear,{}),allowUser:!0,children:[{title:"General",href:"/settings/general"},{title:"Users & Groups",href:"/settings/team",allowUser:!0},{title:"Subscription",href:"/settings/subscription"}]},{title:"Integrations",icon:(0,r.jsx)(j.IconLightingBolt,{}),children:[{title:"Context Providers",href:"/settings/providers/git"},{title:"SSO",href:"/settings/sso"},{title:"Mail Delivery",href:"/settings/mail"}]}];function k(e){let{children:t,className:n}=e,[{data:s,fetching:l}]=(0,m.P)(),[i]=(0,w.Hb)(),c=null==s?void 0:s.me.isAdmin,f=i?{height:"calc(100vh - ".concat(w.wt,")")}:{height:"100vh"};return(0,r.jsx)(N.ScrollArea,{className:(0,x.cn)("grid overflow-hidden md:grid-cols-[280px_1fr]",n),children:(0,r.jsx)("div",{className:"hidden w-[280px] border-r pt-4 transition-all md:block",style:f,children:(0,r.jsxs)("nav",{className:"flex h-full flex-col overflow-hidden text-sm font-medium",children:[(0,r.jsxs)(o(),{href:"/",className:"flex justify-center pb-4",children:[(0,r.jsx)(a(),{src:d,alt:"logo",width:128,className:"dark:hidden"}),(0,r.jsx)(a(),{src:u.Z,alt:"logo",width:96,className:"hidden dark:block"})]}),(0,r.jsx)("div",{className:"flex-1 overflow-y-auto",children:(0,r.jsx)("div",{className:"flex flex-col gap-2 px-4 pb-4",children:(0,r.jsx)(y.Z,{loading:l,children:A.map((e,t)=>e.allowUser||c?e.children?(0,r.jsx)(R,{title:(0,r.jsxs)(r.Fragment,{children:[e.icon," ",e.title]}),children:e.children.map((e,t)=>e.allowUser||c?(0,r.jsx)(C,{href:e.href,children:e.title},t):null)},t):(0,r.jsxs)(C,{href:e.href,children:[e.icon," ",e.title]},t):null)})})})]})})})}let S=(0,f.j)("flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-accent",{variants:{state:{selected:"bg-accent","not-selected":""}},defaultVariants:{state:"not-selected"}});function C(e){let{href:t,children:n}=e,l=(0,c.usePathname)(),a=s.useMemo(()=>"/"===t?t===l:t.startsWith("/settings/providers")?l.startsWith("/settings/providers/"):function(e,t){let n=new RegExp("^".concat((0,h.Z)(t),"(/|\\?|$)"));return n.test(e)}(l,t),[l,t]);return(0,r.jsx)(o(),{className:S({state:a?"selected":"not-selected"}),href:t,children:n})}function R(e){let{title:t,children:n}=e;return(0,r.jsxs)(v,{defaultOpen:!0,className:"[&_svg.ml-auto]:data-[state=open]:rotate-90",children:[(0,r.jsx)(g,{className:"w-full",children:(0,r.jsxs)("span",{className:S(),children:[t,(0,r.jsx)(j.IconChevronRight,{className:"ml-auto"})]})}),(0,r.jsx)(b,{className:"ml-7 flex flex-col gap-1 data-[state=open]:py-1",children:n})]})}},68172:function(e,t,n){"use strict";n.d(t,{q:function(){return l}});var r=n(36164),s=n(38785);function l(e){let{children:t,fallback:n=null}=e;return(0,s.U)()?(0,r.jsx)(r.Fragment,{children:t}):(0,r.jsx)(r.Fragment,{children:n})}},30601:function(e,t,n){"use strict";n.d(t,{Hb:function(){return h},wt:function(){return u},xc:function(){return m},yo:function(){return f}});var r=n(36164),s=n(3546),l=n(74630),a=n(36327),i=n(80605),o=n(1544),c=n(81565);let u="3.5rem",d=s.createContext({}),f=e=>{let{children:t}=e,n=(0,i.UA)(),[a,o]=s.useState(!1);return s.useEffect(()=>{let e=window.self!==window.top;e||(0,l.Z)(n)||o(n)},[n]),(0,r.jsx)(d.Provider,{value:{isShowDemoBanner:a,setIsShowDemoBanner:o},children:t})};function h(){let{isShowDemoBanner:e,setIsShowDemoBanner:t}=s.useContext(d);return[e,t]}function m(){let[e,t]=h(),{data:n}=(0,a.Z)("https://api.github.com/repos/TabbyML/tabby",e=>fetch(e).then(e=>e.json()));return(0,r.jsxs)("div",{className:(0,o.cn)("flex items-center justify-between bg-primary px-4 text-primary-foreground transition-all md:px-5",{"opacity-100 pointer-events-auto":e,"opacity-0 pointer-events-none":!e}),style:e?{height:u}:{height:0},children:[(0,r.jsxs)("a",{href:"https://links.tabbyml.com/schedule-a-demo",target:"_blank",className:"flex items-center gap-x-2 text-xs font-semibold underline md:text-sm",children:[(0,r.jsx)("span",{children:"\uD83D\uDCC6"}),(0,r.jsx)("span",{children:"Book a 30-minute product demo."})]}),e&&(0,r.jsx)("img",{referrerPolicy:"no-referrer-when-downgrade",src:"https://static.scarf.sh/a.png?x-pxid=b1d0308a-b3c5-425a-972a-378d883a2bca"}),(0,r.jsxs)("div",{className:"flex items-center gap-x-4 md:gap-x-8",children:[(0,r.jsxs)("a",{href:"https://github.com/TabbyML/tabby",target:"_blank",className:"flex items-center transition-all hover:opacity-70",children:[(0,r.jsx)(c.IconGithub,{}),(0,r.jsxs)("div",{className:"ml-2 hidden md:block",children:[(0,r.jsx)("p",{className:"text-xs font-semibold",children:"TabbyML/tabby"}),(0,r.jsxs)("div",{className:(0,o.cn)("flex items-center text-xs transition-all",{"h-4 opacity-70":n,"h-0 opacity-0":!n}),children:[(0,r.jsx)(c.IconStar,{className:"mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==n?void 0:n.stargazers_count}),(0,r.jsx)(c.IconGitFork,{className:"ml-2 mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==n?void 0:n.forks_count})]})]})]}),(0,r.jsx)(c.IconClose,{className:"cursor-pointer transition-all hover:opacity-70",onClick:()=>t(!1)})]})]})}},6230:function(e,t,n){"use strict";var r=n(36164),s=n(3546),l=n(24449),a=n(90379);t.Z=e=>{let{loading:t,fallback:n,delay:i,children:o}=e,[c,u]=s.useState(!t),[d]=(0,l.n)(c,null!=i?i:200);return(s.useEffect(()=>{t||c||u(!0)},[t]),d)?o:n||(0,r.jsx)(a.cg,{})}},90379:function(e,t,n){"use strict";n.d(t,{PF:function(){return o},cg:function(){return a},tB:function(){return i}});var r=n(36164),s=n(1544),l=n(3448);let a=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("space-y-3",t),...n,children:[(0,r.jsx)(l.O,{className:"h-4 w-full"}),(0,r.jsx)(l.O,{className:"h-4 w-full"}),(0,r.jsx)(l.O,{className:"h-4 w-full"}),(0,r.jsx)(l.O,{className:"h-4 w-full"})]})},i=e=>{let{className:t,...n}=e;return(0,r.jsx)(l.O,{className:(0,s.cn)("h-4 w-full",t),...n})},o=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",t),...n,children:[(0,r.jsx)(l.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(l.O,{className:"h-4 w-full"}),(0,r.jsx)(l.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(l.O,{className:"h-4 w-full"})]})}},63743:function(e,t,n){"use strict";n.d(t,{T:function(){return o}});var r=n(36164),s=n(3546),l=n(9010),a=n(31458),i=n(81565);function o(e){let{className:t}=e,{setTheme:n,theme:o}=(0,l.X)(),[c,u]=s.useTransition();return(0,r.jsxs)(a.z,{variant:"ghost",size:"icon",onClick:()=>{u(()=>{n("light"===o?"dark":"light")})},className:t,children:["dark"===o?(0,r.jsx)(i.IconMoon,{className:"transition-all"}):(0,r.jsx)(i.IconSun,{className:"transition-all"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}},31458:function(e,t,n){"use strict";n.d(t,{d:function(){return o},z:function(){return c}});var r=n(36164),s=n(3546),l=n(74047),a=n(14375),i=n(1544);let o=(0,a.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:n,variant:s,size:a,asChild:c=!1,...u}=e,d=c?l.g7:"button";return(0,r.jsx)(d,{className:(0,i.cn)(o({variant:s,size:a,className:n})),ref:t,...u})});c.displayName="Button"},62202:function(e,t,n){"use strict";n.d(t,{$F:function(){return o},AW:function(){return u},Ju:function(){return f},VD:function(){return h},Xi:function(){return d},h_:function(){return i}});var r=n(36164),s=n(3546),l=n(19148),a=n(1544);let i=l.fC,o=l.xz;l.ZA,l.Uv,l.Tr,l.Ee;let c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(l.tu,{ref:t,className:(0,a.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...s})});c.displayName=l.tu.displayName;let u=s.forwardRef((e,t)=>{let{className:n,sideOffset:s=4,...i}=e;return(0,r.jsx)(l.Uv,{children:(0,r.jsx)(l.VY,{ref:t,sideOffset:s,className:(0,a.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...i})})});u.displayName=l.VY.displayName;let d=s.forwardRef((e,t)=>{let{className:n,inset:s,...i}=e;return(0,r.jsx)(l.ck,{ref:t,className:(0,a.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",n),...i})});d.displayName=l.ck.displayName;let f=s.forwardRef((e,t)=>{let{className:n,inset:s,...i}=e;return(0,r.jsx)(l.__,{ref:t,className:(0,a.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",n),...i})});f.displayName=l.__.displayName;let h=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(l.Z0,{ref:t,className:(0,a.cn)("-mx-1 my-1 h-px bg-muted",n),...s})});h.displayName=l.Z0.displayName},57830:function(e,t,n){"use strict";n.r(t),n.d(t,{ScrollArea:function(){return i},ScrollBar:function(){return o}});var r=n(36164),s=n(3546),l=n(50778),a=n(1544);let i=s.forwardRef((e,t)=>{let{className:n,children:s,...i}=e;return(0,r.jsxs)(l.fC,{ref:t,className:(0,a.cn)("relative overflow-hidden",n),...i,children:[(0,r.jsx)(l.l_,{className:"h-full w-full rounded-[inherit] [&>div]:!block",children:s}),(0,r.jsx)(o,{}),(0,r.jsx)(l.Ns,{})]})});i.displayName=l.fC.displayName;let o=s.forwardRef((e,t)=>{let{className:n,orientation:s="vertical",...i}=e;return(0,r.jsx)(l.gb,{ref:t,orientation:s,className:(0,a.cn)("flex touch-none select-none transition-colors","vertical"===s&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===s&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",n),...i,children:(0,r.jsx)(l.q4,{className:"relative flex-1 rounded-full bg-border"})})});o.displayName=l.gb.displayName},3448:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var r=n(36164),s=n(1544);function l(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...n})}},52569:function(e,t,n){"use strict";n.d(t,{SQ:function(){return N},Yt:function(){return j},nY:function(){return b}});var r=n(36164),s=n(3546),l=n(87782),a=n(21454),i=n(36327),o=n(98454),c=n(3765),u=n(1544),d=n(66612);let f=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(d.fC,{ref:t,className:(0,u.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",n),...s})});f.displayName=d.fC.displayName;let h=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(d.Ee,{ref:t,className:(0,u.cn)("aspect-square h-full w-full",n),...s})});h.displayName=d.Ee.displayName;let m=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(d.NY,{ref:t,className:(0,u.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",n),...s})});m.displayName=d.NY.displayName;var x=n(3448),p=n(30410).lW;let v="not_found",g=!0,b=e=>{g=!0,(0,a.JG)("/avatar/".concat(e))};function j(e){var t;let{user:n,className:a,fallback:o}=e,d=null==n?void 0:n.id,{data:b,isLoading:j,error:N}=(0,i.Z)(d?"/avatar/".concat(d):null,e=>{if(g)return(0,c.Z)(e,{responseFormatter:async e=>{let t=await e.blob(),n=p.from(await t.arrayBuffer());return"data:image/png;base64,".concat(n.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(v)}})}),w=s.useMemo(()=>{if(null==n?void 0:n.email)return(0,l.B)(n.email)},[null==n?void 0:n.email]);return j?(0,r.jsx)(x.O,{className:(0,u.cn)("h-16 w-16 rounded-full",a)}):((null==N?void 0:N.message)===v&&(g=!1),b||w||!o)?!b&&w?(0,r.jsx)(l.Z,{className:(0,u.cn)("h-16 w-16",a),...w}):(0,r.jsxs)(f,{className:(0,u.cn)("h-16 w-16",a),children:[(0,r.jsx)(h,{src:b,alt:null==n?void 0:n.email,className:"object-cover"}),(0,r.jsx)(m,{children:null==n?void 0:null===(t=n.email)||void 0===t?void 0:t.substring(0,2)})]}):o}function N(e){let[{data:t}]=(0,o.P)();return(0,r.jsx)(j,{user:null==t?void 0:t.me,...e})}},7449:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(36164),s=n(3546),l=n(11978),a=n(98454),i=n(80605),o=n(91302),c=n(62202),u=n(81565);function d(e){let{children:t,showHome:n=!0,showSetting:d=!1}=e,f=(0,l.useRouter)(),h=(0,o.QJ)(),[{data:m}]=(0,a.P)(),x=null==m?void 0:m.me;(0,i.xG)();let[p,v]=s.useState(!1),g=async e=>{e.preventDefault(),v(!0),await h(),v(!1)};if(x)return(0,r.jsxs)(c.h_,{children:[(0,r.jsx)(c.$F,{children:t}),(0,r.jsxs)(c.AW,{collisionPadding:{right:16},children:[x.name&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Ju,{className:"pb-0.5",children:x.name}),(0,r.jsx)(c.Ju,{className:"pb-1 pt-0 text-sm font-normal text-muted-foreground",children:x.email})]}),!x.name&&(0,r.jsx)(c.Ju,{children:x.email}),(0,r.jsx)(c.VD,{}),n&&(0,r.jsxs)(c.Xi,{onClick:()=>f.push("/"),className:"cursor-pointer",children:[(0,r.jsx)(u.IconHome,{}),(0,r.jsx)("span",{className:"ml-2",children:"Home"})]}),d&&(0,r.jsxs)(c.Xi,{onClick:()=>f.push("/profile"),className:"cursor-pointer",children:[(0,r.jsx)(u.IconGear,{}),(0,r.jsx)("span",{className:"ml-2",children:"Settings"})]}),(0,r.jsxs)(c.Xi,{onClick:()=>window.open("/files"),className:"cursor-pointer",children:[(0,r.jsx)(u.IconCode,{}),(0,r.jsx)("span",{className:"ml-2",children:"Code Browser"})]}),(0,r.jsxs)(c.Xi,{onClick:()=>window.open("/api"),className:"cursor-pointer",children:[(0,r.jsx)(u.IconBackpack,{}),(0,r.jsx)("span",{className:"ml-2",children:"API Docs"})]}),(0,r.jsx)(c.VD,{}),(0,r.jsxs)(c.Xi,{disabled:p,onClick:g,className:"cursor-pointer",children:[(0,r.jsx)(u.IconLogout,{}),(0,r.jsx)("span",{className:"ml-2",children:"Sign out"}),p&&(0,r.jsx)(u.IconSpinner,{className:"ml-1"})]})]})]})}},9010:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(28242);function s(){let{theme:e,systemTheme:t,setTheme:n}=(0,r.F)();return{theme:e&&"system"!==e?e:t||"light",setTheme:n,systemTheme:t}}},24449:function(e,t,n){"use strict";n.d(t,{S:function(){return i},n:function(){return o}});var r=n(3546),s=n(45391),l=n(16784);let a=e=>{let t=(0,l.d)(e);r.useEffect(()=>()=>{t.current()},[])};function i(e,t,n){let i=(0,l.d)(e),o=r.useMemo(()=>(0,s.Z)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.current(...t)},t,n),[]);return a(()=>{var e;null==n||null===(e=n.onUnmount)||void 0===e||e.call(n,o),o.cancel()}),{run:o,cancel:o.cancel,flush:o.flush}}function o(e,t,n){let[s,l]=r.useState(e),{run:a}=i(()=>{l(e)},t,n);return r.useEffect(()=>{a()},[e]),[s,l]}},6246:function(e,t,n){"use strict";n.d(t,{Q:function(){return l}});var r=n(21454),s=n(3765);function l(){return(0,r.ZP)("/v1/health",e=>(0,s.Z)(e,{errorHandler:()=>{throw Error("Unhealth")}}),{shouldRetryOnError:!1})}},38785:function(e,t,n){"use strict";n.d(t,{U:function(){return l}});var r=n(3546);let s=!0;function l(){let[e,t]=r.useState(()=>!s);return r.useEffect(function(){s=!1,t(!0)},[]),e}},16784:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(3546);function s(e){let t=r.useRef(e);return t.current=e,t}},98454:function(e,t,n){"use strict";n.d(t,{P:function(){return a}});var r=n(40055),s=n(43240);let l=(0,s.BX)("\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isOwner\n      isPasswordSet\n      name\n    }\n  }\n"),a=()=>(0,r.aM)({query:l})},3765:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(44745),s=n(57778),l=n(79716),a=n(91302),i=n(66794);async function o(e,t){var n;let r=null!==(n=null==t?void 0:t.customFetch)&&void 0!==n?n:window.fetch;if(function(e){var t;if(e.startsWith("/oauth/providers"))return!1;let n=null===(t=(0,i.bW)())||void 0===t?void 0:t.accessToken;if(!n)return!0;try{let{exp:e}=(0,l.o)(n);return(0,i.pw)(e)}catch(e){return!0}}(e))return i.gN.refreshToken(c).then(n=>f(e,t));let s=await r(e,u(t));return 401===s.status?(i.gN.clearAccessToken(),i.gN.refreshToken(c).then(n=>f(e,t))):h(s,t)}async function c(){var e,t;let n=null===(e=(0,i.bW)())||void 0===e?void 0:e.refreshToken;if(!n)return;let r=await d(n);return null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.refreshToken}function u(e){var t;let n=new Headers(null==e?void 0:e.headers);return n.append("authorization","Bearer ".concat(null===(t=(0,i.bW)())||void 0===t?void 0:t.accessToken)),{...e||{},headers:n}}async function d(e){let t=new r.KU({url:"/graphql",requestPolicy:"network-only",exchanges:[r.Ek]}),n=t.createRequestOperation("mutation",(0,s.h)(a.Dp,{refreshToken:e}));return t.executeMutation(n)}function f(e,t){var n;let r=null!==(n=null==t?void 0:t.customFetch)&&void 0!==n?n:window.fetch;return r(e,u(t)).then(e=>h(e,t))}function h(e,t){return(null==e?void 0:e.ok)?(null==t?void 0:t.responseFormatter)?t.responseFormatter(e):(null==t?void 0:t.responseFormat)==="blob"?e.blob():e.json():(null==t?void 0:t.errorHandler)?t.errorHandler(e):void 0}},83332:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo-dark.362a169d.png",height:149,width:395,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAOklEQVR42gXAIQqAMBQA0A+K3eIVHNhEk21Wk5iN4g6w6z9GyBaDZDLr9OH0qD6/4nWHUZLtNqvL0QDmsR1AxwcSfQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}}},function(e){e.O(0,[1386,55,1058,4007,1350,3643,3449,9421,1454,4546,9275,9148,2891,4553,998,3920,1544,1565,3240,3396,3375,5289,1744],function(){return e(e.s=83394)}),_N_E=e.O()}]);