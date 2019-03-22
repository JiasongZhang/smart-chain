<template>
	<view class="yingyong">
    <!-- 热销 -->
    <view class="yingyong_a">
       <view class="yingyong_a_title">
         热销
       </view>
       <view class="yingyong_a_list">
         <view class="yingyong_a_list_a">
           <view class="yingyong_a_list_a_img"></view>
           <view class="yingyong_a_list_a_title">产品名称</view>
         </view>
         <view class="yingyong_a_list_a">
           <view class="yingyong_a_list_a_img"></view>
           <view class="yingyong_a_list_a_title">产品名称</view>
         </view>
         <view class="yingyong_a_list_a">
           <view class="yingyong_a_list_a_img"></view>
           <view class="yingyong_a_list_a_title">产品名称</view>
         </view>
         <view class="yingyong_a_list_a">
           <view class="yingyong_a_list_a_img"></view>
           <view class="yingyong_a_list_a_title">产品名称</view>
         </view>
       </view>
       <!-- <view class="ying_more">更多<image src="../../static/img/more.png" ></image></view> -->
    </view>
    <!-- //合作企业 -->
    <view class="yingyong_a">
       <view class="yingyong_a_title">
         合作企业
       </view>
       
       <view class="qiye_list">
         <view class="qiye_logo"></view>
         <view class="qiye_xinxi">
           <view>企业名称</view>
           <view>合作信息</view>
         </view>
       </view>
       
       
       
       <!-- <view class="ying_more">更多<image src="../../static/img/more.png" ></image></view> -->
    </view>   
    <!-- //行业应用 -->
    
    <view class="yingyong_a">
       <view class="yingyong_a_title">
         行业应用
       </view>
       <view class="hangye">
         <view class="hang_list">信息标题信息标题信息标题信息标题信息标题信息标题信息标题信息标题信息标题信息标题信息标题信息标题信息标题信息标题信息标题信息标题信息标题</view>
         <view class="hang_list">信息标题信息标题信息标题信息标题信息标题信息标题信息标题信息标题信息标题信息标题</view>
       </view>
       <!-- <view class="ying_more">更多<image src="../../static/img/more.png" ></image></view> -->
    </view> 
    
    
	</view>
</template>

<script>
  import {mapState} from 'vuex'
	export default {
    // components: {uniCard}
		data() {
			return {
				data:"",
        msag:""
			};
		},
    created() {
    },
    methods:{
    }
	}
</script>

<style>
  .hangye{
    margin-top: 30upx;
  }
  .hang_list {
    padding-left: 32upx;
    padding-right: 50upx;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 30upx;
    color: #303030;
    margin-top: 10upx;
  }
  .qiye_logo {
    width: 106upx;
    height: 106upx;
    margin-left: 26upx;
    margin-right: 40upx;
    background-color: #2465e7;
  }
  .qiye_list {
    display: flex;
    align-items: center;
    margin-top: 20upx;
    border-bottom: 2upx solid #aaaaaa;
    padding-bottom: 20upx;
  }
  .qiye_xinxi{
    font-size: 28upx;
    color: #303030;
  }
  .ying_more {
    display: flex;
    justify-content:flex-end;
    align-items: center;
    font-size: 28upx;
    color: #a1a1a1;
    margin-top: 16upx;
  }
  .ying_more image{
    width: 32upx;
    height: 26upx;
    margin-left: 6upx;
    margin-right: 36upx;
  }
  .yingyong_a_list {
    display: flex;
    justify-content: space-between;
    margin-top: 22upx;
  }
  .yingyong_a_list_a_img {
    width: 148upx;
    height: 148upx;
    background-color: #2465e7;
    margin-bottom: 8upx;
  }
  .yingyong_a_list .yingyong_a_list_a{
    width: 25%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    font-size: 30upx;
  }
  .yingyong {
    width: 100%;
    background-color: #efefef;
  }
  .yingyong_a_title {
    border-left: 4upx solid #2465e7;
    font-size: 32upx;
    color: #303030;
    padding-left: 15upx;
  }
  .yingyong_a {
    width: 92%;
    background-color: #FFFFFF;
    border-radius: 15upx ;
    margin: 20upx auto;
    padding: 15upx;
  }

</style>
