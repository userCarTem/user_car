<template>
    <div class="homepage" @click="homeindex">
        <view-box ref="viewBox">
            <div style="height:46px"></div>
            <x-header :left-options={showBack:false}>{{this.$store.state.title}}
                <a slot="right" class="icon" v-if="isMyself"></a>
                <a slot="left" class="icon_black" v-if="isReturn" @click="goBack"></a>
                <a slot="left" class="icon_delete" v-if="isDelete" @click="cancelImg">
                    <img src="../assets/images/delete_@2x.png" alt="" width="25px" v-if="isCancelImg">
                    <p class="cancel" v-if="!isCancelImg">取消</p>
                </a>
                <a slot="right" class="cancel" v-if="isVehicleEntry">历史车辆</a>
                <a slot="left" class="icon_black" v-if="isFastGeneral" @click="FastGeneral"></a>
            </x-header>
            <router-view></router-view>
            <nav-bar v-if="isNavTar"></nav-bar>
        </view-box>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar'
export default {
    name: 'HomePage',
    created() {
        this.titleType()

    },
    mounted() {


    },
    watch: {
        $route(to, from) {
            this.$store.commit('titleTyle', to.meta.title);
            this.titleType()
        }
    },
    data() {
        return {
            isMyself: false, //返回主页图标
            isReturn: false, //返回按钮图标
            isNavTar: true,  //判断底部导航显隐
            isDelete: false,  //删除图标
            isCancelImg: true, //判断显示删除图标 还是 取消 
            isVehicleEntry: false, //判断 历史车辆
            isFastGeneral: false // 快速评估 返回按钮
        }
    },
    components: {
        NavBar
    },
    methods: {
        homeindex() {
            this.$store.commit('AssessmentList', false)
            this.$store.commit('SharingList', false)
        },
        search() {
            this.$router.push('/search')
        },
        titleType() {
            this.isMyself = false
            this.isReturn = false
            this.isNavTar = true
            this.isDelete = false
            this.isCancelImg = true
            this.isVehicleEntry = false
            this.$store.state.isCancelImg = true
            this.isFastGeneral = false
            if (this.$store.state.title == '我' || this.$store.state.title == '未入库车辆查询') {
                this.isMyself = true
            } else if (this.$store.state.title == '商品化信息') {
                this.isReturn = true
            } else if (this.$store.state.title == '用户信息管理' || this.$store.state.title == '信息确认') {
                this.isNavTar = false
                this.isReturn = true
            } else if (this.$store.state.title == '车辆信息') {
                this.isMyself = true
                this.isDelete = true
            } else if (this.$store.state.title == '已入库车辆' || this.$store.state.title == '品牌选择') {
                this.isMyself = true
                this.isReturn = true
            } else if (this.$store.state.title == '厂家选择' || this.$store.state.title == '车名选择') {
                this.isNavTar = false
                this.isMyself = true
                this.isReturn = true
            } else if (this.$store.state.title == '车辆信息录入') {
                this.isReturn = true
                this.isVehicleEntry = true
            } else if (this.$store.state.title == "简易基本信息") {
                this.isFastGeneral = true
                this.isMyself = true
            }
        },
        cancelImg() {
            this.isCancelImg = !this.isCancelImg
            this.$store.state.isCancelImg = !this.$store.state.isCancelImg
        },
        goBack() {
            this.$router.back()
        },
        FastGeneral() {
            console.info("快速评估");
        }
    }
}
</script>
<style lang="scss" scoped>
// @import '../../node_modules/vue-awesome-mui/mui/dist/css/mui.css';
.homepage {
  height: 100%;
  width: 100%;
  //   margin-top: 44px;
  .vux-header {
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 100;
  }
  .weui-tab {
    //   padding-top: 46px;
  }
  .icon {
    width: 22px;
    height: 22px;
    background: url('../assets/icon_return.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: -3px;
  }
  .icon_black {
    width: 10px;
    height: 16px;
    background: url('../assets/icon_black.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: 1px;
  }
  .icon_delete {
    position: relative;
    top: -3px;
  }
  .cancel {
    color: #fff;
  }
  .mui-bar.mui-bar-nav {
    background: #dd524d;
    .mui-title {
      color: white;
    }
  }
}
</style>
