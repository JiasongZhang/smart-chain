<template>
    <view class="content">
        <view class="father">
				
						
					<view class="sub">

						<view class="input-row zhanghaolist">
							<view class="left">用户名</view>
							<view style="border-bottom: solid 2upx #C3C3C3;width: 70%;">
								<m-input type="text" v-model="id" placeholder="ID" style="width: 100%;"></m-input>
							</view>
							
						</view>
					
						<view class="input-row zhanghaolist">
							<view class="left">真实性名</view>
							<view style="border-bottom: solid 2upx #C3C3C3;width: 70%;">
								<m-input type="text" v-model="name" placeholder="XXX" style="width: 100%;"></m-input>
							</view>
						</view>
					
						<view class="input-row zhanghaolist">
							<view class="left">身份证</view>
							<view style="border-bottom: solid 2upx #C3C3C3;width: 70%;">
								<m-input type="text" v-model="id_number" id="id_number" placeholder="身份证号码" style="width: 100%;"></m-input>
							</view>
						</view>
					
						<view class="input-row zhanghaolist">
							<view class="left">交易密码</view>
							<view style="border-bottom: solid 2upx #C3C3C3;width: 70%;">
								<m-input type="password" v-model="pwd" placeholder="设置6位数字的交易密码" style="width: 100%;"></m-input>
							</view>
						</view>
					
						<view class="input-row zhanghaolist">
							<view class="left">支付宝账号</view>
							<view style="border-bottom: solid 2upx #C3C3C3;width: 70%;">
								<m-input type="text" v-model="zfb_id" max-length=6 placeholder="填写交易支付宝账号" style="width: 100%;"></m-input>
							</view>
						</view>
					</view>
				
				</view>
				<p>注：认证后不能做修改，请填写自己真实信息</p>
				<button @tap="smb()">提交</button>
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
	                 id:"",
									 name:"",
									 id_number:"",
									 pwd:"",
									 zfb_id:''
	             }
	         },
	         methods: {
	 					smb:function () {
							
							// console.log("提交")
							var id_num = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
							var in_num_val = this.id_number;
							var zfb_pwd =this.pwd;
							// console.log(zfb_pwd.length)
							// console.log(in_num_val.search(id_num))
							if(in_num_val.search(id_num)==0){
								
								// this.smb()
								if(zfb_pwd.length==6){
									console.log("验证成功")
								}else{
									console.log("交易密码格式错误")
								}
							}else{
								console.log("身份证号码格式错误")
							}
						}
	 						}
	     }
</script>

<style>
	.content{
		width: 100%; 
		overflow: hidden;
		padding: 0;
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
	.zhanghaolist view m-input{
		/* width: 100%; */
		/* font-weight: 600; */
	}
	p{
		color: #AE3535;
		font-size: 22upx !important;
		margin-left: 3%;
		padding-top: 10upx ;
	}
	button{
		width: 45%;
		height: 80upx;
		line-height: 80upx;
		color: #fff;
		letter-spacing: 10upx;
		background-color: #5888E9;
		margin-top: 200upx;
	}
</style>