System.register(["./index-legacy.e90e7c68.js","./index-legacy.a6f13f08.js"],(function(n,i){"use strict";var e,o,l,t,a,s,r,c,d,g,u,p,f;return{setters:[n=>{e=n.c,o=n.y,l=n.z,t=n.W,a=n.n,s=n.d,r=n.A,c=n.an,d=n.k,g=n.I,u=n.s},n=>{p=n.p,f=n.L}],execute:function(){const[i,b]=e("button"),y=o({},l,{tag:t("button"),text:String,icon:String,type:t("default"),size:t("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:t("button"),loadingSize:a,loadingText:String,loadingType:String,iconPosition:t("left")});var x=s({name:i,props:y,emits:["click"],setup(n,{emit:i,slots:e}){const o=r(),l=()=>n.loading?e.loading?e.loading():d(f,{size:n.loadingSize,type:n.loadingType,class:b("loading")},null):e.icon?d("div",{class:b("icon")},[e.icon()]):n.icon?d(g,{name:n.icon,class:b("icon"),classPrefix:n.iconPrefix},null):void 0,t=()=>{let i;if(i=n.loading?n.loadingText:e.default?e.default():n.text,i)return d("span",{class:b("text")},[i])},a=()=>{const{color:i,plain:e}=n;if(i){const n={color:e?i:"white"};return e||(n.background=i),i.includes("gradient")?n.border=0:n.borderColor=i,n}},s=e=>{n.loading?p(e):n.disabled||(i("click",e),o())};return()=>{const{tag:i,type:e,size:o,block:r,round:g,plain:u,square:p,loading:f,disabled:y,hairline:x,nativeType:S,iconPosition:k}=n,B=[b([e,o,{plain:u,block:r,round:g,square:p,loading:f,disabled:y,hairline:x}]),{[c]:x}];return d(i,{type:S,class:B,style:a(),disabled:y,onClick:s},{default:()=>[d("div",{class:b("content")},["left"===k&&l(),t(),"right"===k&&l()])]})}}});n("B",u(x))}}}));
