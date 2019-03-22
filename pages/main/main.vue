<template>
  <view class="content">
    <view class="swiper_fa">
      <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
        indicator-color="#fff" indicator-active-color="#A2A2A2">
        <swiper-item  v-for='(item,index) in lunbotu' :key="index">
          <image :src="item.img" mode="" style="width: 100%;height: 256upx;"></image>
        </swiper-item>
      </swiper>
    </view>
    <view class="shange">
      <ul>
        <li>
          <image src="../../static/img/hongbao.png" mode="" @tap="red_en"></image>
          <p @tap="red_en">每日红包</p>
        </li>
        <li>
          <image src="../../static/img/pingtai.png" mode="" @click="gonggao"></image>
          <p @click="gonggao">平台公告</p>
        </li>
        <li>
          <image src="../../static/img/tuiguang.png" mode=""></image>
          <p>我要推广</p>
        </li>
        <li>
          <image src="../../static/img/wenda.png" mode=""></image>
          <p>客服问答</p>
        </li>
      </ul>
    </view>
    <view class="gundong">
      <view class="xiaoxi">
        <image src="../../static/img/Sound.png" mode=""></image>
      </view>
      <view class="swiper_fa_text">
        <swiper class="swiper_text" :indicator-dots="indicatorDots_text" :autoplay="autoplay_text" :interval="interval_text"
          :duration="duration_text" vertical='true' circular='true'>
          <swiper-item v-for='(ite,index) in go' :key="index">
            <text>{{ ite.tex }}</text>
          </swiper-item>
        </swiper>
      </view>
    </view>


    <view class="yingyong">
      <view class="main_zhong">
        <view class="main_zhong_title">最新应用</view>
        <view class="main_zhong_list">
          <view class="main_zhong_list_b">
            <view class="main_zhong_list_a">
              <image src="../../static/img/tuiguangjili.png" mode=""></image>
            </view>
          </view>
          <view class="main_zhong_list_b">
            <view class="main_zhong_list_a">
              <image src="../../static/img/fanxian.png" mode=""></image>
            </view>
          </view>
        </view>
      </view>
    </view>


    <view class="yingyong">
      <view class="main_zhong">
        <view class="main_zhong_title">战略合作</view>
        <view class="main_zhong_list">
          <view class="main_zhong_list_b">
            <view class="main_zhong_list_a">
              <image src="../../static/img/tuiguangjili.png" mode=""></image>
            </view>
          </view>
          <view class="main_zhong_list_b">
            <view class="main_zhong_list_a">
              <image src="../../static/img/fanxian.png" mode=""></image>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="yingyong">
      <view class="main_zhong">
        <view class="main_zhong_title">最新应用</view>
        <view class="main_zhong_list">
          <view class="main_zhong_list_b">
            <view class="main_zhong_list_a">
              <image src="../../static/img/tuiguangjili.png" mode=""></image>
            </view>
          </view>
          <view class="main_zhong_list_b">
            <view class="main_zhong_list_a">
              <image src="../../static/img/fanxian.png" mode=""></image>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import service from '../../service.js';
  import mInput from '../../components/m-input.vue';

  export default {
    data() {
      return {
				lunbotu:[
					{img:"../../static/img/lunbo.png"},
					{img:"../../static/img/lunbo.png"},
					{img:"../../static/img/lunbo.png"},
					{img:"../../static/img/lunbo.png"},
					{img:"../../static/img/lunbo.png"}
				],
				go:[
					{tex:"恭喜马冬梅成功注册智链，领取500积分"},
					{tex:"恭喜马冬梅成功注册智链，领取500积分"},
					{tex:"恭喜马冬梅成功注册智链，领取500积分"},
					{tex:"恭喜马冬梅成功注册智链，领取500积分"},
					{tex:"恭喜马冬梅成功注册智链，领取500积分"},
					{tex:"恭喜马冬梅成功注册智链，领取500积分"},
					{tex:"恭喜马冬梅成功注册智链，领取500积分"},
					{tex:"恭喜马冬梅成功注册智链，领取500积分"}
				],
        indicatorDots: true,
        autoplay: true,
        interval: 4000,
        duration: 500,
        indicatorDots_text: false,
        autoplay_text: true,
        interval_text: 1500,
        duration_text: 500,
        vertical: false

      }
    },
    created() {
			
    	uni.getStorage({
          key: 'storage_key',
          data: 'hello',
          success: function (res) {
            console.log( res.username )
              console.log('success');
              if( res.username == undefined ){
                uni.reLaunch({
                   url: '../login/login',
                })
              }
          }
      })
    },
    methods: {
			//公告
			gonggao:function () {
				uni.navigateTo({
				  url: '../notice/notice',
				});
			},
			red_en:function () {
				uni.navigateTo({
				  url: '../red_envelopes/red_envelopes',
				});
			}
    }
  }
</script>

<style>
  .content {
    padding: 0;
    margin: 0;
  }

  .swiper_fa {
    width: 92%;
    margin: 0 auto;
    margin-top: 20upx;
  }

  .swiper {
    width: 694upx;
    height: 256upx;
  }

  .swiper-item {
    border-radius: 30upx;
  }
  .shange {
    width: 92%;
    margin: 0 auto;
    height: 155upx;
    background-color: #fff;
    margin-top: 20upx;
    border-radius: 20upx;
  }


  .shange ul {
    padding: 0 30upx 0 30upx;
    margin: 0;
    width: 90%;
    height: 182upx;
    list-style: none;
  }

  .shange ul li {
    float: left;
    width: 25%;
    height: 182upx;
    text-align: center;
  }

  .shange ul li image {
    width: 45upx;
    height: 55upx;
    margin-top: 30upx;
  }

  .shange ul li p {
    font-size: 24upx !important;
    line-height: 30upx;
    margin-top: 10upx;
    letter-spacing: 4upx;
  }

  .swiper_fa_text {
    width: 80%;
    margin-top: 28upx;
    margin-left: 30upx;
  }

  .gundong {
    width: 92%;
    margin: 0 auto;
    height: 95upx;
    background-color: #fff;
    margin-top: 20upx;
    border-radius: 20upx;
  }

  .gundong view {
    float: left;
  }

  .xiaoxi image {
    width: 45upx;
    height: 45upx;
    margin-top: 26upx;
    margin-left: 20upx;
  }

  .swiper_text {
    width: 70%;
    height: 40upx;
    font-size: 30upx;
    letter-spacing: 4upx;
  }
  .yingyong {
    width: 92%;
    margin: 0 auto;
    margin-top: 20upx;
    border-radius: 20upx;
    overflow: hidden;
  }

  .main_zhong {
    background-color: #fff;
    padding: 5upx 10upx;
    padding-bottom: 10upx;

  }

  .main_zhong_title {
    border-left: 4upx solid #2465e7;
    color: #545454;
    padding-left: 10upx;
    font-size: 32upx;
    margin-left: 10upx;
    margin-top: 10upx;
  }

  .main_zhong_list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .main_zhong_list_b {
    width: 47%;
    margin-top: 24upx;
    text-align: center;
    margin-right: 8upx;
    margin-left: 8upx;
  }

  .main_zhong_list_a {
    text-align: center;
    width: 100%;
    height: 188upx;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 30upx;
  }

  .main_zhong_list_a image {
    width: 100%;
    height: 188upx;
  }
</style>
