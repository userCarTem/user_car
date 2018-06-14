<template>
    <div class="homepage">
        <header class="mui-bar mui-bar-nav">
            <span class="mui-icon iconfont icon-home mui-pull-right" style="color: rgba(255,255,255,.5);" @click="search" v-if="isMyself"></span>
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
    watch: {
        $route(to, from) {
            this.$store.commit('titleTyle', to.meta.title);
            if (this.$store.state.title == '我') {
                this.isMyself = true
            } else {
                this.isMyself = false
            }

        }
    },
    data() {
        return {
            data: 'ee',
            isMyself: false
        }
    },
    components: {
        Tabbar,
        TabbarItem,
        NavBar
    },
    methods: {
        search() {
            this.$router.push('/search')
        }
    }
}
</script>
<style lang="scss" scoped>
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
