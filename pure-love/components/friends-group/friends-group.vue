<template>
  <view class="friends-grop">
    <view class="friends-grop-nav">
      <view
        :class="{ 'friends-grop-nav-bar': true, select: navItem == index }"
        v-for="(item, index) in navBar"
        :key="index"
        @click="navChoose(index)"
        >{{ item.msg }}</view
      >
    </view>
    <view class="friends-grop-list">
      <view
        class="friends-grop-list-item-bar"
        v-for="(item, index) in fgroupList"
        :key="index"
        @click="fgChoose(index)"
      >
        <view class="left">
          <image src="../../static/indexImages/head.png"></image>
        </view>
        <view class="right">
          <view class="friends-grop-list-item-name"> 抚耳听风 </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
const navBar = [
  {
    value: "friend",
    msg: "好友",
  },
  {
    value: "group",
    msg: "群聊",
  },
];

export default {
  name: "friends-group",
  data() {
    return {
      navBar,
      navItem: 0,
      fgroupList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  watch: {
    navItem() {
      console.log("1111");
    },
  },
  onLoad() {},
  methods: {
    navChoose(index) {
      console.log(index);
      this.navItem = index;
    },
    fgChoose(index) {
      console.log(index);
    },
  },
};
</script>

<style scoped>
.friends-grop {
  margin-top: 20rpx;
  background-color: #fdfeff;
  width: 100%;
}

.friends-grop-nav {
  display: flex;
  margin-bottom: 20rpx;
}

.friends-grop-nav-bar {
  margin: 20rpx;
  height: 50rpx;
  width: 100rpx;
  text-align: center;
  border-radius: 30rpx;
}

.select {
  background-color: #e0f2fe;
  color: #7bbfea;
}

.friends-grop-list {
  width: 100%;
}

.friends-grop-list-item-bar {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20rpx;
}

.friends-grop-list-item-bar :active {
  background-color: #e7e8e9;
}

.left image {
  height: 80rpx;
  width: 80rpx;
  border-radius: 50%;
}

.right {
  flex: 1;
}

.friends-grop-list-item-name {
  margin-left: 20rpx;
  font-size: 35rpx;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1rpx solid #f1f4f3;
  padding: 20rpx;
}
</style>
