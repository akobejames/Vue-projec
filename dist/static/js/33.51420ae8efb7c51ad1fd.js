webpackJsonp([33],{"6Ugi":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("mtWM"),n=i.n(a),r={name:"Travelstorydetial",data:function(){return{msg:"travelstorydetial页面",detial:{},pid:"",foodExperience:{}}},methods:{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){this.$router.push("/sharep")},topl:function(){this.$router.push("/comments")}},created:function(){var t=this;console.log(this.$route.query.id),n()({url:"http://www.getstorydetial/api"}).then(function(e){t.detial=e.data.travelstorydetial})}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{position:"relative"}},[i("van-nav-bar",{attrs:{"left-arrow":""},on:{"click-left":t.onClickLeft}},[i("van-icon",{staticStyle:{"margin-right":"10px"},attrs:{slot:"right",name:"chat-o",info:t.detial.star,color:"black",size:"20px"},on:{click:t.topl},slot:"right"}),t._v(" "),i("van-icon",{attrs:{slot:"right",name:"weapp-nav",size:"20px"},on:{click:t.onClickRight},slot:"right"})],1),t._v(" "),i("div",{staticClass:"img"},[i("van-image",{attrs:{fit:"cover",src:t.detial.imgs,width:"100%"}}),t._v(" "),i("p",[t._v(t._s(t.detial.city)+"|"+t._s(t.detial.type))]),t._v(" "),i("h3",[t._v(t._s(t.detial.des))])],1),t._v(" "),i("van-row",{staticStyle:{height:"100px","padding-top":"20px"}},[i("van-col",{attrs:{span:"4"}},[i("img",{staticStyle:{"border-radius":"50%",width:"50px",height:"50px",float:"left","margin-top":"15px"},attrs:{src:t.detial.fdimgs}})]),t._v(" "),i("van-col",{attrs:{span:"4"}},[i("h4",[t._v("\n        "+t._s(t.detial.name)+"\n        "),i("br"),t._v("4周前\n      ")]),t._v(" "),i("h4")])],1),t._v(" "),t._l(t.detial.conlist,function(e){return i("van-row",{key:e.des1},[i("van-col",{attrs:{span:"22",offset:"1"}},[i("p",[t._v(t._s(e.des1))]),t._v(" "),i("van-image",{attrs:{fit:"cover",src:e.imgs,width:"100%"}}),t._v(" "),i("p",[t._v(t._s(e.des2))])],1)],1)})],2)},staticRenderFns:[]};var o=i("VU/8")(r,s,!1,function(t){i("z0r7")},"data-v-482768b2",null);e.default=o.exports},z0r7:function(t,e){}});
//# sourceMappingURL=33.51420ae8efb7c51ad1fd.js.map