<template>
    <div class="source">

        <card>
            <div slot="content" class="card-demo-flex card-demo-content01">
                <div class="border-r">
                    车名 >
                </div>
                <div class="border-r">

                    颜色 >
                </div>
                <div @click="showPlugin()">

                    入库编号 >
                </div>

            </div>
        </card>

        <checker class="dianj" v-model="demo5" default-item-class="demo5-item" selected-item-class="demo5-item-selected" radio-required>
            <checkeritem v-for="(item,index) in ypai" :key="index" :value="index">{{item.name}}</checkeritem>
        </checker>

        <div v-transfer-dom>
            <confirm v-model="show5" show-input placeholder="请输入入库编码" ref="confirm5" title="请输入入库编码" @on-cancel="onCancel" @on-confirm="onConfirm5" @on-show="onShow5" @on-hide="onHide">
            </confirm>
        </div>
    </div>

</template>
<script>
import { TransferDomDirective as TransferDom } from 'vux'
export default {
    name: 'adjustment',
    directives: {
        TransferDom
    },
    data() {
        return {

            ypai: [
                {
                    name: '已上拍',
                    path: ''
                },
                {
                    name: '已下拍',
                    path: ''
                }
            ],
            demo5: 1,
            show5: false,
        }
    },
    methods: {
        showPlugin() {
           
            this.show5 = true
        },
        onHide() {
            console.log('on hide')
        },
        onShow() {
            console.log('on show')
        },
        onShow5() {
            this.$refs.confirm5.setInputValue('')
        },
        onCancel() {
            console.log('on cancel')
        },
        onConfirm5(value) {
            this.$refs.confirm5.setInputValue('')
            this.$vux.toast.text('input value: ' + value)
        },

    }
}
</script>
<style lang="scss" scoped>
.source {
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 15px 0;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
  }
  .border-r {
    border-right: 2px solid #ccc;
  }
  .dianj {
    display: flex;
    div {
      flex: 1;
      text-align: center;
      padding: 10px 0;
    }
  }
  .demo5-item {
    text-align: center;
  }
  .demo5-item-selected {
    color: #ff4a00;
  }
}
</style>



