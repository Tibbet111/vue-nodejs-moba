<template>
  <m-card :icon="icon" :title="title">
   <div class="nav jc-between">
        <div class="nav-item" :class="{active: active === index}"
            v-for="(category,index) in categories" :key="index"
         @click="active=index">
          <div class="nav-link">{{category.name}}</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper>
        <swiper-slide v-for="(item,i) in categories" :key="i">
          <slot name="items" :category="item">
              
          </slot>
        </swiper-slide>
      </swiper>
      </div>
 </m-card>
</template>

<script>
export default {
  name: '',
  props:{
      icon : {type:String,required:true},
      title: {type:String,required:true},
      categories: {type:Array,required:true}
  },
  data() {
    return {
        active : 0
    };
  },
  methods: {},
};
</script>

<style scoped>

</style>
