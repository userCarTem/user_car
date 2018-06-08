<template>
    <div class="homepage">
        <header class="mui-bar mui-bar-nav">
            <h1 class="mui-title">首页</h1>
        </header>
            <router-view></router-view> 
        <!-- <span class=" mui-icon mui-icon-contact"></span> -->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item " :class="{ 'mui-active': true }" href="">
                <span class="mui-icon iconfont icon-qian"></span>
                <span class="mui-tab-label">评估报价</span>
            </a>
            <a class="mui-tab-item">
                <span class="mui-icon iconfont icon-che"></span>
                <span class="mui-tab-label">车源共享</span>
            </a>
            <a class="mui-tab-item">
                <span class="mui-icon mui-icon-camera"></span>
                <span class="mui-tab-label">离线拍照</span>
            </a>
            <a class="mui-tab-item" @click="Myself">
                <span class=" mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">我</span>
            </a>
        </nav>

    </div>
</template>
<script>

import { Tabbar, TabbarItem } from 'vux'
export default {
    name: 'HomePage',
    created() {
        
    },
    data() {
        return {

        }
    },
    components: {
        Tabbar,
        TabbarItem
    },
    methods: {
        Myself() {
            this.$router.push('/myself')
            console.info(
                this.$store.state.type
            )
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'vue-awesome-mui/mui/dist/css/mui.css';
@import '../commonicon/css/iconfont.css';
.homepage {
  height: 100%;
  width: 100%;
  margin-top: 44px;
  .mui-bar-tab .mui-tab-item .mui-icon {
    top: -2px;
  }
  .mui-bar.mui-bar-nav {
    background: #dd524d;
    .mui-title {
      color: white;
    }
  }
}
</style>
