<template>
    <div class="homepage">
        <header class="mui-bar mui-bar-nav">
            <h1 class="mui-title">{{this.$store.state.title}}</h1>
        </header>
        <router-view></router-view>
        <!-- <span class=" mui-icon mui-icon-contact"></span> -->
         <nav-bar></nav-bar>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import { Tabbar, TabbarItem } from 'vux'
export default {
    name: 'HomePage',
    created() {
        console.info(this.$route);
        console.info(this.$store.state);
    },
    data() {
        return {
             data:'ee'
        }
    },
    components: {
        Tabbar,
        TabbarItem,
        NavBar
    },
    methods: {
      
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
  .mui-bar.mui-bar-nav {
    background: #dd524d;
    .mui-title {
      color: white;
    }
  }
}
</style>
