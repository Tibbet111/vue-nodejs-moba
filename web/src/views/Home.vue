<template>
  <div>
    <swiper  ref="mySwiper" :options="swiperOption">
    <!-- slides -->
    <swiper-slide><img class="w-100" src="../assets/image/1.jpg"></swiper-slide>
    <swiper-slide><img class="w-100" src="../assets/image/2.jpg"></swiper-slide>
    <swiper-slide><img class="w-100" src="../assets/image/3.jpg"></swiper-slide>
    <swiper-slide><img class="w-100" src="../assets/image/4.jpg"></swiper-slide>
    <swiper-slide><img class="w-100" src="../assets/image/5.jpg"></swiper-slide>

    <div class="swiper-pagination pagination-home text-right px-3 pb-2"  slot="pagination"></div>
  </swiper>
  <!-- end of swiper -->
  <div class="nav-icons bg-white mt-3  pt-3 text-center text-dark-1">
    <div class="d-flex flex-wrap">
      <div class="nav-item mb-3" 
    v-for="n in 10" :key="n">
      <i class="sprite sprite-news"></i>
      <div class="py-2">爆料站</div>
      </div>
    </div>
    <div class="bg-light py-2 fs-sm d-flex ai-center jc-center">
      <i class="sprite sprite-arrow mr-1"></i>
      <span>收起</span>
    </div>
  </div>
  <!-- end of menu -->
 <m-list-card icon="Menu" title="新闻资讯" :categories="newCats">
   <template #items="{category}">
   <div class="py-2 fs-lg d-flex jc-between" v-for="(news,i) in category.newsList" :key="i">
      <span class="text-info">[{{news.categoryName}}]</span>
      <span class="px-1">|</span>
      <span class="flex-1 text-dark-1 text-ellipsis">{{news.title}}</span>
      <span class="text-gray-1 fs-sm">{{news.createdAt | date}}</span>
    </div>
    </template>
 </m-list-card>
 <!-- 英雄列表 -->
 <m-list-card icon="yingxiong" title="英雄列表" :categories="heroCats">
   <template #items="{category}">
     <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
       <div class="p-2 text-center" style="width:20%;"
       v-for="(hero,i) in category.heroList" :key="i">
        <img :src="hero.avatar" class="w-100">
      <div>{{hero.name}}</div>
    </div>
     </div>
    </template>
 </m-list-card>
  <p>555</p>
  <p>555</p>
  <p>555</p>
  <p>555</p>
  <p>555</p>
  <p>555</p>
  <p>555</p>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters:{
    date(val){
      return dayjs(val).format('MM/DD')
    }
  },
  name: 'home',
  data() {
    return {
      newCats:[],
      heroCats:[],
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
  methods: {
    async fetchNewsCats(){
    const res = await this.$http.get('/news/list')
    this.newCats = res.data
    },
    async fetchHeroCats(){
      const res = await this.$http.get('/heroes/list')
      this.heroCats =res.data
    }
  },
  created() {
    this.fetchNewsCats()
    this.fetchHeroCats()
  },
  
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
.nav-icons{
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item{
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n+1){
      border-left: none;
    }
  }
}
</style>

