"use strict";(self["webpackChunkdemacia_shop"]=self["webpackChunkdemacia_shop"]||[]).push([[492],{6492:function(e,r,a){a.r(r),a.d(r,{default:function(){return m}});var s=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"reg"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"logo",attrs:{src:"https://img0.baidu.com/it/u=3790566103,2185063526&fm=253&fmt=auto&app=138&f=PNG?w=500&h=373",alt:""}})]),a("van-form",{on:{submit:e.onSubmit}},[a("van-field",{attrs:{name:"userName",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.userName,callback:function(r){e.userName=r},expression:"userName"}}),a("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}}),a("van-field",{attrs:{type:"password",name:"repassword",label:"确认密码",placeholder:"请再次输入密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.repassword,callback:function(r){e.repassword=r},expression:"repassword"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("注册")])],1)],1),a("router-link",{attrs:{to:{name:"Login"}}},[e._v("已有账号，我要登录")])],1)},t=[],n=a(6198),o=(a(8975),a(4916),a(5306),a(8398)),u=a(4540),i=a(1753),l={data:function(){return{userName:"",password:"",repassword:""}},methods:{onSubmit:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.password==e.repassword){r.next=3;break}return(0,o.Z)({message:"两次输入的密码不一致",type:"warning"}),r.abrupt("return");case 3:return r.next=5,(0,u.Gc)({userName:e.userName,password:e.password});case 5:a=r.sent,console.log(a),1==a.code?((0,o.Z)({message:"注册成功",type:"success"}),(0,i.o4)(a.data),e.$router.push({name:"Login"}),e.$store.dispatch("loadCarts"),e.$router.replace({name:"User"})):(0,o.Z)({message:"注册异常",type:"danger"});case 8:case"end":return r.stop()}}),r)})))()}}},c=l,p=a(3736),d=(0,p.Z)(c,s,t,!1,null,"5ec1779a",null),m=d.exports},4540:function(e,r,a){a.d(r,{Gc:function(){return n},UO:function(){return t}});var s=a(5972),t=function(e){return(0,s.v_)("/api/v1/auth/login",e)},n=function(e){return(0,s.v_)("/api/v1/auth/reg",e)}}}]);
//# sourceMappingURL=492-legacy.2ca32dbd.js.map