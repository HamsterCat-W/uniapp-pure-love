<template>
  <!-- 这是通讯录界面 -->
  <view class="content">
    <view class="tab-top-bar">
      <view class="tab-top-bar-left">
        <view class="tab-top-bar-left-profile">
          <image src="../../static/indexImages/head.png"></image>
        </view>
      </view>
      <view class="tab-top-bar-center">
        <view class="tab-top-bar-center-tag"> 通讯录 </view>
      </view>
      <view class="tab-top-bar-right">
        <view class="tab-top-bar-right-add">
          <image
            src="../../static/indexImages/addFriends.png"
            @click="addFriends"
          ></image>
        </view>
      </view>
    </view>
    <view class="tab-bootom-bar">
      <view class="tab-bootom-bar-top">
        <seacher-bar backg="grey"></seacher-bar>
      </view>
      <view class="tab-bootom-bar-bottom">
        <view class="tab-bootom-bar-bottom-top">
          <new-apply textShow="新朋友"></new-apply>
          <new-apply textShow="群通知"></new-apply>
        </view>
        <view class="tab-bootom-bar-bottom-bottom">
          <friend-group></friend-group>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import SeacherBar from "../../components/searcher/searcher.vue";
import NewApply from "../../components/apply-group/apply-group.vue";
import FriendGroup from "../../components/friends-group/friends-group.vue";
export default {
  components: {
    SeacherBar,
    NewApply,
    FriendGroup,
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
    addFriends() {
      console.log("点击了添加朋友按钮");
    },
  },
};
</script>

<style scoped>
.content {
  height: 100%;
  width: 100%;
}
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
  overflow: hidden;
}

.tab-bootom-bar {
  margin-top: 180rpx;
  z-index: 0;
  background-color: #e9f0f6;
}

.tab-top-bar-left {
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
  margin-top: 50rpx;
}

.tab-top-bar-center {
  margin-top: 50rpx;
}

.tab-top-bar-center-tag {
  font-size: 35rpx;
  font-family: Arial, Helvetica, sans-serif;
  color: #fffffb;
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

.tab-top-bar-right-add {
  text-align: center;
}

.tab-top-bar-right-add image {
  height: 60rpx;
  width: 60rpx;
  margin-right: 20rpx;
}

.tab-bootom-bar-bottom {
  margin-top: 20rpx;
  margin-bottom: 20rpx;
}

.tab-bootom-bar-bottom-top {
  background-color: #fdfeff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200rpx;
  align-items: flex-start;
  justify-content: space-around;
}
</style>
