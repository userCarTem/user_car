<template>
  <div class="login">
    <div class="img">
      <img src="../assets/images/icon_nomal@3x.png" alt="" @click="HomePage">
    </div>
    <!-- <group> -->
    <flexbox :gutter="0">
      <flexbox-item :span="1/12">
        <img src="../assets/images/user_@2x.png" alt="" width="25px">
      </flexbox-item>
      <flexbox-item :span="5/6">
        <x-input label-width="4rem" placeholder="请输入你的账号" style=""></x-input>
      </flexbox-item>
    </flexbox>
    <flexbox :gutter="0">
      <flexbox-item :span="1/12">
        <img src="../assets/images/password_@2x.png" alt="" width="25px">
      </flexbox-item>
      <flexbox-item :span="5/6">
        <x-input label-width="4rem" placeholder="请输入你的密码"></x-input>
      </flexbox-item>
    </flexbox>

    <!-- </group> -->
    <div class="login_btn">
      <x-button type="warn" style=" border-radius: 99px" @click.native="HomePage">登录</x-button>
      <x-button plain type="primary" class="custom-primary-red">离线拍照</x-button>
    </div>

  </div>
</template>

<script>
import { XButton, XInput, Group, Flexbox, FlexboxItem, Divider } from 'vux'
export default {
  name: 'Login',
  components: {
    XButton,
    XInput,
    Group,
    Flexbox,
    FlexboxItem,
    Divider
  },
  data() {
    return {
      name: '登录',
    }
  },
  methods: {
    HomePage() {
      this.$router.push('/myself')
    }
  }
}
</script>

<style lang='scss' scoped>
.login {
    width: 80%;
    margin: 0 auto;
    .img {
        margin-top: 4rem;
        margin-bottom: 2rem;
    }
    .login_btn {
        margin-top: 1rem;
    }
    .weui-cell {
        border-bottom: 1px solid #ccc;
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
