(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forget/forget"],{"038f":function(t,e,a){"use strict";a.r(e);var i=a("771f"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},7238:function(t,e,a){},"771f":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(a("9c73"));var i=n(a("05e4"));function n(t){return t&&t.__esModule?t:{default:t}}var s={components:{mInput:i.default},data:function(){return{name:"",dianhua:"",code:"",pwd:"",new_pwd:"",timeData:"获取验证码",disabled:!1,second:60}},methods:{getCode:function(){var t=this,e=setInterval(function(){t.second--,t.timeData="重新获取("+t.second+")",t.disabled=!0,t.second<=0&&(t.sendAuthCode=!0,t.timeData="获取验证码",t.disabled=!1,clearInterval(e))},1e3)},smb:function(){var t=/^1[34578]\d{9}$/,e=this.dianhua;0==e.search(t)?console.log("验证成功"):console.log("手机号码格式错误")}}};e.default=s},7991:function(t,e,a){"use strict";var i=a("7238"),n=a.n(i);n.a},"9a4b":function(t,e,a){"use strict";a("ea04");var i=s(a("b0ce")),n=s(a("d357"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},baab:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"father"},[a("view",{staticClass:"sub"},[a("view",{staticClass:"input-row zhanghaolist"},[a("view",{staticClass:"left"},[t._v("邮箱")]),a("view",{staticStyle:{"border-bottom":"solid 2rpx #C3C3C3",width:"100%"}},[a("m-input",{staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"请输入",eventid:"6317350b-0",mpcomid:"6317350b-0"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)]),a("view",{staticClass:"input-row zhanghaolist"},[a("view",{staticClass:"left"},[t._v("验证码")]),a("view",{staticClass:"input-row",staticStyle:{"border-bottom":"solid 2rpx #C3C3C3",width:"100%"}},[a("m-input",{staticStyle:{},attrs:{type:"text",id:"id_number",placeholder:"验证码",eventid:"6317350b-1",mpcomid:"6317350b-1"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),a("button",{attrs:{disabled:t.disabled,eventid:"6317350b-2"},on:{tap:t.getCode}},[t._v(t._s(t.timeData))])],1)]),a("view",{staticClass:"input-row zhanghaolist"},[a("view",{staticClass:"left"},[t._v("新密码")]),a("view",{staticStyle:{"border-bottom":"solid 2rpx #C3C3C3",width:"100%"}},[a("m-input",{staticStyle:{width:"100%"},attrs:{type:"password",placeholder:"设置6位数字的交易密码",eventid:"6317350b-3",mpcomid:"6317350b-2"},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}})],1)]),a("view",{staticClass:"input-row zhanghaolist"},[a("view",{staticClass:"left"},[t._v("确认密码")]),a("view",{staticStyle:{"border-bottom":"solid 2rpx #C3C3C3",width:"100%"}},[a("m-input",{staticStyle:{width:"100%"},attrs:{type:"password","max-length":"6",placeholder:"填写交易支付宝账号",eventid:"6317350b-4",mpcomid:"6317350b-3"},model:{value:t.new_pwd,callback:function(e){t.new_pwd=e},expression:"new_pwd"}})],1)])])]),a("button",{staticClass:"smb",attrs:{eventid:"6317350b-5"},on:{tap:function(e){t.smb()}}},[t._v("提交")])],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},d357:function(t,e,a){"use strict";a.r(e);var i=a("baab"),n=a("038f");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("7991");var o=a("2877"),l=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=l.exports}},[["9a4b","common/runtime","common/vendor"]]]);