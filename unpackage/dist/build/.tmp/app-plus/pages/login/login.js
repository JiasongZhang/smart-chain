(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"10b7":function(t,e,a){"use strict";a.r(e);var n=a("c16e"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},"1b2d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[t._m(0),a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row border zhanghaolist"},[a("image",{attrs:{src:"../../static/img/zhanghao.png"}}),a("m-input",{staticClass:"m-input",attrs:{type:"text",clearable:"",focus:"",placeholder:"请输入账号",eventid:"3b569264-0",mpcomid:"3b569264-0"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),a("view",{staticClass:"input-row zhanghaolist"},[a("image",{attrs:{src:"../../static/img/password.png"}}),a("m-input",{attrs:{type:"text",placeholder:"请输入验证码",eventid:"3b569264-1",mpcomid:"3b569264-1"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),a("button",{attrs:{disabled:t.disabled,eventid:"3b569264-2"},on:{tap:t.getCode}},[t._v(t._s(t.timeData))])],1),a("view",{staticClass:"input-row zhanghaolist"},[a("image",{attrs:{src:"../../static/img/id.png"}}),a("m-input",{attrs:{type:"text",placeholder:"推荐人ID",eventid:"3b569264-3",mpcomid:"3b569264-2"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)]),a("view",{staticClass:"btn-row"},[a("button",{staticClass:"primary",attrs:{type:"primary",eventid:"3b569264-4"},on:{tap:t.bindLogin}},[t._v("登录")])],1),a("p",[t._v("智链联盟")])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content_logo"},[a("image",{attrs:{src:"../../static/img/logo.png"}})])}];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"68c2":function(t,e,a){"use strict";var n=a("bfea"),i=a.n(n);i.a},"6aa6":function(t,e,a){"use strict";a("0a09");var n=o(a("b0ce")),i=o(a("a8a5"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},a8a5:function(t,e,a){"use strict";a.r(e);var n=a("1b2d"),i=a("10b7");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("68c2");var s=a("2877"),c=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},bfea:function(t,e,a){},c16e:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(a("a51c"));var n=a("2f62"),i=o(a("6a00"));function o(t){return t&&t.__esModule?t:{default:t}}var s={components:{mInput:i.default},data:function(){return{hasProvider:!1,account:"",password:"",positionTop:0,timeData:"获取验证码",disabled:!1,second:60,code:""}},computed:(0,n.mapState)(["forcedLogin"]),methods:{getCode:function(){var t=this;this.disabled=!0;var e=setInterval(function(){t.second--,t.timeData="重新获取("+t.second+")",t.second<=0&&(t.sendAuthCode=!0,t.timeData="获取验证码",t.disabled=!1,clearInterval(e))},1e3)},initPosition:function(){console.log("111"),this.positionTop=t.getSystemInfoSync().windowHeight-100},bindLogin:function(){t.setStorage({key:"1111111",data:"username",success:function(t){console.log(t)}})},toMain:function(e){this.login(e),this.forcedLogin?t.reLaunch({url:"../main/main"}):t.navigateBack()}},onLoad:function(){this.initPosition()}};e.default=s}).call(this,a("649d")["default"])}},[["6aa6","common/runtime","common/vendor"]]]);