<template>
    <div class="nav">
       
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item " :class="{ 'mui-active': isType==1 }" href="">
                <nav-popver :data='AssessmentList' :isBlock='isAssessmentList'></nav-popver>
                <span class="mui-icon iconfont icon-qian"></span>
                <span class="mui-tab-label">评估报价</span>
            </a>
            <a class="mui-tab-item">
                 <nav-popver :data='sharingList' :isBlock='isSharingList'></nav-popver> 
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
      isType: '',
      isAssessmentList:false,
      isSharingList:true,
      AssessmentList:[
          {
              listName:'车辆评估',
              path:''
          },
          {
              listName:'车辆入库',
              path:''
          },
          {
              listName:'已入库车辆',
              path:''
          },
      ],
      sharingList:[
          {
              listName:'车源共享',
              path:''
          },
          {
              listName:'已关注车辆',
              path:''
          },
          {
              listName:'车源调整',
              path:''
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
}
</style>
