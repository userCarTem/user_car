<template>
    <div class="popver" v-if="isBlock">
        <ul>
            <li v-for="(item,index) in data" :key="index" :class="[index != data.length-1 ? 'active' : '']">{{item.listName}}</li>      
        </ul>
        <div class="mui-popover-arrow" style=""></div>
    </div>
</template>
<script>
export default {
  name: 'popver',
  props:['data','isBlock'],
  data() {
    return {
      list: [
        {
          name: 'wwwww',
        },
        {
          name: 'wwwww',
        },
        {
          name: 'wwwww',
        },
         {
          name: 'wwwww',
        },
         {
          name: 'wwwww',
        },
         {
          name: 'wwwww',
        },
      ],
    }
  },
}
</script>
 <style lang="scss" scoped>
.popver {
  width: 10rem;
  padding: 0 1rem;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  bottom: 64px;
  color: rgba(17, 1, 1, 0.719);

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
