(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2061],{93369:function(e,t,n){Promise.resolve().then(n.bind(n,45915))},45915:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var s=n(36164),r=n(93877),i=n(98815);function a(){let[e,t]=(0,r.m)();return(0,s.jsx)(s.Fragment,{children:!e.loading&&(0,s.jsxs)("div",{className:"flex items-center space-x-4 rounded-md border p-4",children:[(0,s.jsxs)("div",{className:"flex-1 space-y-1",children:[(0,s.jsx)("p",{className:"text-sm font-medium leading-none",children:e.title}),(0,s.jsx)("p",{className:"text-sm text-muted-foreground",children:e.description})]}),(0,s.jsx)(i.r,{checked:e.value,onCheckedChange:t})]})})}},98815:function(e,t,n){"use strict";n.d(t,{r:function(){return l}});var s=n(36164),r=n(3546),i=n(96887),a=n(1544);let l=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(i.fC,{className:(0,a.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",n),...r,ref:t,children:(0,s.jsx)(i.bU,{className:(0,a.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});l.displayName=i.fC.displayName},93877:function(e,t,n){"use strict";n.d(t,{m:function(){return l}});var s=n(3546);let r=(e,t)=>{let[n,r]=(0,s.useState)(t),[i,a]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let t=localStorage.getItem(e);t&&r(JSON.parse(t)),a(!1)},[]),[n,t=>{r(t),localStorage.setItem(e,JSON.stringify(t))},i]};class i{get value(){if("undefined"!=typeof localStorage){let e=localStorage.getItem(this.storageKey);if(e)return"true"===e}return this.defaultValue}constructor(e,t,n,s){this.storageKey=e,this.title=t,this.description=n,this.defaultValue=s}}let a=new class{defineGlobalVar(){return new i(this.storageKey,this.title,this.description,this.defaultValue)}defineHook(){return()=>{let[e,t,n]=r(this.storageKey,this.defaultValue);return[{value:e,title:this.title,description:this.description,loading:n},()=>{t(!e)}]}}constructor(e,t,n,s){this.storageKey="EXP_".concat(e),this.title=t,this.description=n,this.defaultValue=null!=s&&s}}("enable_developer_mode","Developer Mode","Enable the developer mode. The features involved include the Answer Engine.",!1);a.defineGlobalVar();let l=a.defineHook()}},function(e){e.O(0,[1386,6887,1544,3375,5289,1744],function(){return e(e.s=93369)}),_N_E=e.O()}]);