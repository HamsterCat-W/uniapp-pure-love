<template>
  <view class="msg-list-content">
    <view
      class="list-content"
      v-for="(item, index) in msgList"
      :key="index"
      @click="select(item)"
    >
      <view class="list-content-left">
        <image src="../../static/indexImages/head.png"></image>
      </view>
      <view class="list-content-right">
        <view class="list-content-right-top">
          <view class="list-content-right-top-nickname"> 陕师大计科院 </view>
          <view class="list-content-right-top-timer"> 20:35 </view>
        </view>
        <view class="list-content-right-bottom">
          <view class="list-content-right-bottom-content">这谁知道呢 </view>
          <view class="list-content-right-bottom-content-num">1</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "msg-list",
  data() {
    return {
      msgList: [1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1, 1],
    };
  },
  methods: {
    select(e) {
      console.log(e);
      console.log("点击了xxx");
    },
  },
};
</script>

<style scoped>
.msg-list-content {
  width: 100%;
}

.list-content {
  display: flex;
  width: 100%;
}

.list-content:active {
  background-color: #e7e8e9;
}

.list-content-left {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20rpx;
  width: 100rpx;
}

.list-content-left image {
  height: 100rpx;
  width: 100rpx;
  border-radius: 50%;
}

.list-content-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100rpx;
  margin-right: 20rpx;
  margin-top: 20rpx;
}

.list-content-right-top {
  display: flex;
  width: 100%;
  font-size: 35rpx;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: space-between;
}

.list-content-right-bottom {
  display: flex;
  width: 100%;
  font-size: 26rpx;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 6rpx;
  justify-content: space-between;
}

.list-content-right-bottom-content-num {
  background-color: #d93a49;
  border-radius: 50%;
  width: 30rpx;
  margin-right: 10rpx;
  height: 30rpx;
  text-align: center;
  font-size: 26rpx;
  font-family: Arial, Helvetica, sans-serif;
  padding: 4rpx;
  color: #fffffb;
}
</style>

