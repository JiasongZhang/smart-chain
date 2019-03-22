<template>
	<view class="content">
		<view class="father">
		
				
			<view class="sub">
		
				<!-- <view class="input-row zhanghaolist">
			  <view class="left">真实性名</view>
				<view style="border-bottom: solid 2upx #C3C3C3; width: 100%;">
					<m-input type="text" v-model="name" placeholder="请输入" style="width: 100%;"></m-input>
				</view>
			</view> -->
			
			<!-- <view class="input-row zhanghaolist">
			  <view class="left">手机号</view>
				<view style="border-bottom: solid 2upx #C3C3C3;width: 100%;">
					<m-input type="text" v-model="dianhua" placeholder="158XXXXXXX" style="100%"></m-input>
				</view>
			  
			</view> -->
			
			<!-- <view class="input-row zhanghaolist">
			  <view class="left">验证码</view>
				<view style="border-bottom: solid 2upx #C3C3C3;width: 100%;" class="input-row">
					<m-input type="text" v-model="code" id="id_number" placeholder="验证码" style="70%"></m-input>
					<button @tap="getCode" :disabled="disabled">{{timeData}}</button>
				</view>
				
			</view> -->
			
			<view class="input-row zhanghaolist">
			  <view class="left">原密码</view>
				<view  style="border-bottom: solid 2upx #C3C3C3;width: 100%;">
					<m-input type="password" v-model="pwd" placeholder="设置6位数字的交易密码" style="width: 100%;"></m-input>
				</view>
			</view>
			
			<view class="input-row zhanghaolist">
			  <view class="left">新密码</view>
				<view  style="border-bottom: solid 2upx #C3C3C3;width: 100%;">
					<m-input type="password" v-model="new_pwd" max-length=6 placeholder="填写交易支付宝账号" style="width: 100%;"></m-input>
				</view>
			</view>
			<!-- </view> -->
			
			<view class="input-row zhanghaolist">
			  <view class="left">确认密码</view>
				<view  style="border-bottom: solid 2upx #C3C3C3;width: 100%;">
					<m-input type="password" v-model="qurren_pwd" placeholder="设置6位数字的交易密码" style="width: 100%;"></m-input>
				</view>
			</view>
			
			
			
		</view>
		
		
		</view>
		<text class="wangji" @tap="wangji">忘记密码?</text>
		<!-- <view> -->
			<button @tap="smb()" class="smb">提交</button>
		
		
	</view>
	
</template>

<script>
		 import service from '../../service.js';
		     import mInput from '../../components/m-input.vue';
		 
		     export default {
		         components: {
		             mInput
		         },
		         data() {
		             return {
		                 name:"",
										 dianhua:"",
										 code:"",
										 pwd:"",
										 new_pwd:"",
										 qurren_pwd:"",
										 
										 
										 timeData:"获取验证码",
										 disabled:false,
										 second:60
		             }
		         },
		         methods: {
							 //忘记密码
							 wangji:function () {
								 uni.navigateTo({
								   url: '../forget/forget',
								 });
							 },
							 
							 
							 getCode:function(){
							 	var auth_timetimer =  setInterval(()=>{
							       this.second--;
							       this.timeData = "重新获取("+this.second+")"
							       this.disabled = true
							       if(this.second<=0){
							           this.sendAuthCode = true;
							           this.timeData = "获取验证码"
							           this.disabled = false
							           clearInterval(auth_timetimer);
							       }
							   }, 1000);
							 },
							 
		 					smb:function () {
								
								// console.log("提交")
								var id_num = /^1[34578]\d{9}$/;
								var in_num_val = this.dianhua;
								// console.log(zfb_pwd.length)
								// console.log(in_num_val.search(id_num))
								if(in_num_val.search(id_num)==0){
									
									// this.smb()
									console.log("验证成功")
								}else{
									console.log("手机号码格式错误")
								}
							}
		 						}
		     }
</script>

<style>
.content{
		width: 100%;
		padding: 0;
		overflow: hidden;
	}
	.father{
		width: 100%;
		background-color: #fff;
		padding: 20upx 20upx 30upx 20upx;
		margin-top: 50upx;
	}
	.sub{
		width: 92%;
		color: #8A8A8A;
		
	}
	.zhanghaolist {
	  margin-top: 40upx;
	  /* border: 1px solid #5888e9; */
	  font-size: 35upx !important; 
	}
	.zhanghaolist .left{
		width: 30%;
		color: #000000;
		/* font-weight: 600; */
	}
	p{
		color: #AE3535;
		font-size: 22upx !important;
		margin-left: 3%;
		padding-top: 10upx ;
	}
	.zhanghaolist button {
	  height: 67upx;
	  font-size: 30upx;
	  line-height: 60upx;
	  background-color: #5888e9;
	  
	  color: #FFFFFF;
		/* margin-bottom: 10upx; */
		border-radius: 20upx;
		position: relative;
		top: -10upx;
	}
	.smb{
		width: 45%;
		height: 80upx;
		line-height: 80upx;
		color: #fff;
		letter-spacing: 10upx;
		background-color: #5888E9;
		margin-top: 200upx;
	}
	
	.wangji{
		text-align: right;
		margin-right: 4%;
		color: #303030;
		font-size: 30upx
	}
</style>