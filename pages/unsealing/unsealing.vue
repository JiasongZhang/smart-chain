<template>
	<view class="content">
		<view class="father">
		
				
			<view class="sub">
		
				<view class="input-row zhanghaolist">
			  <view class="left">用户名</view>
				<view style="border-bottom: solid 2upx #C3C3C3;width: 100%;">
					<m-input type="text" v-model="name" placeholder="XXX" style="100%"></m-input>
				</view>
			</view>
			
			<view class="input-row zhanghaolist">
			  <view class="left">真实性名</view>
				<view style="border-bottom: solid 2upx #C3C3C3;width: 100%;">
					<m-input type="text" v-model="ture_name" placeholder="XXX" style="width: 100%;"></m-input>
				</view>
			</view>
			
			<view class="input-row zhanghaolist">
			  <view class="left">手机号码</view>
				<view style="border-bottom: solid 2upx #C3C3C3;width: 100%;">
					<m-input type="number" v-model="dianhua" placeholder="158XXXXXXXX" style="width: 100%;"></m-input>
				</view>
			</view>
			
			<view class="input-row zhanghaolist">
			  <view class="left">身份证号</view>
				<view style="border-bottom: solid 2upx #C3C3C3;width: 100%;">
					<m-input type="text" v-model="name_num" placeholder="设置6位数字的交易密码" style="width: 100%;"></m-input>
				</view>
			</view>
			
			<view class="input-row zhanghaolist">
			  <view class="left">交易密码</view>
				<view style="border-bottom: solid 2upx #C3C3C3;width: 100%;">
					<m-input type="password" v-model="pwd" max-length=6 placeholder="填写交易支付宝账号" style="100%"></m-input>
				</view>
			  
			</view>
			</view>
		
		</view>
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
										 ture_name:"",
										 dianhua:"",
										 pwd:"",
										 new_pwd:"",
										 name_num:""
		             }
		         },
		         methods: {
							 
							
							 
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
	  margin-top: 35upx;
	  /* border: 1px solid #5888e9; */
	  font-size: 35upx !important; 
	}
	.zhanghaolist .left{
		width: 30%;
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
	  border-radius: 0px;
	  color: #FFFFFF;
		/* margin-bottom: 10upx; */
		border-radius: 20upx;
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
</style>