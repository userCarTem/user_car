<template>
    <div class="nav">
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item " :class="{ 'mui-active': isType==1 }" href="">
                <span class="mui-icon iconfont icon-qian"></span>
                <span class="mui-tab-label">评估报价</span>
            </a>
            <a class="mui-tab-item">
                <span class="mui-icon iconfont icon-che"></span>
                <span class="mui-tab-label">车源共享</span>
            </a>
            <a class="mui-tab-item" @click="myrrr">
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
export default {
    name: 'NavBar',
    props: {
        data:{

        }
    },
    created() {
        this.isType = this.$store.state.type
    },
    data() {
        return {
            isType: ''
        }
    },
    methods: {
        Myself() {
            this.$router.push('/myself')
            this.$store.commit('titleTyle', '我的')
        },
        myrrr() {
            this.$emit('mo', 'ww')
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'vue-awesome-mui/mui/dist/css/mui.css';
@import '../commonicon/css/iconfont.css';
.nav {
  .mui-bar-tab .mui-tab-item .mui-icon {
    top: -2px;
  }
}
</style>
