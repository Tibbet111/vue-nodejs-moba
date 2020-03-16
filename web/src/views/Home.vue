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
   <div class="py-2 d-flex jc-between" v-for="(news,i) in category.newsList" :key="i">
      <span>{{news.categoryName}}</span>
      <span class="px-1">|</span>
      <span class="flex-1">{{news.title}}</span>
      <span>{{news.date}}</span>
    </div>
    </template>
 </m-list-card>
 <m-card icon="yingxiong" title="英雄列表"></m-card>
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
export default {
  name: '',
  data() {
    return {
      newCats:[
        {
          name:'热门',
          newsList: new Array(5).fill(1).map(v =>({
              categoryName :'[公告]',
              title: '全服不停机公告',
              date: '06/01'
          }))
        },
        {
          name:'新闻',
          newsList: new Array(5).fill(1).map(v =>({
              categoryName :'[新闻]',
              title: '全服不停机公告',
              date: '06/01'
          }))
        },
        {
          name:'公告',
          newsList: new Array(5).fill(1).map(v =>({
              categoryName :'[公告]',
              title: '全服不停机公告',
              date: '06/01'
          }))
        },
        {
          name:'活动',
          newsList: new Array(5).fill(1).map(v =>({
              categoryName :'[公告]',
              title: '全服不停机公告',
              date: '06/01'
          }))
        },
        {
          name:'赛事',
          newsList: new Array(5).fill(1).map(v =>({
              categoryName :'[公告]',
              title: '全服不停机公告',
              date: '06/01'
          }))
        }
      ],
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

