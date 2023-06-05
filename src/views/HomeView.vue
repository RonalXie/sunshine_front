<template>
  <div class="home">
    <top-content/>
    <br>
    <article-card-list/>

  </div>
</template>

<script>

import TopContent from "@/components/home/top/TopContent.vue";
import ArticleCardList from "@/components/home/content/ArticleCardList.vue";

export default {
  name: 'HomeView',
  components: {
    TopContent,
    ArticleCardList

  }
}
</script>
