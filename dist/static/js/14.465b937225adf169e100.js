webpackJsonp([14],{Sdtz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("mtWM"),s=i.n(a),o=(i("NYxO"),{name:"Travelstory",data:function(){return{msg:"Food页面",list:[],active:0,userid:""}},created:function(){var t=this;this.userid=this.$store.state.userid,s()({url:"http://106.13.26.54:8080/travelStory"}).then(function(e){t.list=e.data,console.log(e.data)})},methods:{onClickLeft:function(){this.$router.go(-1)},todetial:function(t){this.$router.push({name:"Travelstorydetial",query:{id:t.id}})},fdinfo:function(t){},dianzan:function(t){console.log("dainzan")},sc:function(t){var e=this,i=this.userid;""==i?this.$toast("您还未登录，不能点击收藏"):s()({url:"http://106.13.26.54:8080/userTraverStorySc",params:{travelstoryId:t.i,userId:i}}).then(function(i){1==i.data.code?e.list[t.i].sc=!0:e.$toast("收藏失败")})},qxsc:function(t){console.log(t),""==this.userid?this.$toast("您还未登录，不能点击取消收藏"):this.list[t.i].sc=!1},chat:function(t){this.$router.push("/comments")},userinfo:function(t){this.$router.push("/myself")}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{position:"relative"}},[i("van-nav-bar",{attrs:{"fixed:true":"","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),i("ul",{staticClass:"travellist"},t._l(t.list,function(e,a){return i("li",[i("van-image",{directives:[{name:"tap",rawName:"v-tap",value:{methods:t.todetial,id:e.id},expression:"{methods:todetial,id:item.id}"}],attrs:{fit:"contain",src:e.img}}),t._v(" "),i("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.addressinfo))]),t._v(" "),i("p",[t._v(t._s(e.info))]),t._v(" "),i("van-rate",{attrs:{size:18,color:"#f44","void-icon":"star","void-color":"#eee"},model:{value:e.id,callback:function(i){t.$set(e,"id",i)},expression:"item.id"}}),t._v(" "),i("van-row",{staticStyle:{margin:"10px 0"}},[i("van-col",{attrs:{span:"4"}},[i("van-icon",{directives:[{name:"tap",rawName:"v-tap.stop",value:{methods:t.userinfo,id:t.userid},expression:"{methods:userinfo,id:userid}",modifiers:{stop:!0}}],attrs:{size:"20px",color:"black",name:"manager"}})],1),t._v(" "),i("van-col",{staticStyle:{display:"flex","justify-content":"space-around"},attrs:{span:"10",offset:"10"}},[i("van-icon",{directives:[{name:"tap",rawName:"v-tap.stop",value:{methods:t.dianzan,id:e.id},expression:"{methods:dianzan,id:item.id}",modifiers:{stop:!0}}],attrs:{size:"20px",color:"black",name:"thumb-circle-o"}}),t._v(" "),"1"==e.sc?i("van-icon",{directives:[{name:"tap",rawName:"v-tap",value:{methods:t.qxsc,i:a},expression:"{methods:qxsc,i:i}"}],attrs:{size:"20px",color:"#f44",name:"like"}}):i("van-icon",{directives:[{name:"tap",rawName:"v-tap",value:{methods:t.sc,i:a},expression:"{methods:sc,i:i}"}],attrs:{size:"20px",color:"black",name:"like"}}),t._v(" "),i("van-icon",{directives:[{name:"tap",rawName:"v-tap",value:{methods:t.chat,id:e.id},expression:"{methods:chat,id:item.id}"}],attrs:{size:"20px",color:"black",name:"chat"}})],1)],1)],1)}),0),t._v(" "),i("van-tabbar",{attrs:{id:"zkh-footer"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tabbar-item",{attrs:{icon:"home-o",to:"/index"}},[t._v("推荐")]),t._v(" "),i("van-tabbar-item",{attrs:{icon:"search",to:"find"}},[t._v("发现")]),t._v(" "),i("van-tabbar-item",{attrs:{icon:"description",to:"order"}},[t._v("订单")]),t._v(" "),i("van-tabbar-item",{attrs:{icon:"user-o",to:"myself"}},[t._v("我的")])],1)],1)},staticRenderFns:[]};var r=i("VU/8")(o,n,!1,function(t){i("lrcu")},"data-v-b00e3108",null);e.default=r.exports},lrcu:function(t,e){}});
//# sourceMappingURL=14.465b937225adf169e100.js.map