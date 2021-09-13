<template>
  <view class="apply-group-box" @click="lookUp">
    <view class="apply-group-tag">{{ textShow }}</view>
    <image src="../../static/indexImages/point.png" class="img-point"></image>
    <image
      src="../../static/indexImages/right.png"
      class="img-right"
      v-show="isShow"
    ></image>
  </view>
</template>

<script>
export default {
  props: {
    textShow: String,
  },
  data() {
    return {
      // 控制红色圆点显示
      isShow: true,
    };
  },
  onLoad() {},
  methods: {
    lookUp() {
      if (this.textShow === "新朋友") {
        console.log("点击了查看好友申请页面");
      } else if (this.textShow === "群通知") {
        console.log("点击了查看群通知页面");
      }
    },
  },
};
</script>

<style scoped>
.apply-group-box {
  height: 100rpx;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.apply-group-box image {
  height: 70rpx;
  width: 70rpx;
}

.apply-group-tag {
  font-size: 35rpx;
  margin-left: 20rpx;
  font-family: Arial, Helvetica, sans-serif;
}

.img-point {
  position: relative;
  left: 280rpx;
}
</style>
