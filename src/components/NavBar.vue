<template>
    <div class="nav">
       
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item " :class="{ 'mui-active': isType== 0 }" href="#Popover_0">
                <!-- <nav-popver :data='AssessmentList' :isBlock='isAssessmentList'></nav-popver> -->
                <span class="mui-icon iconfont icon-qian"></span>
                <span class="mui-tab-label">评估报价</span>
            </a>
            <a class="mui-tab-item" href="#Popover_1">
                <!-- <nav-popver :data='sharingList' :isBlock='isSharingList'></nav-popver>  -->
                <span class="mui-icon iconfont icon-che"></span>
                <span class="mui-tab-label">车源共享</span>
            </a>
            <a class="mui-tab-item" href="#Popover_2">
                <span class="mui-icon mui-icon-camera"></span>
                <span class="mui-tab-label">离线拍照</span>
            </a>
            <a class="mui-tab-item" @click="Myself" href="#Popover_3">
                <span class=" mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">我</span>
            </a>
        </nav>
        <div :id="'Popover_'+ index" class="mui-popover mui-bar-popover" v-for="(Assessment,index) in AssessmentList" :key="index">
            <div class="mui-popover-arrow"></div>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell" v-for="Assess in Assessment" :key="Assess.listName">
                    <a href="/">{{Assess.listName}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import NavPopver from '@/components/NavPopver'
export default {
    name: 'NavBar',
    created() {
        this.isType = this.$store.state.type
    },
    components: {
        NavPopver,
    },
    data() {
        return {
            isType: '0',
            isAssessmentList: false,
            isSharingList: true,
            AssessmentList: [
                [
                      {
                    listName: '车辆评估',
                    path: ''
                },
                {
                    listName: '车辆入库',
                    path: ''
                },
                {
                    listName: '已入库车辆',
                    path: ''
                },
                ],
              [
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
                    path: ''
                }
            ],
            [],
            []
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
                    path: ''
                }
            ]
        }
    },
    methods: {
        Myself() {
            this.$router.push('/myself')
        },
    },
}
</script>
<style lang="scss" scoped>
.nav {
  .mui-bar-tab .mui-tab-item .mui-icon {
    top: -2px;
  }
  .mui-tab-item {
    //   position: relative;
  }
  .mui-bar-popover {
    width: 40%;
  }
  .mui-popover.mui-bar-popover .mui-table-view{
      width: 130px;
  }
}
</style>
