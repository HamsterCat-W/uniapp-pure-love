<template>
  <!-- 这是消息界面 -->
  <view class="content">
    <view class="tab-top-bar">
      <view class="tab-top-bar-left">
        <view class="tab-top-bar-left-profile">
          <image src="../../static/indexImages/head.png"></image>
        </view>
      </view>
	  <view class="tab-top-bar-center">
	  	<view class="tab-top-bar-center-tag">
	  		通讯录
	  	</view>
	  </view>
      <view class="tab-top-bar-right">
        <view class="tab-top-bar-right-add">
          <image src="../../static/indexImages/addFriends.png" @click="addFriends"></image>
        </view>
      </view>
    </view>
    <view class="tab-bootom-bar">
      <seacher-bar backg="grey"></seacher-bar>
    </view>
  </view>
</template>

<script>
import SeacherBar from "../../components/searcher/searcher.vue";
import MsgList from "../../components/msg-list/msg-list.vue";
export default {
  components: {
    SeacherBar,
  },
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  // 下拉刷新函数
  onPullDownRefresh() {
    console.log("refresh");
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 1000);
  },
  methods: {
	  addFriends(){
		  console.log('点击了添加朋友按钮')
	  }
  },
};
</script>

<style scoped>
.tab-top-bar {
  height: 180rpx;
  width: 100%;
  background-color: #00bfff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}

.tab-bootom-bar {
  margin-top: 180rpx;
  z-index: 0;
}

.tab-top-bar-left {
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
  margin-top: 50rpx;
}

.tab-top-bar-right {
  float: right;
  margin-top: 50rpx;
}

.tab-top-bar-left-profile {
  text-align: center;
}

.tab-top-bar-left-profile image {
  height: 60rpx;
  width: 60rpx;
  border-radius: 50%;
  margin-left: 20rpx;
  margin-top: 10rpx;
}

.tab-top-bar-left-nickname {
  margin-left: 20rpx;
  font-size: 35rpx;
  font-family: Arial, Helvetica, sans-serif;
  color: #fffffb;
}

.tab-top-bar-right-add {
  text-align: center;
}

.tab-top-bar-right-add image {
  height: 60rpx;
  width: 60rpx;
  margin-right: 20rpx;
}
</style>
