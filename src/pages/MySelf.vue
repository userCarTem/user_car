<template>
    <div class="my_self">
        我的
    </div>
</template>

<script>
export default {
    name: 'Myself',
    created(){
        console.info(this.$route);
    },
    data() {
        return {

        }
    }
}
</script>

 <style lang="scss" scoped>
</style>
