<template>
  <view class="content">
    <view class="content_logo">
      <image src="../../static/img/logo.png"></image>
    </view>
    <view class="input-group">
      <view class="input-row border zhanghaolist">
        <image src="../../static/img/zhanghao.png"></image>
        <m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入手机号"></m-input>
      </view>

      <view class="input-row zhanghaolist">
        <image src="../../static/img/password.png"></image>
        <m-input type="text" v-model="code" placeholder="请输入验证码"></m-input>
        <button @tap="getCode" :disabled="disabled">{{timeData}}</button>
      </view>

      <!-- <view class="input-row zhanghaolist">
        <image src="../../static/img/id.png"></image>
        <m-input type="text" v-model="password" placeholder="推荐人ID"></m-input>
      </view> -->
    </view>
    <view class="btn-row">
      <button type="primary" class="primary" @tap="bindLogin">登录</button>
    </view>
    <p>智链联盟</p>
  </view>
</template>

<script>
  import service from '../../service.js';
  import { mapState , mapMutations } from 'vuex'
  import mInput from '../../components/m-input.vue'
  export default {
    components: {
      mInput
    },
    data() {
      return {
        hasProvider: false,
        account: '',
        password: '',
        positionTop: 0,
        timeData: "获取验证码",
        disabled: false,
        second: 60,
        code: ""
      }
    },
    computed: mapState(['forcedLogin']),
    methods: {
      getCode: function() {
        this.disabled = true
        let that = this;
        
        //验证手机号
        if(!(/^1[23456789]\d{9}$/.test(that.account))){ 
            uni.showToast({
            	 title: '请输入正确的手机号',
            	icon:"none"
            })
            return false; 
        } 
        
        uni.request({
        	url: that.baseurl + '/service/users/smsCode',
        	dataType: 'json', //默认 json格式
        	data: {
            mobile:that.account
          },
        	method: 'POST', //请求方式
        	header: {
        		'content-type': 'application/x-www-form-urlencoded',
        	},
        	success: (res) => {
            console.log( res )
            if( res.data.status == 0 ){
               var auth_timetimer = setInterval(() => {
                that.second--;
                that.timeData = "重新获取(" + that.second + ")"
                
                if (that.second <= 0) {
                  that.sendAuthCode = true;
                  that.timeData = "获取验证码"
                  that.disabled = false
                  clearInterval(auth_timetimer);
                }
              }, 1000);
            }
            
        	},
        	fail: (error) => {
        		console.log(error)
        	}
        })
        
        
        
       
      },
      
      initPosition() {
        console.log("111")
        this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
      },
      bindLogin() {
        uni.setStorage({
          key: '1111111',
          data: 'username',
          success: function(res) {
            console.log(res)
          },
        })
      },
      toMain(userName) {
        this.login(userName);
        if (this.forcedLogin) {
          uni.reLaunch({
            url: '../main/main',
          });
        } else {
          uni.navigateBack();
        }

      }
    },
    onLoad() {
      this.initPosition();
    }
  }
</script>

<style>
  uni-tabbar {
    display: none;
  }

  .btn-row button {
    background-color: #5888e9 !important;
    color: #FFFFFF;
  }

  .btn-row {
    width: 81%;
    margin: 0 auto;
    margin-top: 40upx;
  }

  .input-group {
    width: 81%;
    margin: 0 auto;
  }

  .zhanghaolist {
    margin-top: 30upx;
    border: 1px solid #5888e9;
    font-size: 30upx !important;
  }

  .zhanghaolist image {
    width: 86upx;
    height: 65upx;
  }

  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: #FFFFFF;
    padding: 20upx;
  }

  .content_logo {
    text-align: center;
    margin-top: 60upx;
    margin-bottom: 60upx;
  }

  .content_logo image {
    width: 227upx;
    height: 250upx;
  }

  .action-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 81%;
    margin: 0 auto;
    font-size: 30upx;
  }

  .action-row navigator {
    color: #007aff;
    padding: 0 20upx;
  }

  .oauth-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .oauth-image {
    width: 100upx;
    height: 100upx;
    border: 1upx solid #dddddd;
    border-radius: 100upx;
    margin: 0 40upx;
    background-color: #ffffff;
  }

  .oauth-image image {
    width: 60upx;
    height: 60upx;
    margin: 20upx;
  }

  .primary {
    border-radius: 0;
  }


  .zhanghaolist {
    margin-top: 30upx;
    border: 1px solid #5888e9;
    font-size: 30upx !important;
  }

  .zhanghaolist image {
    width: 86upx;
    height: 66upx;
  }

  .zhanghaolist button {
    height: 67upx;
    font-size: 30upx;
    line-height: 60upx;
    background-color: #5888e9;
    border-radius: 0px;
    color: #FFFFFF;
  }

  p {
    text-align: center;
    color: #5888E9;
    letter-spacing: 10upx;
    margin-top: 280upx;
  }
</style>
