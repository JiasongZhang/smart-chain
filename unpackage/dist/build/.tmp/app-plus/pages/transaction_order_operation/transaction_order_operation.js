(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/transaction_order_operation/transaction_order_operation"],{"1dd6":function(t,s,a){"use strict";a("ea04");var n=i(a("b0ce")),e=i(a("4609"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(e.default))},4609:function(t,s,a){"use strict";a.r(s);var n=a("f316"),e=a("98e4");for(var i in e)"default"!==i&&function(t){a.d(s,t,function(){return e[t]})}(i);a("cc87");var o=a("2877"),c=Object(o["a"])(e["default"],n["a"],n["b"],!1,null,null,null);s["default"]=c.exports},"4ca7":function(t,s,a){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;e(a("9c73"));var n=e(a("05e4"));function e(t){return t&&t.__esModule?t:{default:t}}var i={components:{mInput:n.default},data:function(){return{state:"等待收款",keshou:520,rmb:333,time:"2019-03-19 11:31:22",name:"张三",zfb:"133XXXXXXXX"}},methods:{smb:function(){t.setClipboardData({data:this.zfb,success:function(){console.log("success")}}),t.showToast({title:"已复制支付宝账号",icon:"none"})}}};s.default=i}).call(this,a("649d")["default"])},"687e":function(t,s,a){},"98e4":function(t,s,a){"use strict";a.r(s);var n=a("4ca7"),e=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(s,t,function(){return n[t]})}(i);s["default"]=e.a},cc87:function(t,s,a){"use strict";var n=a("687e"),e=a.n(n);e.a},f316:function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"content"},[a("view",{staticClass:"state"},[t._v("订单状态："+t._s(t.state))]),a("hr"),a("view",{staticClass:"jiaoyi"},[a("p",{staticClass:"input-row"},[t._v("交易数量："),a("span",{staticClass:"span"},[t._v(t._s(t.keshou))]),t._v("可售金额")]),a("p",{staticClass:"input-row"},[t._v("金"),a("span",{staticClass:"jine"},[t._v("额：")]),a("span",{staticClass:"span"},[t._v(t._s(t.rmb))]),t._v("人民币")]),a("p",{staticClass:"input-row"},[t._v("交易时间："+t._s(t.time))])],1),a("hr"),a("view",{staticClass:"shoukuan"},[a("span",{staticClass:"one",staticStyle:{display:"block",height:"70rpx","line-height":"70rpx"}},[t._v("收款方：")]),a("p",[t._v("性名："+t._s(t.name))]),a("p",[t._v("支付宝："+t._s(t.zfb))]),a("span",{staticClass:"two"},[t._v("注:转账切勿填写任何备注")])],1),a("button",{attrs:{eventid:"7839eb57-0"},on:{tap:t.smb}},[t._v("复制支付宝账号")])],1)},e=[];a.d(s,"a",function(){return n}),a.d(s,"b",function(){return e})}},[["1dd6","common/runtime","common/vendor"]]]);