import{r as m,ah as b,ao as g,F as h,G as k,k as a,H as o,J as t,N as c,a9 as d}from"./index.62c3c838.js";import{l as v}from"./auth.c1ba27ea.js";import{T as i,s as V}from"./request.5f65cc45.js";import{F as w,a as p}from"./index.81f7915f.js";import{C as x}from"./index.12ecbe23.js";import{B as y}from"./index.9a678f37.js";import"./index.765106ab.js";const N={class:"user-form"},B=c("img",{class:"logo",style:{width:"35vw",display:"block",margin:"20px auto","border-radius":"8px"},src:"https://gd-hbimg.huaban.com/ef82ffce3a2b96618a4d11716c9e2953ff12b77412e9d2-aozO97_fw658",alt:""},null,-1),C={style:{margin:"16px"}},z={__name:"Login",setup(F){const l=m(""),r=m(""),f=b(),_=u=>{v(u).then(e=>{e.code==1?(i.success("\u767B\u5F55\u6210\u529F"),V(e.data),f.push({name:"Home"})):i.fail(e.data)})};return(u,e)=>{const n=g("router-link");return h(),k("div",N,[a(n,{to:{name:"Home"}},{default:o(()=>[B]),_:1}),a(t(w),{onSubmit:_},{default:o(()=>[a(t(x),{inset:""},{default:o(()=>[a(t(p),{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),name:"userName",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"]),a(t(p),{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=s=>r.value=s),type:"password",name:"password",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}]},null,8,["modelValue"])]),_:1}),c("div",C,[a(t(y),{round:"",block:"",type:"primary","native-type":"submit"},{default:o(()=>[d("\u63D0\u4EA4")]),_:1})])]),_:1}),a(n,{class:"link-button",to:{name:"Reg"}},{default:o(()=>[d("\u6CA1\u6709\u8D26\u53F7,\u6211\u8981\u6CE8\u518C")]),_:1})])}}};export{z as default};
