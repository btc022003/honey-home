System.register(["./index-legacy.40218cae.js"],(function(e,t){"use strict";var n,o,l,r,c,i,s,a,u,p,f,d,y,g;return{setters:[e=>{n=e.aa,o=e.ab,l=e.J,r=e.y,c=e.a7,i=e.c,s=e.k,a=e.d,u=e.b,p=e.ac,f=e.n,d=e.W,y=e.x,g=e.s}],execute:function(){function t(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function v(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function x(e){t(window,e),t(document.body,e)}e({g:v,i:function(e){const t=l(e);if(!t)return!1;const n=window.getComputedStyle(t),o="none"===n.display,r=null===t.offsetParent&&"fixed"!==n.position;return o||r},p:function(e,t){("boolean"!=typeof e.cancelable||e.cancelable)&&e.preventDefault(),t&&(e=>{e.stopPropagation()})(e)},r:function(){m&&x(v())},s:x,u:function(e){const t=c();t&&r(t.proxy,e)}});const m=n(),{width:w,height:b}=o();e({w:w,a:b});const[S,z]=i("loading"),T=Array(12).fill(null).map(((e,t)=>s("i",{class:z("line",String(t+1))},null))),h=s("svg",{class:z("circular"),viewBox:"25 25 50 50"},[s("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),C={size:f,type:d("circular"),color:String,vertical:Boolean,textSize:f,textColor:String};var B=a({name:S,props:C,setup(e,{slots:t}){const n=u((()=>r({color:e.color},p(e.size)))),o=()=>{var n;if(t.default)return s("span",{class:z("text"),style:{fontSize:y(e.textSize),color:null!=(n=e.textColor)?n:e.color}},[t.default()])};return()=>{const{type:t,vertical:l}=e;return s("div",{class:z([t,{vertical:l}]),"aria-live":"polite","aria-busy":!0},[s("span",{class:z("spinner",t),style:n.value},["spinner"===t?T:h]),o()])}}});e("L",g(B))}}}));
