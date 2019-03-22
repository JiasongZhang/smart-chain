<template>
  <view class="content">
    <view class="main_top">
      <image src="../../static/img/logo.png"></image>
      <view>
        <p class="main_name">名称</p>
        <p class="main_id">id:4654664646</p>
      </view>
    </view>
    <view class="main_zhong">
      <view class="main_zhong_title">我的资产</view>
      <view class="main_zhong_list">
        <view class="main_zhong_list_b">
          <view class="main_zhong_list_a">
            <p>积分总量</p>
            <p>360</p>
          </view>
        </view>
        <view class="main_zhong_list_b">
          <view class="main_zhong_list_a">
            <p>积分总量</p>
            <p>360</p>
          </view>
        </view>
        <view class="main_zhong_list_b">
          <view class="main_zhong_list_a">
            <p>积分总量</p>
            <p>360</p>
          </view>
        </view>
        <view class="main_zhong_list_b">
          <view class="main_zhong_list_a">
            <p>积分总量</p>
            <p>360</p>
          </view>
        </view>
        <view class="main_zhong_list_b">
          <view class="main_zhong_list_a">
            <p>积分总量</p>
            <p>360</p>
          </view>
        </view>
        <view class="main_zhong_list_b">
          <view class="main_zhong_list_a">
            <p>积分总量</p>
            <p>360</p>
          </view>
        </view>
      </view>
    </view>

    <view class="main_list">
      <view class="main_zhong_title">智链工具</view>
      <view class="main_lista" @tap="personal_data" >
        <view>
          <image class="main_a" src="../../static/img/main_a.png"></image>
          个人资料
        </view>
        <image class="main_right" src="../../static/img/main_right.png"></image>
      </view>
      <view class="main_lista" @tap="real_name_verification" >
        <view>
          <image class="main_b" src="../../static/img/main_b.png"></image>
          实名认证
        </view>
        <image class="main_right" src="../../static/img/main_right.png"></image>
      </view>
      <view class="main_lista" @tap="unsealing" >
        <view>
          <image class="main_c" src="../../static/img/main_c.png"></image>
          账号解封
        </view>
        <image class="main_right" src="../../static/img/main_right.png"></image>
      </view>
      <view class="main_lista" @tap="change_password" >
        <view>
          <image class="main_d" src="../../static/img/main_d.png"></image>
          修改交易密码
        </view>
        <image class="main_right" src="../../static/img/main_right.png"></image>
      </view>
      <view class="main_listab">
        <view>
          <image class="main_e" src="../../static/img/main_e.png"></image>
          退出登录
        </view>
        <image class="main_right" src="../../static/img/main_right.png"></image>
      </view>
    </view>



  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'

  export default {
    computed: {
      ...mapState(['hasLogin', 'forcedLogin'])
    },
    methods: {
      //前往个人资料
      personal_data:function(){
         uni.navigateTo({
           url: '../personal_data/personal_data',
         });
      },
      //前往实名认证
      real_name_verification:function(){
        uni.navigateTo({
          url: '../real_name_verification/real_name_verification',
        });
      },
      //前往账号解封
      unsealing:function(){
        uni.navigateTo({
          url: '../unsealing/unsealing',
        });
      },
      //前往修改密码页面
      change_password:function(){
        uni.navigateTo({
          url: '../change_password/change_password',
        });
      }
        
      // ...mapMutations(['logout']),//退出登录
      //登录
      //             bindLogin() {
      //                 uni.reLaunch({
      //                     url: '../login/login',
      //                 });
      //             },
    }
  }
</script>

<style>
  .main_right {
    width: 18upx;
    height: 28upx;
  }

  .main_a {
    width: 40upx;
    height: 34upx;
    margin-right: 22upx;
  }

  .main_b {
    width: 38upx;
    height: 36upx;
    margin-right: 22upx;
  }

  .main_c {
    width: 36upx;
    height: 47upx;
    margin-right: 22upx;
  }

  .main_d {
    width: 40upx;
    height: 40upx;
    margin-right: 22upx;
  }

  .main_e {
    width: 40upx;
    height: 40upx;
    margin-right: 22upx;
  }

  .main_lista {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24upx;
    padding-bottom: 10upx;
    border-bottom: 2upx solid #bdbdbd;
  }
  .main_listab{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24upx;
    padding-bottom: 10upx;
  }
  .main_listab view{
    display: flex;
    align-items: center;
    font-size: 30upx;
    color: #545454;
  }
  .main_lista view {
    display: flex;
    align-items: center;
    font-size: 30upx;
    color: #545454;
  }

  .main_list {
    background-color: #FFFFFF;
    margin-top: 10upx;
    padding: 10upx 40upx;
  }

  .content {
    padding: 0upx;
  }

  .main_top {
    background-color: #FFFFFF;
    margin: 20upx auto;
    padding: 40upx 0px ;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .main_top image {
    height: 112upx;
    width: 98upx;
    margin-right: 20upx;
    margin-left: 40upx;
  }

  .main_name {
    color: #545454;
    font-size: 30upx;
  }

  .main_id {
    color: #545454;
    font-size: 30upx;
    margin-top: 6upx;
  }

  .main_zhong {
    background-color: #FFFFFF;
    padding: 20upx 40upx;
    padding-bottom: 50upx;
  }

  .main_zhong_title {
    border-left: 4upx solid #2465e7;
    color: #545454;
    padding-left: 6upx;
    font-size: 32upx;
  }

  .main_zhong_list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .main_zhong_list_b {
    width: 33.33%;
    margin-top: 24upx;
    /* text-align: center; */
    display: flex;
    justify-content: center;
  }

  .main_zhong_list_a {
    background-color: #2465e7;
    color: #FFFFFF;
    text-align: center;
    width: 179upx;
    height: 128upx;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 30upx;
  }
</style>
