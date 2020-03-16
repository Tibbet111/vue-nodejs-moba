<template>
   <div class="card p-3 bg-white mt-3">
    <div class="card-header d-flex ai-center pb-3">
      <i class="iconfont " :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">{{ title }}</div>
      <i class="iconfont icon-menu"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      title:{type:String,required:true},
      icon:{type:String,required:true}
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
.card{
    border-bottom: 1px solid $border-color;
.card-header{
    border-bottom: 1px solid $border-color;
}   
}
</style>
