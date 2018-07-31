<template>
    <div class="nav">
      
        <tabbar>
            <tabbar-item @on-item-click="tabBar(0)">
                <span slot="icon" class="mui-icon iconfont icon-qian">

                </span>
                <span slot="icon">
                    <nav-popver :data='AssessmentList' :isBlock='this.$store.state.isAssessmentList' @tab-item="tabBar"></nav-popver>
                </span>

                <span slot="label">评估报价</span>
            </tabbar-item>
            <tabbar-item @on-item-click="tabBar(1)">
                <span slot="icon" class="mui-icon iconfont icon-che">
                    <nav-popver :data='sharingList' :isBlock='this.$store.state.isSharingList' @tab-item="tabBar"></nav-popver>
                </span>
                <span slot="label">车源共享</span>
            </tabbar-item>
            <tabbar-item  @on-item-click="tabBar(2)">
                <span slot="icon" class="mui-icon mui-icon-camera"></span>
                <span slot="label">离线拍照</span>
            </tabbar-item>
            <tabbar-item badge="" @on-item-click="tabBar(3)">
                <span slot="icon" class=" mui-icon mui-icon-contact"></span>
                <span slot="label">我</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>
import NavPopver from '@/components/NavPopver'
export default {
    name: 'NavBar',
    created() {
        this.isType = this.$store.state.type
    },
    mounted() {

    },
    components: {
        NavPopver,
    },
    data() {
        return {
            myself: '',
            AssessmentList: [
                {
                    listName: '车辆评估',
                    path: '/vehicleEntry'
                },
                {
                    listName: '车辆入库',
                    path: '/notinstorage'
                },
                {
                    listName: '已入库车辆',
                    path: '/havebeenput'
                }
            ],
            sharingList: [
                {
                    listName: '车源共享',
                    path: ''
                },
                {
                    listName: '已关注车辆',
                    path: ''
                },
                {
                    listName: '车源调整',
                    path: '/adjustment'
                }
            ]
        }
    },
    methods: {
        Myself() {

        },
        tabBar(i) {
            this.$store.commit('AssessmentList', false)
            this.$store.commit('SharingList', false)
            if (i == 0) {
                this.$store.commit('AssessmentList', true)
            } else if (i == 1) {
                this.$store.commit('SharingList', true)
            } else if (i == 2) {
                this.$router.push('/offlinephoto')
            } else {
                this.$router.push('/myself')
            }

        }
    },
}
</script>
<style lang="scss" scoped>
@import '../../node_modules/vue-awesome-mui/mui/dist/css/mui.css';
.nav {
  a {
    color: #999999;
    .weui-tabbar__icon {
      height: 24px;
    }
  }
}
</style>
