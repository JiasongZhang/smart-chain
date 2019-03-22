<template>
    <view class="content">
			<view class="list">
				<p class="a">关于智链更新</p>
				<p class="b">2019-03-22 09:57:10</p>
			</view>
			<view class="tex">
				      不啊沙发沙发沙发身份身份斯蒂芬上帝粉丝地方水豆腐四个哦是的好贵哦撒到韩国大概会大概会大概会大概会。
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
	.list{
		width: 100%;
		border-bottom:solid 2upx #EFEFEF;
		text-align: center;
		padding-top: 15upx;
		padding-bottom: 15upx;
		line-height: 60upx;
	}
	.tex{
		width: 85%;
		padding-top: 30upx;
		margin: 0 auto;
		text-indent: 2em;
		font-size: 35upx !important;
		line-height: 50upx;
		letter-spacing: 5upx;
	}
</style>