webpackJsonp([32],{"12Yl":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("mtWM"),i=a.n(r),n={name:"Orderdetial",data:function(){return{detial:{},active:1}},methods:{onClickLeft:function(){this.$router.go(-1)},tjdd:function(){this.$router.push({path:"/order",query:this.detial})}},mounted:function(){var t=this,e=this.$route.query.price;i()({url:"http://www.getorderdetial/api"}).then(function(a){t.detial=a.data.orderdetial,t.detial.price=e,t.detial.name=t.$store.state.sname,console.log(a.data.orderdetial)})}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("van-nav-bar",{staticStyle:{background:"#DBDBDB"},attrs:{"fixed:true":"","left-arrow":"",title:"订单详情"},on:{"click-left":t.onClickLeft}}),t._v(" "),a("van-row",[a("van-col",{attrs:{span:"22",offset:"1"}},[a("div",{staticStyle:{background:"#E8E8E8",height:"170px","margin-top":"10px",padding:"10px","border-radius":"10px"}},[a("p",[t._v("预订信息：")]),t._v(" "),a("p",[t._v("入住人："+t._s(t.detial.name))]),t._v(" "),a("p",[t._v("联系方式："+t._s(t.detial.phonenum))]),t._v(" "),a("p",[t._v("价格：￥"+t._s(t.detial.price)+"元")]),t._v(" "),a("p",[t._v("订单信息："+t._s(t.detial.ordernum))]),t._v(" "),a("p",[t._v("其他："+t._s(t.detial.beizhu))])])])],1),t._v(" "),a("van-row",[a("van-col",{staticStyle:{"margin-top":"20px"},attrs:{span:"8",offset:"8"}},[a("van-button",{staticStyle:{"border-radius":"10px"},attrs:{type:"primary"},on:{click:t.tjdd}},[t._v("提交订单")])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(n,o,!1,function(t){a("mNp7")},"data-v-4c8a40d4",null);e.default=d.exports},mNp7:function(t,e){}});
//# sourceMappingURL=32.54743c29831200e09615.js.map