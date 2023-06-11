<template>
  <div>
      <a-row :gutter="16">
<!--          <a-col :span="2">-->
<!--              <a-affix :offset-top="80">-->

<!--                <left-util-card/>-->
<!--              </a-affix>-->
<!--          </a-col>-->
          <a-col :span="17" >
              <article-content-card/>
          </a-col>
          <a-col :span="7" style="position: sticky;top: 76px">

              <user-card/>
                  <br>
<!--            <a-affix :offset-top="80">-->
              <sort-list-card/>
<!--            </a-affix>-->
          </a-col>
      </a-row>
  </div>
</template>

<script>
import ArticleContentCard from "@/components/article/ArticleContentCard.vue";
import UserCard from "@/components/home/top/UserCard.vue";
import SortListCard from "@/components/article/SortListCard.vue";

export default {
    name: "ArticleView",
    components: {SortListCard, ArticleContentCard, UserCard},
  created() {
    let id = this.$route.params.id;
    if (id===null||id===undefined){
      this.$router.push("/404")
    }
    // selectArticleById(id).then((res => {
    //   this.articleData = res.data.record
      // this.renderMarkdown(this.articleData.content)
    // }))


  },

}
</script>

<style scoped>

</style>
