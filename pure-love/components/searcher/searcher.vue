<template>
  <!-- 搜索按钮 -->
  <view
    :class="{
      'seach-box-grey': backg == 'white',
      'seach-box-white': backg == 'grey',
    }"
  >
    <input
      type="button"
      :class="{
        'search-input-white': backg == 'white',
        'search-input-grey': backg == 'grey',
      }"
      placeholder="搜索"
      @click="msgSearch"
    />
    <image src="../../static/indexImages/search.png"></image>
  </view>
</template>

<script>
export default {
  props: {
    backg: String,
  },
  data() {
    return {
      msg: "",
    };
  },

  methods: {
    // 按钮点击事件
    msgSearch() {
      console.log("点击了搜索框");
    },
  },
};
</script>

<style scoped>
.seach-box-grey {
  height: 100rpx;
  width: 100%;
  background-color: #edf0f4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-input-white {
  background-color: #fffffb;
  height: 60rpx;
  width: 90%;
  border-radius: 25px;
  border: 1rpx solid #dcdcdc;
  text-align: center;
}

.seach-box-white {
  height: 100rpx;
  width: 100%;
  background-color: #fffffb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-input-grey {
  background-color: #edf0f4;
  height: 60rpx;
  width: 90%;
  border-radius: 25px;
  border: 1rpx solid #dcdcdc;
  text-align: center;
}

image {
  position: absolute;
  left: 310rpx;
  width: 40rpx;
  height: 40rpx;
}
.uni-input-placeholder {
  color: #8a8c8e;
  font-size: 30rpx;
  font-weight: 100;
}
</style>