<template>
    <div class="navbarflex">
        <flexbox>
            <flexbox-item v-for="(item,index) in data" :key="index">
                <div class="flex-demo" @click="factoryCar(item.path)">
                    <p :class="{border_r : index == 0}">{{item.name}}</p>
                </div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
export default {
    name: 'navbarflex',
    props: ['data'],
    data() {
        return {

        }
    },
    methods: {
        factoryCar(i) {
            this.$router.push(i)
        }
    }
}
</script>

<style lang="scss" scoped>
.navbarflex {
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
}
</style>
