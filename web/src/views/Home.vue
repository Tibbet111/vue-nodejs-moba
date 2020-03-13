<template>
  <div>
    <swiper  ref="mySwiper" :options="swiperOption">
    <!-- slides -->
    <swiper-slide><img class="w-100" src="../assets/image/1.jpg"></swiper-slide>
    <swiper-slide><img class="w-100" src="../assets/image/2.jpg"></swiper-slide>
    <swiper-slide><img class="w-100" src="../assets/image/3.jpg"></swiper-slide>
    <div class="swiper-pagination pagination-home text-right px-3 pb-2"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      swiperOption:{
        pagination: {
            el: '.pagination-home',
          },
          loop:true,
          speed:500,
          autoplay : {
            delay:3000
          },
          
      }
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
.pagination-home{
  .swiper-pagination-bullet{
    opacity: 1;
    background: #fff;
    border-radius: 0.1538rem;
      &.swiper-pagination-bullet-active{
        background: map-get($map: $colors, $key: 'info');
      }
  } 
}
</style>

