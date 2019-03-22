<template>
    <view class="content">
			<view class="fu">
				<p>联系人手机：{{ shouji }}</p>
				<p>打款方性名：{{ name }}</p>
				<p>打款方手机：{{ dakuan_shouji }}</p>
				<p>汇款凭证:</p>
				<!-- <image src="../../static/img/zhifu.jpg" alt=""> -->
				<view>
					<image src="../../static/img/zhifu.jpg" mode=""></image>
				</view>
				
			</view>
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
	                 shouji:"158XXXXXXXX",
									 name:"张三",
									 dakuan_shouji:"158XXXXXXXX",
	             }
	         },
	         methods: {
	 					
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
	.fu{
		width: 92%;
		margin:  0 auto;
		margin-top: 25upx;
	}
	p{
		font-size: 35upx;
		line-height: 60upx;
	}
	.fu view{
		width: 100%;
		height: 900%;
	}
	image{
		width: 500upx;
		margin-left: 90upx;
		height: 900upx;
	}
</style>
