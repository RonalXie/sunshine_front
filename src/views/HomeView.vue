<template>
  <div class="home">
    <top-content/>
    <br>
    <a-row :gutter="24">
      <a-col :span="16">
        <article-list/>
      </a-col>
      <a-col :span="8">
        <sort-list-card/>
      </a-col>
    </a-row>

  </div>
</template>

<script>

import TopContent from "@/components/home/top/TopContent.vue";
import ArticleList from "@/components/home/content/ArticleList.vue";
import SortListCard from "@/components/article/SortListCard.vue";
export default {
  name: 'HomeView',
  components: {
    SortListCard,
    TopContent,
    ArticleList


  }
}
</script>
