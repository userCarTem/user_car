<template>
  <div class="popver" v-if="isBlock">
    <ul>
      <li v-for="(item,index) in data" :key="index" :class="[index != data.length-1 ? 'active' : '']" @click.stop="linkUrl(5)">{{item.listName}}</li>
    </ul>
    <div class="mui-popover-arrow" style=""></div>
  </div>
</template>
<script>
export default {
  name: 'popver',
  props: ['data', 'isBlock'],
  created() {
   
  },
  data() {
    return {
      list: [],
    }
  },
  methods: {
    linkUrl(i) {
      this.$emit('tab-item')
    }
  }
}
</script>
 <style lang="scss" scoped>
.popver {
  width: 10rem;
  padding: 0 1rem;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  bottom: 45px;
  left: -30px;
  color: rgba(17, 1, 1, 0.719);
  font-size: 1rem;

  li {
    padding: 0.5rem;
  }
  .active {
    border-bottom: 1px solid #ccc;
  }
  .mui-popover-arrow {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 26px;
    height: 26px;
    content: ' ';
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    border-radius: 3px;
    background: #fff;
    z-index: -1;
    left: 37.5px;
  }
}
</style>
