webpackJsonp([19],{qWy3:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{active:0,fhactive:1}},methods:{fhbtn:function(){this.$router.push("/tripdal")},onClick:function(t,e){console.log(t,e),0==t?this.$router.push("/travel"):1==t?this.$router.push("/trip"):2==t?this.$router.push("/story"):this.$router.push("/comments")},tap:function(){this.$router.push("/hoteldetail")}}},i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"fhmain"}},[r("router-view")],1),t._v(" "),r("div",{attrs:{id:"fh-footer"}},[r("van-tabbar",{model:{value:t.fhactive,callback:function(e){t.fhactive=e},expression:"fhactive"}},[r("van-tabbar-item",{attrs:{icon:"home-o",to:"/index"}},[t._v("推荐")]),t._v(" "),r("van-tabbar-item",{attrs:{icon:"search",to:"/find"}},[t._v("发现")]),t._v(" "),r("van-tabbar-item",{attrs:{icon:"description",to:"/order"}},[t._v("订单")]),t._v(" "),r("van-tabbar-item",{attrs:{icon:"user-o",to:"/myself"}},[t._v("我的")])],1)],1)])},staticRenderFns:[]};var n=r("VU/8")(a,i,!1,function(t){r("v8Mw")},"data-v-7a77e2b1",null);e.default=n.exports},v8Mw:function(t,e){}});
//# sourceMappingURL=19.bcedcb9299adfa866e74.js.map