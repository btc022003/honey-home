"use strict";(self["webpackChunkdemacia_shop"]=self["webpackChunkdemacia_shop"]||[]).push([[160],{9160:function(t,a,e){e.r(a),e.d(a,{default:function(){return c}});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav"},[e("van-nav-bar",{attrs:{title:"确认订单","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._l(t.data,(function(a){return e("van-card",{key:a.id,attrs:{num:a.amount,price:a.price,desc:"描述信息",title:a.product.name,thumb:a.product.coverImage},on:{"click-thumb":function(e){return t.toDetail(a)}}})})),e("van-dropdown-menu",[e("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.value1,callback:function(a){t.value1=a},expression:"value1"}})],1),e("van-dropdown-menu",[e("van-dropdown-item",{attrs:{options:t.option2},on:{change:t.onchange},model:{value:t.value2,callback:function(a){t.value2=a},expression:"value2"}})],1),e("van-submit-bar",{attrs:{price:t.sum-this.data.bbb,"button-text":"提交订单"}})],2)},o=[],i=(e(1539),e(4747),{data:function(){return{data:[],value1:0,option1:[{text:"河南省郑州市中原区枫杨街道莲花街55号威科姆",value:0},{text:"常用地址一",value:1},{text:"常用地址二",value:2}],value2:0,option2:[{text:"选择使用优惠券",value:0},{text:"满100减10",value:1,max:100,min:10},{text:"满300减30",value:2,max:300,min:30},{text:"满500减50",value:3,max:500,min:50},{text:"满1000减100",value:4,max:1e3,min:100},{text:"满2000减200",value:5,max:2e3,min:200},{text:"满5000减700",value:6,max:5e3,min:700}],aaa:0}},created:function(){this.data=this.$route.query.dataName},methods:{onchange:function(t){this.option2[t].max<=this.data.aaa?(console.log("可用"),this.data.bbb=100*this.option2[t].min):this.$toast("未达到满减金额，不可用")},onClickLeft:function(){this.$router.go(-1)},toDetail:function(t){this.$router.push({name:"detail",params:{id:t.product.id}})}},computed:{sum:function(){var t=0;return this.data.forEach((function(a){t+=a.price*a.amount})),this.data.aaa=t,this.data.bbb=0,100*t}}}),u=i,l=e(3736),r=(0,l.Z)(u,n,o,!1,null,null,null),c=r.exports}}]);
//# sourceMappingURL=160-legacy.e21aafb2.js.map