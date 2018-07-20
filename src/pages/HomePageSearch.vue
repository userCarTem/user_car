<template>
    <div class="search">
        <div class="mui-input-row mui-search mui-active">
            <input type="search" class="mui-input-clear" placeholder="评估书号，顾客姓名，VIN任意四位">
            <span class="mui-icon mui-icon-clear mui-hidden"></span>
            <span class="mui-placeholder">
                <span class="mui-icon mui-icon-search"></span>
                <span></span>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'search',
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../node_modules/vue-awesome-mui/mui/dist/css/mui.css';
.search {
    .mui-search .mui-placeholder{
        text-align: left;
        display:none;
    }
    input[type='search']{
        text-align: left
    }
}
</style>
