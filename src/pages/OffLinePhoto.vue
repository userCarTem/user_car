<template>
    <div class="off_line">
        <div class="search">
            <x-input title="" placeholder="请输入关键词(VIN/车牌号)">
                <span slot="label">
                    <icon type="search"></icon>
                </span>
            </x-input>
        </div>

        <div class="list">
            <div class="list-item">
                <div>
                   <div class="top">
                       <span>雅阁</span>
                       <span>京A123456</span>
                   </div>
                   <div>
                       <span>v12345678945623</span>
                       <span>蓝色</span>
                   </div>
                </div>
                <div>
                
                    <check-icon v-for="(item,index) in demo1" :key='item.name' @click.native="change"> ({{ index }})</check-icon>
                    <!-- <check-icon :value.sync="demo1" @click.native="chang"> ({{ demo1 }})</check-icon> -->
                </div>
            </div>
        </div>
    

        <x-button type="warn" action-type="reset">
            <span v-if="this.$store.state.isCancelImg">提交</span>
            <span v-if="!this.$store.state.isCancelImg">删除</span>
            (0)
        </x-button>
    </div>
</template>
<script>
export default {
  name: 'OfflinePhoto',
  data() {
    return {
        demo1:[
            {
                name:''
            },
             {
                name:''
            }
        ]
    }
  },
  methods: {
    change(val, label) {
      console.log('change')
    },
  },
}
</script>
<style lang="scss" scoped>
.off_line {
  .search {
    .weui-icon-search {
      font-size: 19px;
    }
  }
  .list {
    margin: 0 1rem;
    div {
      background: #ffffff;
    }
    .list-item {
      display: flex;
      justify-content: space-between;
      padding: 1.2rem 1rem;
      align-items: center;
      color: #8f8f94;
      .top {
        line-height: 2rem;
      }
    }
  }
}
</style>
