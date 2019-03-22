<template>
  <view class="shichang">
    <view class="tan" v-show="tanStaus">
      <div class="tan_all">
        <view class="tan_alla">
          <view class="tan_alla_a">请选择数量</view>
          <image src="../../static/img/change_Y.png"></image>
        </view>
        <view class="tan_allb" v-for="( item,index ) in changNum" :key="index" :data-as="index" @tap=" changenum ">
          <view class="tan_alla_a">{{item.num}}</view>
          <image v-show="item.status" src="../../static/img/change_Y.png"></image>
          <image v-show="item.status == false" src="../../static/img/change_N.png"></image>
        </view>
        <div class="uni-modal__ft">
          <div @tap="tanGuan" class="uni-modal__btn uni_modal__btn_default" style="color: rgb(0, 0, 0);">取消</div>
          <div @tap="tanTrue" class="uni-modal__btn uni_modal__btn_primary" style="color: rgb(0, 122, 255);">确定</div>
        </div>
      </div>
    </view>
    <view class="shichangtab">
      <view v-for="(item,index) in tablist" :key="index" :class="item.status? 'shichangtaba':''" @tap="qiehuan"
        :data-index="index">{{item.name}}</view>
    </view>
    <view class="heng"></view>
    <view :class="tablist[0].status? 'denglistnone':'shichangall'">
      <view class="shichangall_title">等待买入</view>
      <view class="shichangall_title_list">
        <view>数量</view>
        <view>单位/美元</view>
        <view>合计金额</view>
        <view>操作</view>
      </view>
      <view class="denglist" v-for="(item,index) in dengList" :key="index">
        <view>{{item.num}}</view>
        <view>{{item.price}}</view>
        <view>{{item.money}}</view>
        <view>{{item.mai}}</view>
      </view>
    </view>
    <view :class="tablist[1].status? 'denglistnone':'shichangall'">
      <view class="shichangall_title">申请买入</view>
      <view class="shuliang">
        <text>申请数量</text>
        <view @tap="xuanze">120</view>
      </view>
      <view class="shuliang shulianga">
        <text>单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价</text>
        <view>120</view>
      </view>
      <view class="shenqing">
        <button>确认申请</button>
      </view>

      <view class="heng"></view>
      <view class="shichangall_title">买入列表</view>
      <view class="mairulieb">
        <view class="mairulieb_title">
          <view>时间</view>
          <view>数量</view>
          <view>单价</view>
          <view>金额</view>
          <view>状态</view>
          <view>操作</view>
        </view>
        <view class="mairulieb_list">
          <view class="mairulieb_lista">
            <view>02-13</view>
            <view>22:36:20</view>
          </view>
          <view class="mairulieb_lista">100</view>
          <view class="mairulieb_lista">20.00</view>
          <view class="mairulieb_lista">2000</view>
          <view class="mairulieb_lista">完成</view>
          <view class="mairulieb_lista">操作</view>
        </view>
      </view>
    </view>
    <view :class="tablist[2].status?'denglistnone':'shichangall'">
      <view class="shichangall_title">卖出列表</view>
      <view class="mairulieb">
        <view class="mairulieb_title">
          <view>时间</view>
          <view>数量</view>
          <view>单价</view>
          <view>金额</view>
          <view>状态</view>
          <view>操作</view>
        </view>
        <view class="mairulieb_list">
          <view class="mairulieb_lista">
            <view>02-13</view>
            <view>22:36:20</view>
          </view>
          <view class="mairulieb_lista">100</view>
          <view class="mairulieb_lista">20.00</view>
          <view class="mairulieb_lista">2000</view>
          <view class="mairulieb_lista">完成</view>
          <view class="mairulieb_lista">操作</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        tanStaus: false, //弹窗状态
        num: 0, //买进数量
        tablist: [{ // 顶部tab
          name: "交易大厅",
          status: true
        }, {
          name: "买进",
          status: false
        }, {
          name: "卖出",
          status: false
        }],
        dengList: [{
          num: "18",
          price: "10.00$",
          money: "180$",
          mai: "卖出"
        }], //交易大厅数据列表
        changNum: [{//选择买入数量列表
          num: "10",
          status: false
        }, {
          num: "20",
          status: false
        }, {
          num: "50",
          status: false
        }, {
          num: "100",
          status: false
        }, {
          num: "150",
          status: false
        }, {
          num: "200",
          status: false
        }, {
          num: "300",
          status: false
        }, ]
      };
    },
    onReachBottom: function() { //触碰底部加载
      console.log("1111")
      this.adddata()
    },
    methods: {
      //选择买入数量
      changenum: function(e) {
        for (let i = 0; i < this.changNum.length; i++) {
          this.changNum[i].status = false
        }
        this.changNum[e.target.dataset.as].status = true
      },
      //上啦加载
      adddata: function() {
        for (let i = 0; i < 10; i++) {
          this.dengList.push({
            num: "18",
            price: "10.00$",
            money: "180$",
            mai: "卖出"
          })
        }
      },
      //弹出选择选择框
      xuanze(e) {
        this.tanStaus = true
      },
      //取消弹出框
      tanGuan() {
        this.tanStaus = false
        for( let i = 0; i < this.changNum.length;i++ ){
           this.changNum[i].status = false 
        }
        this.num = 0
      },
      //确定买入数量
      tanTrue(){
        for( let i = 0; i < this.changNum.length;i++ ){
          if( this.changNum[i].status ){
            this.num = this.changNum[i].num
          }
        }
        // console.log( this.num )
        if( this.num == 0 ){
          uni.showToast({
          	 title: '请选择买入数量',
          	icon:"none"
          })
        }
      },
      //切换顶部tab
      qiehuan: function(e) {
        for (let i = 0; i < this.tablist.length; i++) {
          this.tablist[i].status = false
        }
        this.tablist[e.target.dataset.index].status = true
      }
    }
  }
