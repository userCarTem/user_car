<template>
    <div class="vehicle_entry">
        <div class="entry_list" v-for="(item,index) in entryList" :key="index">
            <p class="entry_name" @click="entryShow(item,index)">{{item.entryType}}</p>
            <div v-if="item.sort == 0">
                <div v-if="item.isType">
                    <group gutter="0">
                        <cell title="车牌号码" value="京A123456" :is-link='isLink'></cell>
                        <cell title="所有人" value="赵阳" :is-link='isLink'></cell>
                        <cell title="使用性质" value="非运营" :is-link='isLink'></cell>
                        <cell title="VIN" value="LDGDJUF123456789" :is-link='isLink'></cell>
                        <cell title="发动机号" value="C89746112" :is-link='isLink'></cell>
                        <cell :is-link='isLink'></cell>
                        <div class="assessment_btns">
                            <div>
                                <x-button mini type="warn">快速评估</x-button>
                            </div>
                            <div>
                                <x-button mini type="warn">一般评估</x-button>
                            </div>

                        </div>

                    </group>
                </div>

            </div>
            <div v-else-if="item.sort == 1">
                <div v-if="item.isType">
                    <group gutter="0">
                        <x-input title="VIN" v-model="VinNumber" text-align="right" placeholder="【必须】请输入17位VIN号码" @on-change="change"></x-input>
                        <cell></cell>
                        <div class="assessment_btns">
                            <div>
                                <x-button mini type="warn" :disabled="isBtns">快速评估</x-button>
                            </div>
                            <div>
                                <x-button mini type="warn" :disabled="isBtns">一般评估</x-button>
                            </div>

                        </div>
                    </group>
                </div>
            </div>
            <div v-else>
                <div v-if="item.isType">
                    <group gutter="0">
                        <div class="assessment_btns padding_t">
                            <div>
                                <x-button mini type="warn" @click.native="rapid">快速评估</x-button>
                            </div>
                            <div>
                                <x-button mini type="warn">一般评估</x-button>
                            </div>
                        </div>
                    </group>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'vehicleEntry',
    data() {
        return {
            isLink: false,
            isBtns: true,
            VinNumber:'',
            entryList: [
                {
                    entryType: '行驶证扫描',
                    imgUrl: '',
                    sort: 0,
                    isType: false
                },
                {
                    entryType: 'VIN录入检索',
                    imgUrl: '',
                    sort: 1,
                    isType: false
                },
                {
                    entryType: '手动选择车型',
                    imgUrl: '',
                    sort: 2,
                    isType: false
                }
            ]
        }
    },
    methods: {
        entryShow(item, i) {
            if (item.isType === false) {
                this.entryList.map((value, index) => {
                    this.entryList[index].isType = false
                })
            }
            this.entryList[i].isType = !item.isType
        },
        change(val) {
            if(val.length == 17){
                this.isBtns = false
            }else {
                this.isBtns = true
            }
        },
        rapid() {
            this.$router.push('/rapidassessment')
        }
    }
}
</script>

<style lang="scss" scoped>
.vehicle_entry {
  margin: 1rem 0.5rem;
  .entry_list {
    margin-bottom: 0.5rem;
    .entry_name {
      line-height: 3rem;
      background: #c0c0c0;
    }
    .weui-cell {
      font-size: 12px;
    }
    .assessment_btns {
      display: flex;
      padding: 0 3rem 1rem;
      justify-content: space-between;
      .weui-btn {
        margin-top: 0;
        // margin-right: 3rem;
      }
    }
    .assessment_btns.padding_t{
        padding-top: 1rem
    }
  }
}
</style>
