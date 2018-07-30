<template>
    <div class="rapid">
        <group gutter="0">
            <div class="title">车主信息</div>
            <x-input title="车主姓名" type="text" text-align="right" placeholder="【必须】请输入车主姓名"></x-input>
            <x-input title="联系方式" type="tel" text-align="right" placeholder="【必须】请输入车主联系电话"></x-input>
            <div class="title">车辆信息</div>
            <x-input title="车牌号码" type="text" text-align="right" placeholder="【必须】请输入车牌号码"></x-input>
            <x-input title="车架号(VIN)" type="text" text-align="right" placeholder="【必须】请输入17位VIN号码"></x-input>
            <x-input title="品牌" text-align="right" placeholder="【必须】请选择品牌" disabled></x-input>
            <x-input title="厂家" text-align="right" placeholder="【必须】请选择厂家"></x-input>
            <x-input title="车名" text-align="right" placeholder="【必须】请选择车名"></x-input>
            <!-- <datetime v-model="value1" @on-change="change" title="年份" @on-cancel="log('cancel')" @on-confirm="onConfirm" @on-hide="log('hide', $event)"></datetime> -->
            <x-input disabled title="年份" text-align="right" placeholder="【必须】请选择年份" v-model="dateval"  @click.native="showPlugin"></x-input>
            <x-input title="款式名称" text-align="right" placeholder="【必须】请选择款式名称"></x-input>
            <x-input title="表显里程" text-align="right" placeholder="【必须】请输入表显里程"></x-input>
            <cell></cell>
            <div class="next_btn">
                <x-button type="warn" action-type="reset">下一步</x-button>
            </div>

        </group>
    </div>
</template>

<script>
export default {
    name: 'rapidassessment',
    data() {
        return {
            value1: '2015-11-12',
            dateval:''
        }
    },
    methods: {
        // log(str1, str2 = '') {
        //     console.log(str1, str2)
        // },
        // onConfirm(val) {
        //     console.log('on-confirm arg', val)
        //     console.log('current value', this.value1)
        // },
        // change(value) {
        //     console.log('change', value)
        // },
        showPlugin() {
            const _this = this
            _this.$vux.datetime.show({
                cancelText: '取消',
                confirmText: '确定',
                format: 'YYYY-MM-DD',
                value: '2017-05-20 18',
                onConfirm(val) {
                    console.log('plugin confirm', val)
                    _this.dateval = val
                },
                onShow() {
                    console.log('plugin show')
                },
                onHide() {
                    console.log('plugin hide')
                }
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.rapid {
  margin: 1rem;
  .weui-cell {
    font-size: 12px;
  }
  .title {
    background: #ccc;
    line-height: 2rem;
    font-size: 14px;
    padding: 0 0.8rem;
  }
  .next_btn {
    margin: 0 1rem 1rem 1rem;
  }
}
</style>
