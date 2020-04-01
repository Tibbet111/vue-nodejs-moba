<template>
  <div class="page-article" v-if="article">
    <div class="d-flex py-3 px-1 border-bottom ai-center">
      <div class="iconfont icon-iconback text-blue"></div>
      <strong class="flex-1 text-blue pl-2">{{article.title}}</strong>
      <div class="text-gray fs-xs">2020-3-31</div>
    </div>

    <!-- 内容 -->
    <div v-html="article.body" class="px-3 fs-lg content"></div>

  </div>
</template>

<script>
export default {
   props:{
        id:{required:true}
      },
  name: '',
  data() {
    return {
      article:null
    };
  },
  methods: {
    async getArticle(){
      const res = await this.$http.get(`/articles/${this.id}`)
      this.article = res.data
    }
  },
  created() {
    this.getArticle()
  },
  watch:{
    id:'getArticle'
  }
};
</script>

<style lang="scss">
.page-article{
  .icon-iconback{
    font-size: 1.5rem;
  }
  .content{  
    img{
      max-width: 100%;
      height: auto;
    }
    iframe{
      width: 100%;
      height: auto;
    }
  }
}
</style>
