import{u as Pe,g as Se,d as F}from"./request.83988c84.js";import{l as Ce,a as Ie}from"./products.0628f689.js";import{c as L,t as T,n as R,m as H,d as Y,r as E,a as se,u as re,b as g,w as z,e as Te,o as ce,f as Be,g as ke,h as $e,i as Ae,j as ze,k as m,l as le,p as D,q as K,s as V,v as ue,x as Q,B as Ee,y as Re,z as Oe,A as De,C as Me,D as Ne,E as qe,I as He,F as S,G as M,H as W,J as P,K as j,L as U,M as J,N as Le}from"./index.e001e466.js";import{u as de,w as Ye,a as Ve,i as oe,p as Ge}from"./index.c04ac7c9.js";import{C as Xe}from"./index.ebe7e0af.js";const[ve,N]=L("swipe"),Fe={loop:T,width:R,height:R,vertical:Boolean,autoplay:H(0),duration:H(500),touchable:T,lazyRender:Boolean,initialSwipe:H(0),indicatorColor:String,showIndicators:T,stopPropagation:T},fe=Symbol(ve);var Ke=Y({name:ve,props:Fe,emits:["change"],setup(e,{emit:v,slots:c}){const s=E(),l=E(),t=se({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),i=Pe(),{children:p,linkChildren:B}=re(fe),n=g(()=>p.length),u=g(()=>t[e.vertical?"height":"width"]),o=g(()=>e.vertical?i.deltaY.value:i.deltaX.value),f=g(()=>t.rect?(e.vertical?t.rect.height:t.rect.width)-u.value*n.value:0),y=g(()=>Math.ceil(Math.abs(f.value)/u.value)),w=g(()=>n.value*u.value),x=g(()=>(t.active+n.value)%n.value),C=g(()=>{const a=e.vertical?"vertical":"horizontal";return i.direction.value===a}),G=g(()=>{const a={transitionDuration:`${t.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${t.offset}px)`};if(u.value){const d=e.vertical?"height":"width",r=e.vertical?"width":"height";a[d]=`${w.value}px`,a[r]=e[r]?`${e[r]}px`:""}return a}),me=a=>{const{active:d}=t;return a?e.loop?K(d+a,-1,n.value):K(d+a,0,y.value):d},Z=(a,d=0)=>{let r=a*u.value;e.loop||(r=Math.min(r,-f.value));let b=d-r;return e.loop||(b=K(b,f.value,0)),b},_=({pace:a=0,offset:d=0,emitChange:r})=>{if(n.value<=1)return;const{active:b}=t,h=me(a),A=Z(h,d);if(e.loop){if(p[0]&&A!==f.value){const X=A<f.value;p[0].setOffset(X?w.value:0)}if(p[n.value-1]&&A!==0){const X=A>0;p[n.value-1].setOffset(X?-w.value:0)}}t.active=h,t.offset=A,r&&h!==b&&v("change",x.value)},O=()=>{t.swiping=!0,t.active<=-1?_({pace:n.value}):t.active>=n.value&&_({pace:-n.value})},we=()=>{O(),i.reset(),D(()=>{t.swiping=!1,_({pace:-1,emitChange:!0})})},ee=()=>{O(),i.reset(),D(()=>{t.swiping=!1,_({pace:1,emitChange:!0})})};let te;const k=()=>clearTimeout(te),$=()=>{k(),e.autoplay>0&&n.value>1&&(te=setTimeout(()=>{ee(),$()},+e.autoplay))},I=(a=+e.initialSwipe)=>{if(!s.value)return;const d=()=>{var r,b;if(!oe(s)){const h={width:s.value.offsetWidth,height:s.value.offsetHeight};t.rect=h,t.width=+((r=e.width)!=null?r:h.width),t.height=+((b=e.height)!=null?b:h.height)}n.value&&(a=Math.min(n.value-1,a)),t.active=a,t.swiping=!0,t.offset=Z(a),p.forEach(h=>{h.setOffset(0)}),$()};oe(s)?le().then(d):d()},ae=()=>I(t.active);let ne;const be=a=>{!e.touchable||(i.start(a),ne=Date.now(),k(),O())},pe=a=>{e.touchable&&t.swiping&&(i.move(a),C.value&&(!e.loop&&(t.active===0&&o.value>0||t.active===n.value-1&&o.value<0)||(Ge(a,e.stopPropagation),_({offset:o.value}))))},ie=()=>{if(!e.touchable||!t.swiping)return;const a=Date.now()-ne,d=o.value/a;if((Math.abs(d)>.25||Math.abs(o.value)>u.value/2)&&C.value){const b=e.vertical?i.offsetY.value:i.offsetX.value;let h=0;e.loop?h=b>0?o.value>0?-1:1:0:h=-Math[o.value>0?"ceil":"floor"](o.value/u.value),_({pace:h,emitChange:!0})}else o.value&&_({pace:0});t.swiping=!1,$()},xe=(a,d={})=>{O(),i.reset(),D(()=>{let r;e.loop&&a===n.value?r=t.active===0?0:a:r=a%n.value,d.immediate?D(()=>{t.swiping=!1}):t.swiping=!1,_({pace:r-t.active,emitChange:!0})})},ye=(a,d)=>{const r=d===x.value,b=r?{backgroundColor:e.indicatorColor}:void 0;return m("i",{style:b,class:N("indicator",{active:r})},null)},_e=()=>{if(c.indicator)return c.indicator({active:x.value,total:n.value});if(e.showIndicators&&n.value>1)return m("div",{class:N("indicators",{vertical:e.vertical})},[Array(n.value).fill("").map(ye)])};return de({prev:we,next:ee,state:t,resize:ae,swipeTo:xe}),B({size:u,props:e,count:n,activeIndicator:x}),z(()=>e.initialSwipe,a=>I(+a)),z(n,()=>I(t.active)),z(()=>e.autoplay,$),z([Ye,Ve],ae),z(Te(),a=>{a==="visible"?$():k()}),ce(I),Be(()=>I(t.active)),ke(()=>I(t.active)),$e(k),Ae(k),ze("touchmove",pe,{target:l}),()=>{var a;return m("div",{ref:s,class:N()},[m("div",{ref:l,style:G.value,class:N("track",{vertical:e.vertical}),onTouchstartPassive:be,onTouchend:ie,onTouchcancel:ie},[(a=c.default)==null?void 0:a.call(c)]),_e()])}}});const We=V(Ke),[je,Ue]=L("swipe-item");var Je=Y({name:je,setup(e,{slots:v}){let c;const s=se({offset:0,inited:!1,mounted:!1}),{parent:l,index:t}=ue(fe);if(!l)return;const i=g(()=>{const n={},{vertical:u}=l.props;return l.size.value&&(n[u?"height":"width"]=`${l.size.value}px`),s.offset&&(n.transform=`translate${u?"Y":"X"}(${s.offset}px)`),n}),p=g(()=>{const{loop:n,lazyRender:u}=l.props;if(!u||c)return!0;if(!s.mounted)return!1;const o=l.activeIndicator.value,f=l.count.value-1,y=o===0&&n?f:o-1,w=o===f&&n?0:o+1;return c=t.value===o||t.value===y||t.value===w,c}),B=n=>{s.offset=n};return ce(()=>{le(()=>{s.mounted=!0})}),de({setOffset:B}),()=>{var n;return m("div",{class:Ue(),style:i.value},[p.value?(n=v.default)==null?void 0:n.call(v):null])}}});const Qe=V(Je),[he,Ze]=L("grid"),et={square:Boolean,center:T,border:T,gutter:R,reverse:Boolean,iconSize:R,direction:String,clickable:Boolean,columnNum:H(4)},ge=Symbol(he);var tt=Y({name:he,props:et,setup(e,{slots:v}){const{linkChildren:c}=re(ge);return c({props:e}),()=>{var s;return m("div",{style:{paddingLeft:Q(e.gutter)},class:[Ze(),{[Ee]:e.border&&!e.gutter}]},[(s=v.default)==null?void 0:s.call(v)])}}});const at=V(tt),[nt,q]=L("grid-item"),it=Re({},Oe,{dot:Boolean,text:String,icon:String,badge:R,iconColor:String,iconPrefix:String,badgeProps:Object});var ot=Y({name:nt,props:it,setup(e,{slots:v}){const{parent:c,index:s}=ue(ge),l=De();if(!c)return;const t=g(()=>{const{square:u,gutter:o,columnNum:f}=c.props,y=`${100/+f}%`,w={flexBasis:y};if(u)w.paddingTop=y;else if(o){const x=Q(o);w.paddingRight=x,s.value>=f&&(w.marginTop=x)}return w}),i=g(()=>{const{square:u,gutter:o}=c.props;if(u&&o){const f=Q(o);return{right:f,bottom:f,height:"auto"}}}),p=()=>{if(v.icon)return m(qe,Ne({dot:e.dot,content:e.badge},e.badgeProps),{default:v.icon});if(e.icon)return m(He,{dot:e.dot,name:e.icon,size:c.props.iconSize,badge:e.badge,class:q("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null)},B=()=>{if(v.text)return v.text();if(e.text)return m("span",{class:q("text")},[e.text])},n=()=>v.default?v.default():[p(),B()];return()=>{const{center:u,border:o,square:f,gutter:y,reverse:w,direction:x,clickable:C}=c.props,G=[q("content",[x,{center:u,square:f,reverse:w,clickable:C,surround:o&&y}]),{[Me]:o}];return m("div",{class:[q({square:f})],style:t.value},[m("div",{role:C?"button":void 0,class:G,style:i.value,tabindex:C?0:void 0,onClick:l},[n()])])}}});const st=V(ot),rt=()=>Se("/api/v1/banners");const ct=["src"],ht={__name:"Home",setup(e){const v=E([]),c=E([]),s=E([]);return rt().then(l=>v.value=l.data),Ce().then(l=>c.value=l.data),Ie().then(l=>s.value=l.data),(l,t)=>(S(),M("div",null,[m(P(We),{class:"my-swipe",autoplay:3e3,"indicator-color":"white"},{default:W(()=>[(S(!0),M(j,null,U(v.value,i=>(S(),J(P(Qe),{key:i.id},{default:W(()=>[Le("img",{class:"m-img",src:P(F)(i.coverImage),alt:""},null,8,ct)]),_:2},1024))),128))]),_:1}),m(P(at),{"column-num":3},{default:W(()=>[(S(!0),M(j,null,U(s.value,i=>(S(),J(P(st),{icon:P(F)(i.coverImage),text:i.name,key:i.id,to:{name:"List",query:{tid:i.id}}},null,8,["icon","text","to"]))),128))]),_:1}),(S(!0),M(j,null,U(c.value,i=>(S(),J(P(Xe),{num:i.amount,price:i.price.toFixed(2),title:i.name,thumb:P(F)(i.coverImage)},null,8,["num","price","title","thumb"]))),256))]))}};export{ht as default};
