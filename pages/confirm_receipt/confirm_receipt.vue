<template>
    <view class="content">
			<view class="state">
				订单状态：{{ state }}
			</view>
			<hr />
			<view class="queren">
				确定收款吗？
			</view>
			<view class="shangchuan">
				可点击查看对方的汇款截图，如截图有问题或没有收到款，可 以在平台留言处理！
				<!-- <image src="" mode=""></image> -->
				<!-- <input type="file" value="" /> -->
				<!-- <view class="input-row">
					<text style="font-size: 40upx;">身份证号</text>
					<m-input type="text" v-model="u_name" style="border: solid 2upx #000000; max-width: 400upx; letter-spacing: 20upx;"></m-input>
				</view> -->
				<!-- <button @tap="asd" class="img">上传图片</button> -->
			</view>
			<button class="qure" @tap="modal">确认已经付款</button>
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
	                 state:"等待收款",
									 u_name:"412727XXXXXXXXXXXX"
	             }
	         },
					 
	         methods: {
	 					
						modal:function () {
							uni:uni.showModal({
								title: '请输入交易密码',
								content: '',
								showCancel: true,
								cancelText: '',
								confirmText: '',
								success: res => {},
								fail: () => {},
								complete: () => {}
							});
						}
						
						
// 						asd:function () {
// 							uni.chooseImage({
// 							    count: 1, //默认9
// 							    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
// 							    sourceType: ['album'], //从相册选择
// 							    success: function (res) {
// 							        console.log(JSON.stringify(res.tempFilePaths));
// 							    }
// 							});
// 						}
						
	 					}
	     }
</script>

<style>
	.content{
		width: 100%; 
		overflow: hidden;
		padding: 0;
		background-color: #fff;
	}
	.state{
		width: 92%;
		margin: 0 auto;
		height: 93upx;
		line-height: 93upx;
		font-size: 35upx !important;
		letter-spacing: 7upx;
		font-weight: 600;
		color: #545454;
	}
	hr{
		color: #545454;
	}
	.queren{
		width: 92%;
		margin: 0 auto;
		height: 160upx;
		margin-top: 30upx;
		font-size: 35upx !important;
		letter-spacing: 7upx;
		color:#303030;
		font-weight: 600;
	}
	.shangchuan{
		width: 92%;
		margin: 0 auto;
		color: #303030;
		font-size: 25upx;
	}
	.img{
		float: left;
		width: 300upx;
		height: 170upx;
		line-height: 170upx;
		background-color: #B2B2B2;
		color: #fff;
	}
	.qure{
		width: 500upx;
		height: 90upx;
		background-color: #5888E9;
		color: #fff;
		letter-spacing: 10upx;
		margin-top: 100upx;
	}
	.input-row{
		margin-top: 30upx;
		color: #717171;
	}
	/* m-input{
		border: solid 2upx #000000;
	} */
</style>