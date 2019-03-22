<template>
    <view class="content">
			<view class="state">
				订单状态：{{ state }}
			</view>
			<hr />
			<view class="jiaoyi">
				<p class="input-row">交易数量：<span class="span">{{ keshou }}</span>可售金额</p>
				<p class="input-row">金 <span class="jine"> 额：</span><span class="span">{{ rmb }}</span>人民币</p>
				<p class="input-row">交易时间：{{ time }}</p>
			</view>
			<hr />
			<view class="shoukuan">
				<span class="one" style="display: block;height: 70upx;line-height: 70upx;">收款方：</span>
				<p>性名：{{ name }}</p>
				<p>支付宝：{{ zfb }}</p>
				<span class="two">注:转账切勿填写任何备注</span>
			</view>
			<button @tap="smb">复制支付宝账号</button>
			 <!-- <textarea id="input">这是幕后黑手</textarea> -->
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
									 keshou:520,
									 rmb:333,
									 time:"2019-03-19 11:31:22",
									 name:"张三",
									 zfb:"133XXXXXXXX"
	             }
	         },
	         methods: {
	 					smb:function () {
							uni.setClipboardData({
    data: this.zfb,
    success: function () {
        console.log('success');
    }
});
      // var input = document.getElementById("input");
      // input.value = text; // 修改文本框的内容
      // input.select(); // 选中文本
			// text.select();
      // document.execCommand("copy"); // 执行浏览器复制命令
							uni.showToast({
							  title: '已复制支付宝账号',
								icon:"none"
							 });
						}
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
	.jiaoyi{
		width: 92%;
		margin: 0 auto;
		letter-spacing: 5upx;
		font-size: 30upx !important;
		color: #AE3535;
		padding-top: 30upx;
		padding-bottom: 30upx;
		line-height: 50upx;
	}
	.span{
		width: 120upx;
		border-bottom:solid 2upx #AE3535 ;
		display: block;
		text-align: center;
		height: 40upx;
	}
	.jine{
		text-indent: 2.3em;
	}
	.shoukuan{
		width: 92%;
		margin: 0 auto;
	}
	.shoukuan .one{
		font-size: 35upx !important;
		letter-spacing: 7upx;
		font-weight: 600;
		color: #545454;
	}
	.shoukuan p{
		letter-spacing: 5upx;
		font-size: 30upx !important;
		color: #AE3535;
		line-height: 50upx;
	}
	
	.two{
		color: #AE3535;
		font-size: 10upx;
	}
	button{
		width: 450upx;
		height: 80upx;
		margin: 0 auto;
		color: #fff;
		border-radius: 10upx;
		background-color: #2465E7;
		line-height: 80upx;
		letter-spacing: 8upx;
		margin-top: 20upx;
	}
</style>

