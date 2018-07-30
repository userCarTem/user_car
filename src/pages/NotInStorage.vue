<template>
    <div class="notinstrong">
        <nav-bar-flex :data="list"></nav-bar-flex>
        <div class="search_content">
            <x-input title="" placeholder="评估书号，顾客姓名，VIN任意四位">
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
    name: 'notinstrong',
    components: {
        NavBarFlex
    },
    data() {
        return {
            list: [
                {
                    name: '品牌',
                    path: '/brandselection'
                },
                {
                    name: '车名',
                    path: '/carname'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.notinstrong {
  .search_content {
    background: #fff;
    margin: 1rem 0.5rem;
    border-radius: 5px;
    border: 1px solid #cccccc6b;
  }
}
</style>
