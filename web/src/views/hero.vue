<template>
  <div class="page-hero" v-if="model">
    <!-- 头 -->
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
          <img src="../assets/1.png" alt="王者荣耀" height="30"> 
        <div class="px-2 flex-1">
          <span class="text-white">王者荣耀</span>
          <span class="ml-2 text-white">攻略站</span>
        </div>
        <router-link to="/" tag="div" class="text-white">更多英雄 &gt;</router-link>
    </div>
    <!-- 英雄信息 -->
    <div class="top" :style="{'background-image':`url(${model.banner})`}">
      <div class="info text-white p-3 d-flex flex-column h-100 jc-end">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.categories.map(v=>v.name).join('/')}}</div>
        <div class="d-flex jc-between">
          <div class="scores d-flex ai-center pt-2" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{model.scores.survive}}</span>
          </div>
          <router-link tab="span" class="text-gray fs-sm" to="/">
            皮肤:2&gt;
          </router-link>
        </div>
      </div>
    </div>
    <!-- 头部结束 -->
    <!-- 技能内容 -->
    <div>
      <!-- 菜单 -->
      <div class="px-3 bg-white">
        <div class="nav d-flex jc-around pt-3 pb-2 border-bottom">
          <div class="nav-item active">
            <div class="nav-link">英雄初识</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">进阶攻略</div>
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <swiper>
        <swiper-slide>
          <div>
            <!-- 按钮、技能 -->
            <div class="p-3 bg-white border-bottom">
              <div class="d-flex">
                <router-link tag="button" to="/" class="btn btn-lg  flex-1">
                  <i class="iconfont icon-Menu"></i>
                  英雄介绍视频
               </router-link>
               <router-link tag="button" to="/" class="btn btn-lg  flex-1 ml-2">
                  <i class="iconfont icon-Menu"></i>
                  一图识英雄
               </router-link>
              </div>
              <!-- 技能 -->
              <div class="skills mt-4">
                <div class="d-flex jc-around ai-center">
                  <img :src="item.icon" @click="currentSkillIndex=i"
                  v-for="(item,i) in model.skills" 
                  :key="item._id"
                  class="icon" :class="{active:currentSkillIndex===i}">
                </div>
                <div v-if="currentSkill">
                  <div class="d-flex pt-4 pb-3">
                    <h3 class="m-0">{{currentSkill.name}}</h3>
                    <span class="text-gray-1 ml-4">(冷却值：{{currentSkill.delay}}消耗：{{currentSkill.cost}})</span>
                  </div>
                  <p>{{currentSkill.description}}</p>
                  <div class="border-bottom"></div>
                  <p class="text-gray-1">{{currentSkill.tips}}</p>
                </div>
              </div>
            </div>

            <!-- 出装 -->
            <m-card plain icon="Menu" title="出装推荐" class="hero-items">
              <div class="fs-xl">顺风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div v-for="item in model.items1" :key="item._id">
                  <img :src="item.icon" class="icon">
                  <div class="fs-xs ">{{item.name}}</div>
                </div>
              </div>
              <div class="border-bottom my-3"></div>
              <div class="fs-xl ">逆风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div v-for="item in model.items2" :key="item._id">
                  <img :src="item.icon" class="icon">
                  <div class="fs-xs ">{{item.name}}</div>
                </div>
              </div>
            </m-card>
            <!-- 使用技巧 -->
            <m-card plain icon="Menu" title="使用技巧">
              <p class="m-0">{{model.usageTips}}</p>
            </m-card>
            <!--  对抗技巧  -->
            <m-card plain icon="Menu" title="对抗技巧">
              <p class="m-0">{{model.battleTips}}</p>
            </m-card>
            <!-- 团战思路 -->
            <m-card plain icon="Menu" title="团战思路">
              <p class="m-0">{{model.temaTips}}</p>
            </m-card>
            <!-- 英雄关系 -->
            <m-card plain icon="Menu" title="英雄关系">
              <div class="fs-xl">最佳搭档</div>
              <div v-for="item in model.partners" :key="item._id"
              class="d-flex pt-3 ai-center">
                <img :src="item.hero.avatar" height="50">
                <p class="flex-1 m-0 pl-2">{{item.description}}</p>
              </div>
              <div class="border-bottom mt-3"></div>
            </m-card>
          </div>
        </swiper-slide>
        <swiper-slide></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    id:{required:true}
  },
  data() {
    return {
      model:null,
      currentSkillIndex:0
    };
  },
  methods: {
    async fetch(){
      const res = await this.$http.get(`/heroes/${this.id}`)
      this.model = res.data
    }
  },
  computed: {
    //基于技能索引显示当前技能
    currentSkill(){
      return this.model.skills[this.currentSkillIndex]
    }
  },
  created() {
    this.fetch()
  },
};
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';
.page-hero{

  .top{
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
  .info{
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
    .scores{
      .badge{
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 0.9rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.6rem;
        border: 1px solid rgba(255,255,255,0.2);
      }
    }
  }
  .skills{
    img.icon{
      width: 70px;
      height: 70px;
      border: 3px solid map-get($map: $colors, $key: 'white'); 
      border-radius: 50%;
      &.active{
        border-color: map-get($map: $colors, $key: 'primary');
      }
    }
  }
  .hero-items{
    img.icon{
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