</script>

<style>
  .uni_modal__btn_default {
    border-right: 2upx solid #b2b2b2;
  }

  .uni-modal__btn {
    display: block;
    flex: 1;
    text-decoration: none;
    color: rgba(0, 0, 0, 0);
  }

  .uni-modal__ft {
    line-height: 40px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    text-align: center;
    border-top: 2upx solid #b2b2b2;
    font-size: 30upx;
  }

  .tan_allb {
    border-top: 2upx solid #b2b2b2;
    font-size: 28upx;
    color: #a1a1a1;
    display: flex;
    justify-content: space-between;
    height: 68upx;
    align-items: center;
  }

  .tan_allb view {
    margin-left: 22upx;
  }

  .tan_allb image {
    height: 28upx;
    width: 28upx;
    margin-right: 24upx;
  }

  .tan_alla {
    font-size: 28upx;
    color: #a1a1a1;
    display: flex;
    justify-content: space-between;
    height: 68upx;
    align-items: center;
  }

  .tan_alla image {
    height: 28upx;
    width: 28upx;
    margin-right: 24upx;
  }

  .tan_alla view {
    margin-left: 22upx;
  }

  .tan_all {
    width: 430upx;
    background-color: #FFFFFF;
    margin-top: -150upx;
  }

  .tan {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mairulieb_list {
    display: flex;
    font-size: 24upx;
    color: #a1a1a1;
    align-items: center;
    height: 66upx;
    border-bottom: 2upx solid #b1b1b1;
    padding: 8upx 0upx;
  }

  .mairulieb_lista {
    width: 16.66%;
    text-align: center;
  }

  .mairulieb_list view view {
    width: 100%;
  }

  .mairulieb_title {
    display: flex;
    background-color: #2465e7;
    color: #FFFFFF;
    font-size: 26upx;
    height: 76upx;
  }

  .mairulieb_title view {
    width: 16.66%;
    text-align: center;
    line-height: 76upx;
  }

  .shenqing {
    text-align: center;
    margin-top: 46upx;
  }

  .shenqing button {
    width: 300upx;
    height: 68upx;
    background-color: #2465e7;
    color: #FFFFFF;
    font-size: 32upx;
    border-radius: 16upx;
    line-height: 68upx;
    margin-bottom: 50upx;
  }

  .shulianga {
    margin-top: 24upx;
  }

  .shuliang {
    display: flex;
    justify-content: center;
  }

  .shuliang text {
    color: #a3a3a3;
    font-size: 32upx;
  }

  .shuliang view {
    width: 300upx;
    border-bottom: 2upx solid #b1b1b1;
    text-align: center;
    font-size: 36upx;
    color: #000000;
    line-height: 50upx;
    margin-left: 14upx;
  }

  .shichangall {
    display: none;
  }

  .denglist {
    display: flex;
    height: 80upx;
    border-bottom: 2upx solid #bdbdbd;
  }

  .denglist view {
    width: 25%;
    text-align: center;
    font-size: 28upx;
    color: #a9a9a9;
    line-height: 80upx;
  }

  .heng {
    height: 16upx;
    background-color: #efefef;
  }

  .shichangall_title {
    font-size: 32upx;
    color: #a1a1a1;
    height: 80upx;
    padding-left: 25upx;
    line-height: 80upx;
  }

  .shichangall_title_list {
    background-color: #2465e7;
    color: #FFFFFF;
    font-size: 26upx;
    display: flex;
    align-items: center;
    height: 80upx;

  }

  .shichangall_title_list view {
    width: 25%;
    text-align: center;
  }

  .shichang {
    width: 100%;
  }

  .shichangtab {
    height: 82upx;
    border-bottom: 2upx solid #ededed;
    display: flex;
  }

  .shichangtab view {
    height: 82upx;
    width: 33.33%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30upx;
    color: #9b9b9b;
  }

  .shichangtaba {
    color: #2465e7 !important;
    border-bottom: 4upx solid #2465e7;
  }
</style>
