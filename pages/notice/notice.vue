<template>
    <view class="content">
			<view class="list" @click="xiangqing">
				<p class="a">系统更新</p>
				<p class="b">2019-03-22 09:57:10</p>
			</view>
			<view class="list" @click="xiangqing">
				<p class="a">系统更新</p>
				<p class="b">2019-03-22 09:57:10</p>
			</view>
			<view class="list" @click="xiangqing">
				<p class="a">系统更新</p>
				<p class="b">2019-03-22 09:57:10</p>
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
	 					xiangqing:function () {
							uni.navigateTo({
							  url: '../notice_xiangqing/notice_xiangqing',
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
	.list{
		width: 100%;
		margin: 0 auto;
		text-indent: 2em;
		padding-top: 20upx ;
		padding-bottom: 10upx;
		border-bottom: 2upx solid #EFEFEF;
		}
		.a{
			font-size: 45upx !important;
			
		}
		.b{
			font-size: 35upx !important;
		}
</style>
