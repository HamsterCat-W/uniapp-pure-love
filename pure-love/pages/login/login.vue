<template>
  <view class="login-box">
    <view class="login-box-logo">
      <view class="login-box-logo-img">
        <image src="../../static/img/logo.png"></image>
      </view>
      <view class="login-box-logo-tag"> Lucky </view>
    </view>

    <view class="login-box-form">
      <view class="input-group">
        <input
          type="text"
          v-model="loginData.email"
          placeholder="请输入邮箱/用户名"
        />
        <input
          password="true"
          v-model="loginData.password"
          placeholder="请输入密码"
        />
      </view>
      <view class="login-box-form-btn">
        <button type="default" @click="signUp">注册</button>
        <button type="primary" @click="signIn">登录</button>
      </view>
    </view>

    <view class="login-box-footer">
      <view class="forget-pass" @click="forgetPass"> 忘记密码 </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      console.log("signIn");
      console.log(this.loginData);
    },
    signUp() {
      console.log("signUp");
    },
    forgetPass() {
      console.log("forgetPass");
    },
  },
};
</script>

<style scoped>
.login-box {
  height: 100%;
  margin: 20rpx;
}

.login-box-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 400rpx;
  margin-bottom: 20rpx;
}

.login-box-logo-img image {
  height: 160rpx;
  width: 160rpx;
  border-radius: 50%;
}

.login-box-logo-tag {
  margin-left: 20rpx;
  font-size: 50rpx;
  font-weight: 600;
}

.input-group {
  text-align: center;
  height: 240rpx;
  padding: 50rpx;
}
.input-group input {
  text-align: center;
  height: 100rpx;
  margin-bottom: 20rpx;
  border: 1rpx solid #d2d0d0;
  border-radius: 60rpx;
}

.login-box-form-btn {
  display: flex;
  margin-top: 40rpx;
}

.login-box-form-btn button {
  width: 180rpx;
  border: 1rpx solid #d2d0d0;
  border-radius: 40rpx;
}

.login-box-footer {
  margin-top: 40rpx;
}
.forget-pass {
  font-size: 28rpx;
  text-decoration: underline;
  color: #d2d0d0;
  position: absolute;
  right: 30rpx;
}
</style>
