<template>
		<view class="suanli">
      <view class="biao">
				<view class="biao_list">
          <view class="biao_list_a"><image class="liutu_a" src="../../static/img/yinliu.png" ></image>流量算力</view>
          <view class="biao_list_b"><image class="liutu_l" src="../../static/img/liutong.png" ></image>流通算力</view>
        </view>
        <view class="biao_list">
          <view class="biao_list_a"><image class="liutu_b" src="../../static/img/xiaofei.png" ></image>消费算力</view>
          <view class="biao_list_b"><image class="liutu_c" src="../../static/img/zhongchou.png" ></image>众筹算力</view>
        </view>
        <view class="biao_list">
          <view class="biao_list_a"><image class="liutu_d" src="../../static/img/gongxiang.png" ></image>共享算力</view>
          <view class="biao_list_b"><image class="liutu_e" src="../../static/img/gongyi.png" ></image>公益算力</view>
        </view>
        <view class="biao_list">
          <view class="biao_list_a"><image class="liutu_f" src="../../static/img/zhihui.png" ></image>智慧算力</view>
          <view class="biao_list_b"><image class="liutu_g" src="../../static/img/tuandui.png" ></image>团队算力</view>
        </view>
        <view class="biao_list">
          <view class="biao_list_a"><image class="liutu_h" src="../../static/img/gongxian.png" ></image>贡献算力</view>
          <view class="biao_list_b"><image class="liutu_i" src="../../static/img/paiming.png" ></image>排名算力</view>
        </view>
        <view class="biao_list">
          <view class="biao_list_ab"><image class="liutu_j" src="../../static/img/fuwu.png" ></image>服务算力</view>
          <view class="biao_list_bc"><image class="liutu_k" src="../../static/img/jiaohuan.png" ></image>交换算力</view>
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
            }
        },
        methods: {
					chufa:function(){
						console.log(this.power)
					}

				}
    }
</script>

<style>
	page{background-color: #EFEFEF}
  .liutu_a{
    width: 52upx;
    height: 49upx;
    margin-left: 26upx;
    margin-right: 32upx;
  }
  .liutu_l{
    width: 51upx;
    height: 31upx;
    margin-left: 26upx;
    margin-right: 32upx;
  }
  .liutu_b{
    width: 50upx;
    height: 46upx;
    margin-left: 26upx;
    margin-right: 32upx;
  }
  .liutu_c{
    width: 52upx;
    height: 52upx;
    margin-left: 26upx;
    margin-right: 32upx;
  }
  .liutu_d{
    width: 50upx;
    height: 59upx;
    margin-left: 26upx;
    margin-right: 32upx;
  }
  .liutu_e{
    width: 52upx;
    height: 44upx;
    margin-left: 26upx;
    margin-right: 32upx;
  }
  .liutu_f{
    width: 59upx;
    height: 52upx;
    margin-left: 26upx;
    margin-right: 32upx;
  }
  .liutu_g{
    width: 48upx;
    height: 48upx;
    margin-left: 26upx;
    margin-right: 32upx;
  }
  .liutu_h{
    width: 52upx;
    height: 52upx;
    margin-left: 26upx;
    margin-right: 32upx;
  }
  .liutu_i{
    width: 50upx;
    height: 48upx;
    margin-left: 26upx;
    margin-right: 32upx;
  }
  .liutu_j{
    width: 47upx;
    height: 42upx;
    margin-left: 26upx;
    margin-right: 32upx;
  }
  .liutu_k{
    width: 52upx;
    height: 42upx;
    margin-left: 26upx;
    margin-right: 32upx;
  }
  .biao_list_a {
    border-bottom: 1px solid #b2b2b2;
    border-right:1px solid #b2b2b2 ;
  }
  .biao_list_b {
    border-bottom: 1px solid #b2b2b2;
  }
  .biao_list_ab {
    border-right:1px solid #b2b2b2 ;
  }
	.suanli{
		width: 100%;
	}
	.biao{
    background-color: #FFFFFF;
    width: 94.66%;
    margin: 27upx;
    padding: 14upx 0upx;
    border-radius: 10upx ;
	}
  .biao_list {
    display: flex;
  }
  .biao_list view{
    height: 128upx;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 32upx;
    color: #6a6a6a;
  }
</style>