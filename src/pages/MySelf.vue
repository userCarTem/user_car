<template>
    <div class="my_self">
        <div class="mui-body">
            <img src="../assets/images/icon_nomal@3x.png" class="mui-center">
            <div class="">
                <p class="mui-font">安心二手车2.3.0</p>
            </div>

        </div>

        <ul :class="[index == 4 ? 'mui-table-view' : 'mui-table-view mui-table-view-chevron']" v-for="(btn,index) in buts" :key="index">
            <li class="mui-table-view-cell" :class="[index == 4 ? 'mar_top' : '']">
                <a id="" href="javascript:(0);" :class="[ index == 4 ? 'sign_out' : 'mui-navigate-right mui-bg-green']">
                    <span :class="btn.class" style="font-size:18px" v-if="index != 4"></span>
                    {{btn.name}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Myself',
    created() {
        console.info(this.$route);
    },
    data() {
        return {
            buts: [
                {
                    name: '商品化基础管理',
                    class: 'mui-icon-extra mui-icon-extra-class',
                    path: ''
                },
                {
                    name: '用户信息管理',
                    class: 'mui-icon iconfont icon-ren',
                    path: ''
                },
                {
                    name: '基础信息更新',
                    class: 'mui-icon iconfont icon-wenjianjia',
                    path: ''
                },
                {
                    name: '营业数据统计',
                    class: 'mui-icon iconfont icon-tubiaofenxi',
                    path: ''
                },
                {
                    name: '退出登录',
                    class: '',
                    path: ''
                },
            ]
        }
    }
}
</script>

 <style lang="scss" scoped>
.my_self {
  .mui-body {
    text-align: center;
    background: #fff;
    padding: 1rem 0;
  }
  .mui-table-view-chevron {
    margin-top: 1rem;
  }
  .sign_out {
    text-align: center;
    color: red;
    background-color: #c0c0c0;
  }
  .mar_top {
    margin-top: 1rem;
  }
}
</style>
