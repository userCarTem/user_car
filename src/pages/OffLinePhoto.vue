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
      <div class="list-item" v-for="(item,index) in demo" :key="index" @click="information">
        <div>
          <div class="top">
            <span>{{item.Carmodel}}</span>
            <span>{{item.License}}</span>
            <span v-if="item.type == 1" class="type">待上传图片</span>
            <span v-else class="type submitted">待提交</span>

          </div>
          <div class="bottom">
            <span>{{item.vin}}</span>
            <span>{{item.color}}</span>
          </div>
        </div>
        <div>
          <img :src="item.select ?  select : noseleect" alt="" width="25px" @click.stop="selectImg(item,index)">
        </div>
      </div>
    </div>
    <div class="Total_selection">
      <div>
        <span>全选</span>
      </div>
      <div>
        <img :src="selectAll ? select : noseleect" alt="" @click="TotalSelection" width="25px">
      </div>
    </div>
    <div class="submit">
      <x-button type="warn" action-type="reset">
        <span v-if="this.$store.state.isCancelImg">提交</span>
        <span v-if="!this.$store.state.isCancelImg">删除</span>
        ({{number}})
      </x-button>
    </div>

  </div>
</template>
<script>
export default {
  name: 'OfflinePhoto',
  data() {
    return {
      noseleect: require('../assets/images/noselect_@2x.png'),
      select: require('../assets/images/selete_@2x.png'),
      selectAll: false,
      selectArray: [],
      set: new Set(),
      number: '0',
      demo: [
        {
          Carmodel: '雅阁',
          License: '京A123455',
          vin: 'v12345678945623',
          color: '蓝色',
          select: false,
          type: 1
        },
        {
          Carmodel: '雅阁',
          License: '京A123456',
          vin: 'v12345678945623',
          color: '蓝色',
          select: false,
          type: 1
        },
        {
          Carmodel: '雅阁',
          License: '京A123457',
          vin: 'v12345678945623',
          color: '蓝色',
          select: false,
          type: 0
        },
         {
          Carmodel: '雅阁',
          License: '京A123458',
          vin: 'v12345678945623',
          color: '蓝色',
          select: false,
          type: 1
        },
        {
          Carmodel: '雅阁',
          License: '京A123459',
          vin: 'v12345678945623',
          color: '蓝色',
          select: false,
          type: 1
        },
        {
          Carmodel: '雅阁',
          License: '京A1234510',
          vin: 'v12345678945623',
          color: '蓝色',
          select: false,
          type: 0
        },
         {
          Carmodel: '雅阁',
          License: '京A1234511',
          vin: 'v12345678945623',
          color: '蓝色',
          select: false,
          type: 1
        },
        {
          Carmodel: '雅阁',
          License: '京A1234512',
          vin: 'v12345678945623',
          color: '蓝色',
          select: false,
          type: 0
        },
      ],
    }
  },
  methods: {
    change(val, label) {
      console.log('change')
    },
    selectImg(item, i) {
      this.demo[i].select = !item.select
      //  this.demo[i].select 用来判断 添加还是删除
      if (this.demo[i].select) {
        this.selectArray.push(item.License)
        this.selectArray = [...new Set(this.selectArray)]
        this.selectArray.map((i) => {
          this.set.add(i)
        })
      } else {
        // 删除 set 中值
        this.set.delete(item.License)
        // 把 set 转化成数组 
        this.selectArray = Array.from(this.set)
      }
      // 判断数组 都不等于0 
      if (this.selectArray != 0) {
        if (this.selectArray.length == this.demo.length) {
          this.selectAll = true
        } else {
          this.selectAll = false
        }
      }
      this.number = this.selectArray.length
    },
    // 全选
    TotalSelection() {
      this.selectArray.length = 0
      if (this.selectAll === false) {
        this.demo.map((item) => {
          item.select = true
          this.set.add(item.License)
          this.selectArray.push(item.License)
        })
        this.selectAll = true;
        this.number = this.selectArray.length
      } else {
        this.demo.map((item) => {
          return item.select = false
        })
        this.set.clear()
        this.selectArray.length = 0
        this.selectAll = false;
        this.number = '0'
      }

    },
    information() {
      this.$router.push({path:'/information',query:{}})
    }
  },
}
</script>
<style lang="scss" scoped>
.off_line {
  .search {
    margin: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
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
      margin-bottom: 1rem;
      border-radius: 5px;
      .top {
        line-height: 2rem;
        font-size: 15px;
        span:nth-child(2) {
          margin-left: 0.8rem;
        }
      }
      .bottom {
        font-size: 0.8rem;
        span:nth-child(2) {
          margin-left: 0.8rem;
        }
      }
    }
  }
  .Total_selection {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    height: 46px;
    margin: 0 1rem;
  }
  .submit {
    margin: 0 1rem;
  }
  .type {
    padding: 3px;
    background: #dd524d;
    border-radius: 20px;
    color: #ffffff;
    font-size: 12px;
    margin-left: 10px;
  }
  .type.submitted {
    background: #4cd964;
  }
}
</style>
