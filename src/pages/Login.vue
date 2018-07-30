<template>
  <div class="login">
    <div class="img">
      <img src="../assets/images/icon_nomal@3x.png" alt="" @click="HomePage">
    </div>
    <!-- <group> -->
    <div class="form">
      <flexbox :gutter="0">
        <flexbox-item :span="1/12">
          <img src="../assets/images/user_@2x.png" alt="" width="25px">
        </flexbox-item>
        <flexbox-item :span="5/6">
          <div class="input_text">
            <input type="text" placeholder="请输入你的账号">
            <!-- <von-radio ></von-radio> -->
          </div>
          <!-- <x-input label-width="4rem" placeholder="请输入你的账号" style=" margin-bottom: 0;"></x-input> -->
        </flexbox-item>
      </flexbox>
      <flexbox :gutter="0">
        <flexbox-item :span="1/12">
          <img src="../assets/images/password_@2x.png" alt="" width="25px">
        </flexbox-item>
        <flexbox-item :span="5/6">
          <div class="input_text">
            <input type="text" placeholder="请输入你的密码">
          </div>
          <!-- <x-input label-width="4rem" placeholder="请输入你的密码"></x-input> -->
        </flexbox-item>
      </flexbox>
    </div>

    <!-- </group> -->
    <div class="login_btn">
      <x-button type="warn" style=" border-radius: 99px" @click.native="HomePage">登录</x-button>
      <x-button plain type="primary" class="custom-primary-red">离线拍照</x-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      name: '登录',
    }
  },
  methods: {
    HomePage() {
      this.$router.push('/search')
      this.$store.commit('titleTyle', '首页')
    },
  },
}
</script>

<style lang='scss' scoped>
.login {
  height: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  background: #fff;
  .vux-flexbox {
    margin-bottom: 0.8rem;
  }
  .form {
    width: 85%;
    margin: 0 auto;
  }
  .img {
    text-align: center;
    padding-top: 4rem;
    margin-bottom: 2rem;
  }
  input[type='text'] {
    margin-bottom: 0;
    border: none;
    font-size: 0.9rem;
  }
  .weui-btn {
    font-size: 1rem;
  }
  .login_btn {
    margin-top: 2rem;
  }
  .input_text {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 0.5rem;
  }
  .weui-cell:before {
    border-top: none;
    border-bottom: 1px solid #ccc;
  }
  .custom-primary-red {
    border-radius: 99px !important;
    border-color: #ce3c39 !important;
    color: #ce3c39 !important;
    &:active {
      border-color: rgba(206, 60, 57, 0.6) !important;
      color: rgba(206, 60, 57, 0.6) !important;
      background-color: transparent;
    }
  }
}
</style>
