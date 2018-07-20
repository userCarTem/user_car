<template>
    <div class="user">
        <div class="photo">
            <div class="img">
                <img src="../assets/images/user_@2x.png" alt="">
            </div>
            <div class="format">
                <p>请上传头像</p>
                <p>格式为jpg，不大于1M</p>
            </div>
        </div>

        <div class="form">
            <div>
                <x-input title="" placeholder="【必须】请输入姓名">
                    <img slot="label" style="padding-right:10px;display:block;" src="../assets/images/user_@2x.png" width="24" height="24">
                </x-input>
            </div>
            <div>
                <x-input title="" placeholder="【必须】请输入联系方式">
                    <img slot="label" style="padding-right:10px;display:block;" src="../assets/images/search_@2x.png" width="24" height="24">
                </x-input>
            </div>
        </div>

        <div class="submit">
            <x-button type="warn" action-type="reset">保存</x-button>

        </div>
    </div>
</template>
<script>
export default {
    name: 'usermanagement',
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.user {
  .photo {
    display: flex;
    padding: 2rem 1rem;
    .img {
      border: 1px solid #ccc;
      margin-right: 1rem;
    }
    .format {
      p {
        line-height: 1.5rem;
      }
    }
    .format p:nth-child(2) {
      color: #5d5757c7;
    }
  }
  .form {
    background: #fff;
    div {
      .weui-cell {
        border-bottom: 1px solid #ccc;
      }
    }
  }
  .submit{
      margin-top: 2rem;
  }
}
</style>

