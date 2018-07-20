<template>
    <div class="commodity">
        <div class="title">
            <div>名称</div>
            <div>价格</div>
        </div>
        <div class="edit">
            <div>
                {{listName}}
            </div>
            <div>
               {{listPrice}}
            </div>
            <div class="btnedit">
                <x-button mini type="warn" @click.native="editCancel">编辑</x-button>
            </div>
        </div>
        <div class="form" v-if="isForm">
            <x-input title="名称" placeholder="请输入名称" v-model="name" placeholder-align="right"></x-input>
            <x-input title="价格" placeholder="请输入价格" v-model="price" placeholder-align="right"></x-input>
            <flexbox>
                <flexbox-item>
                    <div class="flex-demo">
                        <x-button mini @click.native="editCancel">取消</x-button>

                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="flex-demo flex-left">
                        <x-button mini type="warn" @click.native="sure">确定</x-button>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>

    </div>
</template>
<script>
export default {
    name: 'commodity',
    data() {
        return {
            isForm: false,
            listName:'',
            listPrice:'',
            name:'',
            price:''
        }
    },
    methods: {
        editCancel() {
            this.isForm = ! this.isForm;
        },
        sure() {
            this.listName = this.name
            this.listPrice = this.price
            this.isForm = false
        }
    }
}
</script>
<style lang='scss' scoped>

.commodity {
  .weui-cell {
    padding: 0;
    margin-bottom: 1rem;
    line-height: 2rem;
    border-bottom: 1px solid #c8c7cc21;
  }
  .weui-cell:before {
    border: none;
  }
  .weui-btn:after {
    border: none;
  }
  .title {
    display: flex;
    padding: 0 0.8rem;
    div {
      flex: 1;
      line-height: 2rem;
      font-weight: 400;
    }
  }
  .edit {
    display: flex;
    background: #fff;
    border-top: 1px solid #c8c7cc;
    border-bottom: 1px solid #c8c7cc;
    position: relative;
    padding: 0.8rem;
    font-size: 15px;
    div {
      flex: 1;
      height: 17px;
    }
    .btnedit {
      position: absolute;
      right: 10px;
      top: 7px;
    }
  }
  .form {
    background: #fff;
    margin: 1rem 0.5rem 0 0.5rem;
    padding: 0.5rem;
  }
  .flex-demo {
    text-align: right;
  }
  .flex-demo.flex-left {
    text-align: left;
  }
}
</style>
