System.register(["./index-legacy.40218cae.js"],(function(e,l){"use strict";var t,i,n,r,s,a,o,c,u,d,v,b,f,g,p;return{setters:[e=>{t=e.c,i=e.n,n=e.t,r=e.O,s=e.y,a=e.z,o=e.d,c=e.A,u=e.k,d=e.S,v=e.I,b=e.s,f=e.K,g=e.D,p=e.av}],execute:function(){const[l,S]=t("cell"),k=e("c",{icon:String,size:String,title:i,value:i,label:i,center:Boolean,isLink:Boolean,border:n,required:Boolean,iconPrefix:String,valueClass:r,labelClass:r,titleClass:r,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}}),C=s({},k,a);var x=o({name:l,props:C,setup(e,{slots:l}){const t=c(),i=()=>{if(l.label||d(e.label))return u("div",{class:[S("label"),e.labelClass]},[l.label?l.label():e.label])},n=()=>{if(l.title||d(e.title))return u("div",{class:[S("title"),e.titleClass],style:e.titleStyle},[l.title?l.title():u("span",null,[e.title]),i()])},r=()=>{const t=l.value||l.default;if(t||d(e.value)){const i=l.title||d(e.title);return u("div",{class:[S("value",{alone:!i}),e.valueClass]},[t?t():u("span",null,[e.value])])}},s=()=>{if(l["right-icon"])return l["right-icon"]();if(e.isLink){const l=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return u(v,{name:l,class:S("right-icon")},null)}};return()=>{var i,a;const{size:o,center:c,border:d,isLink:b,required:f}=e,g=null!=(i=e.clickable)?i:b,p={center:c,required:f,clickable:g,borderless:!d};return o&&(p[o]=!!o),u("div",{class:S(p),role:g?"button":void 0,tabindex:g?0:void 0,onClick:t},[l.icon?l.icon():e.icon?u(v,{name:e.icon,class:S("left-icon"),classPrefix:e.iconPrefix},null):void 0,n(),r(),s(),null==(a=l.extra)?void 0:a.call(l)])}}});e("a",b(x));const[y,m]=t("cell-group"),w={title:String,inset:Boolean,border:n};var B=o({name:y,inheritAttrs:!1,props:w,setup(e,{slots:l,attrs:t}){const i=()=>{var i;return u("div",g({class:[m({inset:e.inset}),{[p]:e.border&&!e.inset}]},t),[null==(i=l.default)?void 0:i.call(l)])};return()=>e.title||l.title?u(f,null,[u("div",{class:m("title",{inset:e.inset})},[l.title?l.title():e.title]),i()]):i()}});e("C",b(B))}}}));