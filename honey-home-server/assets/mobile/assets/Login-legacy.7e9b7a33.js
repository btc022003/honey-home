System.register(["./index-legacy.726f94e5.js","./auth-legacy.ddf2694f.js","./request-legacy.93ec3bd7.js","./index-legacy.e85f87e4.js","./index-legacy.598d1ad3.js","./index-legacy.6cba7026.js","./index-legacy.bd0d42fa.js"],(function(e,a){"use strict";var l,s,t,d,u,n,o,r,c,i,m,f,g,p,b,y,h;return{setters:[e=>{l=e.r,s=e.ah,t=e.ao,d=e.F,u=e.G,n=e.k,o=e.H,r=e.J,c=e.N,i=e.a9},e=>{m=e.l},e=>{f=e.T,g=e.s},e=>{p=e.F,b=e.a},e=>{y=e.C},e=>{h=e.B},()=>{}],execute:function(){const a={class:"user-form"},v=c("img",{class:"logo",style:{width:"35vw",display:"block",margin:"20px auto","border-radius":"8px"},src:"https://gd-hbimg.huaban.com/ef82ffce3a2b96618a4d11716c9e2953ff12b77412e9d2-aozO97_fw658",alt:""},null,-1),x={style:{margin:"16px"}};e("default",{__name:"Login",setup(e){const _=l(""),j=l(""),V=s(),k=e=>{m(e).then((e=>{1==e.code?(f.success("登录成功"),g(e.data),V.push({name:"Home"})):f.fail(e.data)}))};return(e,l)=>{const s=t("router-link");return d(),u("div",a,[n(s,{to:{name:"Home"}},{default:o((()=>[v])),_:1}),n(r(p),{onSubmit:k},{default:o((()=>[n(r(y),{inset:""},{default:o((()=>[n(r(b),{modelValue:_.value,"onUpdate:modelValue":l[0]||(l[0]=e=>_.value=e),name:"userName",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),n(r(b),{modelValue:j.value,"onUpdate:modelValue":l[1]||(l[1]=e=>j.value=e),type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),c("div",x,[n(r(h),{round:"",block:"",type:"primary","native-type":"submit"},{default:o((()=>[i("提交")])),_:1})])])),_:1}),n(s,{class:"link-button",to:{name:"Reg"}},{default:o((()=>[i("没有账号,我要注册")])),_:1})])}}})}}}));
