<template>
  <div>
      <div class="topbar bg-black py-2 px-3 d-flex ai-center">
          <img src="../assets/1.png" alt="王者荣耀" height="30"> 
        <div class="px-2 flex-1">
          <div class="text-white">王者荣耀</div>
          <div class="text-gray-1 fs-xxs">团队成就更多</div>
        </div>
        <button  class="btn bg-primary">立即下载</button>
      </div>
      <div class="bg-primary pt-3 pb-2">
          <div class="nav nav-inverse pb-1 jc-around">
            <div class="nav-item active" >
              <router-link tag="div" to="/">首页</router-link>
            </div>
            <div class="nav-item">
              <router-link tag="div" to="/">攻略中心</router-link>
            </div>
            <div class="nav-item">
              <router-link tag="div" to="/">赛事中心</router-link>
            </div>
          </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.topbar{
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
