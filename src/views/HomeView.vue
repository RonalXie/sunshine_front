<template>
  <div class="home">
    <a-row :gutter="16">
      <a-col :span="17">
        <carousel-card/>
        <br>
        <tab-card/>
        <br>
        <article-list/>
      </a-col>
      <a-col :span="7" style="position: sticky;top: 80px">
        <user-card/>
        <br>
        <sort-list-card/>
        <br>
        <div class="box">

        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>

import CarouselCard from "@/components/home/top/CarouselCard.vue";
import ArticleList from "@/components/home/content/ArticleList.vue";
import SortListCard from "@/components/article/SortListCard.vue";
import UserCard from "@/components/home/top/UserCard.vue";
import TabCard from "@/components/home/top/TabCard.vue";
export default {
  name: 'HomeView',
  components: {
    TabCard,
    UserCard,
    SortListCard,
    ArticleList,
    CarouselCard


  }
}
</script>
