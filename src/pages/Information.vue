<template>
    <div class="Information">
        <div class="detailed">
            <div>
                <icon type="success"></icon>
            </div>
            <div>
                <p>RAV4</p>
            </div>
            <div>
                <span>紧凑型SUV</span>
                <span>5门</span>
                <span>2015款</span>
                <span>2.5L</span>
                <span>自动四驱豪华版</span>
            </div>
            <div>
                <span>白色</span>
                <span>京E-96542</span>
                <span>LDDGTUY3254664256</span>
            </div>

        </div>
        <div class="tab">
            <div v-for="(tab,index) in tabs" :key="index" :class="{active:tab.number == typeNumber}" @click="active(index)">车辆基本照片</div>
        </div>
        <divider>7张上传照片</divider>

        <div class="photo" v-if="isType">
            <flexbox>
                <flexbox-item>
                    <div class="flex-demo">1</div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo">2</div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo">3</div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo">3</div>
                </flexbox-item>
            </flexbox>
            <flexbox>
                <flexbox-item>
                    <div class="flex-demo">1</div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo">2</div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo">3</div>
                </flexbox-item>

            </flexbox>
        </div>
        <div class="damage" v-if="!isType">

            <group gutter="0">
                <div v-for="(item,index) in listCell" :key="index">
                    <cell :title="item.title" value="0/21" :is-link='true' :border-intent="true" :arrow-direction="item.showContent ? 'up' : 'down'" @click.native="item.showContent = !item.showContent">
                    </cell>
                    <template v-if="item.showContent">
                        <cell-box :border-intent="true" class="sub-item" :is-link='false' v-for="(child,index) in item.childrenList" :key="index">{{child.type}}</cell-box>
                    </template>
                </div>
                <!-- <cell :title="title" is-link :border-intent="false" :arrow-direction="showContent001 ? 'up' : 'down'" @click.native="showContent001 = !showContent001"></cell>
                <cell :title="title" is-link :border-intent="false" :arrow-direction="showContent001 ? 'up' : 'down'" @click.native="showContent001 = !showContent001"></cell>

                <template v-if="showContent001">
                    <cell-box :border-intent="false" class="sub-item" is-link>content 001</cell-box>
                    <cell-box class="sub-item" is-link>content 001</cell-box>
                    <cell-box class="sub-item" is-link>content 001</cell-box>
                </template>
                <template v-if="showContent001">
                    <cell-box :border-intent="false" class="sub-item" is-link>content 001</cell-box>
                    <cell-box class="sub-item" is-link>content 001</cell-box>
                    <cell-box class="sub-item" is-link>content 001</cell-box>
                </template> -->

            </group>

        </div>
        <div class="submit">
            <flexbox>
                <flexbox-item>
                    <div class="flex-demo">
                        <x-button>取消</x-button>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo">
                        <x-button type="warn" :show-loading='showContent001'>提交</x-button>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Information',
    data() {
        return {
            isType: true,
            typeNumber: 0,
            showContent001: false,
            title: '标题一',
            tabs: [
                {
                    tabName: '车辆基本照片',
                    number: 0
                },
                {
                    tabName: '车辆基本照片',
                    number: 1
                },
            ],
            listCell: [
                {
                    title: '外观',
                    showContent: false,
                    childrenList: [
                        {
                            type: '车门'
                        },
                        {
                            type: '车窗'
                        }
                    ]
                },
                {
                    title: '内饰',
                    showContent: false,
                    childrenList: [
                        {
                            type: '车坐'
                        },
                        {
                            type: '方向盘'
                        }
                    ]
                },
                {
                    title: '骨架',
                    showContent: false,
                    childrenList: [
                        {
                            type: '轮胎'
                        },
                        {
                            type: '发动机'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        active(i) {
            this.typeNumber = i
            if (i == 0) {
                this.isType = true
            } else {
                this.isType = false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.Information {
  .weui-btn {
    line-height: 30px;
    width: 90%;
  }
  .detailed {
    text-align: center;
    line-height: 1.7rem;
    background: #c9c9c9;
    color: #fff;
    padding: 1rem 0;
  }
  .tab {
    display: flex;
    margin: 1rem 0.5rem;
    div {
      flex: 1;
      text-align: center;
      padding: 10px 0;
    }
    .active {
      background: #c9c9c9;
    }
  }
  .damage {
    margin: 0 0.8rem;
    // border: 1px solid #ccc;
  }
  .submit {
    position: absolute;
    bottom: 20px;
    width: 100%;
  }
}
</style>



