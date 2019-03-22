<template>
	<view class="content">
		<view class="father">
		
				
			<view class="sub">
		
				<view class="input-row zhanghaolist">
					<view class="left">用户名</view>
					<view class="right" style="border-bottom: solid 1upx #C3C3C3;">{{ name }}</view>
				</view>
			
			<view class="input-row zhanghaolist">
				<view class="left">注册时间</view>
				<view class="right" style="border-bottom: solid 1upx #C3C3C3;">{{ time }}</view>
			</view>
			
			<view class="input-row zhanghaolist">
				<view class="left">推荐人</view>
				<view class="right" style="border-bottom: solid 1upx #C3C3C3;">{{ tuijian }}</view>
			</view>
			
			<view class="input-row zhanghaolist">
				<view class="left">真实性名</view>
				<view class="right" style="border-bottom: solid 1upx #C3C3C3;">{{ ture_name }}</view>
			</view>
			
			<view class="input-row zhanghaolist">
				<view class="left">手机号</view>
				<view class="right" style="border-bottom: solid 1upx #C3C3C3;">{{ dianhua }}</view>
			</view>
			
			<view class="input-row zhanghaolist">
				<view class="left">智链钱包</view>
				<view class="right" style="border-bottom: solid 1upx #C3C3C3;">{{ wallet }}</view>
			</view>
			
			<view class="input-row zhanghaolist">
				<view class="left">支付宝账号</view>
				<view class="right" style="border-bottom: solid 1upx #C3C3C3;">{{ zfb }}</view>
			</view>
			
			<view class="input-row zhanghaolist">
				<view class="left img_img">收款码</view>
				<image :src="erweima "></image>
			</view>
			
			</view>
		
		</view>
	</view>
</template>

<script>
				import service from '../../service.js';
		     import mInput from '../../components/m-input.vue';
		 import erweima from '../../static/img/erweima.png'
		     export default {
		         components: {
		             mInput
		         },
		         data() {
		             return {
		                 name:"ID",
										 time:"2019-03-18 16：31：55",
										 tuijian:"158XXXXXXXX",
										 ture_name:"XXX",
										 dianhua:"133XXXXXXXX",
										 wallet:"加密代号",
										 zfb:"支付宝号",
										 erweima:erweima
							
		             }
		         },
		         methods: {
							 
							
							 
		 				
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
	.zhanghaolist .right{
		width: 70%;
		/* justify-content: center; */
		/* font-weight: 600; */
	}
	.img_img{
		line-height: 228upx;
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
	.zhanghaolist image {
	  width: 228upx;
		height: 228upx;
		margin: 0 auto;
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