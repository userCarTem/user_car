<template>
    <div class="havebeen">
        
        <nav-bar-flex :data="list"></nav-bar-flex>
        <div class="search_content">
            <x-input title="" placeholder="请输入完整入库书号或VIN后7位">
                <span slot="label">
                    <icon type="search"></icon>
                </span>
            </x-input>
        </div>
    </div>
</template>
<script>
import NavBarFlex from '@/components/NavBarFlex'
export default {
    name: 'havebeenput',
    components: {
        NavBarFlex
    },
    data() {
        return {
            list:[
                {
                    name:'厂家 >',
                    path:'/manufactor'
                },
                {
                    name:'车名 >',
                    path:'/carname'
                }
            ]
        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.havebeen {
  .flex-demo {
    padding: 10px 0;
    background: #fff;
    text-align: center;
    .border_r {
      border-right: 2px solid #ccc;
    }
  }
  .vux-flexbox-item {
    margin-left: 0 !important;
  }
  .search_content {
    background: #fff;
    margin: 1rem 0.5rem;
    border-radius: 5px;
    border: 1px solid #cccccc6b;
  }
}
</style>
