import{g as t,p,a as r}from"./request.1fb238cd.js";const d=(a,s=1,o=0)=>p("/api/v1/shop_carts",{product:a,amount:s,price:o}),e=()=>t("/api/v1/shop_carts"),i=a=>r("/api/v1/shop_carts/"+a);export{d as a,i as d,e as l};