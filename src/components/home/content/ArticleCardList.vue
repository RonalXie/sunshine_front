<template>
  <div>
    <div class="box" style="padding: 12px">
        <a-button shape="round">最近更新</a-button>
    </div>
    <a-row :gutter="24">
      <a-col :span="6" v-for="(item,index) in this.articlePage" :key="index">
        <div class="box p-0 is-relative" style="overflow: hidden;margin: 12px 0">
          <div class="category-content">
            {{item.category.name}}
          </div>
          <div style="width: 100%;height: 200px;overflow: hidden;">
            <router-link to="">
              <img
                  class="image-scale"
                  :src="item.cover"
                  style="object-fit: cover;height: 100%;width: 100%"
              />
            </router-link>
          </div>
          <div style="padding:16px">
            <router-link :to="{path: '/article/'+item.id}" target="_blank"><span style="font-size: large;color: #4a4a4a" class="ellipsis is-ellipsis-1">{{item.title}}</span></router-link>

            <p class="has-text-grey ellipsis is-ellipsis-2" style="height: 40px;font-size: small">
              {{item.summary}}
            </p>
            <div class="is-flex has-text-grey" style="justify-content: space-between;align-items: center">
              <!--              <div class="is-flex is-align-items-center">-->
              <!--                <div style="width: 32px;height: 32px;border-radius: 50%;overflow: hidden">-->
              <!--                  <img-->
              <!--                      style="object-fit: cover;width: 100%;height: 100%"-->
              <!--                      src="https://cdn.dribbble.com/userupload/6730422/file/original-83442b9b8942f5eb628361c564f2282e.jpg?compress=1&resize=400x300&vertical=top"-->
              <!--                      alt=""-->
              <!--                  />-->
              <!--                </div>-->
              <!--                &nbsp;-->
              <div style="font-size: small">
                <a-icon type="calendar"></a-icon>&nbsp;
                {{item.createTime}}
              </div>
              <!--              </div>-->
              <div style="font-size: small">
                <a-icon type="eye"></a-icon>&nbsp;
                {{item.views}}
              </div>
            </div>
          </div>

        </div>
      </a-col>
    </a-row>

  </div>
</template>
<script>
import {selectPage} from "@/api/article";

export default {
  data() {
    return {
      loading: true,
      articlePage: [],
      current: 1,
      total: 0,
      actions: [
        {type: 'eye', text: '156'},
        {type: 'message', text: '2'},
      ],
    };
  },
  methods: {
    goArticlePage(articleSid) {
      this.$router.push({
        name: "article",
        params: {
          sid: articleSid
        }
      })
    },
    handlePageChange() {
      this.loading = true
      this.current++;
      if (this.current>Math.ceil(this.total/8)){
        return;
      }
      console.log(this.current)
      selectPage({
        pageNum: this.current,
        pageSize: 8
      }).then(res => {
        this.articlePage.push(...res.data.record.dataList)
        this.total=res.data.record.total
        this.loading = false
      })
    }
  },
  created() {
    // setTimeout(()=>{
    //   this.loading=!this.loading
    // },3000)
    //
    selectPage({
      pageNum: 1,
      pageSize: 8,
    }).then(res => {
      this.articlePage = res.data.record.dataList
      this.total = res.data.record.total
      this.loading = false
      console.log(this.articlePage[0].tags)
    })
  }
};

</script>

<style scoped>
.category-content{
  z-index:2;
  text-align:center;
  border-radius: 3rem;
  color:#ffffff;
  position: absolute;
  top: 0.375rem;
  left:0.375rem;
  background-color: rgb(0 0 0 / 40%);
  padding: 0.225rem 0.5rem;
  font-size: .825rem;
}
</style>
