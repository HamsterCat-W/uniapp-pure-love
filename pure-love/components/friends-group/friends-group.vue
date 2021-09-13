<template>
  <view class="friends-grop">
    <view class="friends-grop-nav">
      <view
        :class="{'friends-grop-nav-bar':true,'select':navItem==index}"
        v-for="(item, index) in navBar"
        :key="index"
        @click="navChoose(index)"
        >{{ item.msg }}</view
      >
    </view>
    <view class="friends-grop-list"> 这是列表 </view>
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
	color:#7bbfea ;
}
</style>
