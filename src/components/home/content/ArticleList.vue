<template>
  <div>
    <div class="box" style="padding: 12px">
      <a-button shape="round">最近更新</a-button>
    </div>
    <a-skeleton :loading="sk_loading" active>
          <div class="box" style="overflow: hidden;margin: 12px 0" v-for="(item,index) in this.articlePage" :key="index">
            <a-row :gutter="16" type="flex" align="middle">
              <a-col :span="7">
                <div class="is-relative" style="width: 100%">
                  <div class="category-content">
                    {{ item.category.name }}
                  </div>
                  <div style="height: 160px;width: 100%;border-radius:6px;overflow: hidden;">
                    <router-link to="">
                      <img
                          class="image-scale"
                          :src="item.cover"
                          style="object-fit: cover;height: 100%;width: 100%;"
                      />
                    </router-link>
                  </div>
                </div>
              </a-col>
              <a-col :span="17">
                <div>
                  <div style="margin-bottom: 8px;font-size: small" class="has-text-grey">
                    <router-link to="" class="has-text-grey" v-for="(tag,i) in item.tags" :key="i">
                      <a-badge status="success" :text="tag.name"/>&nbsp;
                    </router-link>

                    <div style="font-size: small;float: right">
                      <a-icon type="calendar"></a-icon>&nbsp;
                      {{ item.createTime }}
                    </div>
                  </div>
                  <router-link style="color: #4a4a4a" :to="{path: '/article/'+item.id}" target="_blank"><div
                      style="font-size: large;font-weight:bold;margin-bottom: 8px" class="card-title ellipsis is-ellipsis-1">
                    {{ item.title }}</div></router-link>

                  <p class="has-text-grey ellipsis is-ellipsis-2" style="height: 40px;font-size: small">
                    {{ item.summary }}
                  </p>
                  <div class="is-flex has-text-grey" style="justify-content: space-between;align-items: center;font-size: small">
                    <div class="is-flex" style="align-items: center">
                      <div style="width: 28px;height: 28px;border-radius: 50%;overflow: hidden">
                        <img
                            style="object-fit: cover;width: 100%;height: 100%"
                            src="https://img2.woyaogexing.com/2022/04/17/4f0933042059456ab7a00bc3bf9ce252!400x400.jpeg"
                            alt=""
                        />
                      </div>
                      &nbsp;&nbsp;
                      <div>
                        RonalXie
                      </div>
                    </div>
                    <!--                    <div style="font-size: small">-->
                    <!--                      <a-icon type="calendar"></a-icon>&nbsp;-->
                    <!--                      {{ item.createTime }}-->
                    <!--                    </div>-->
                    <!--              </div>-->
                    <div>
                      <a-icon type="eye"></a-icon>&nbsp;
                      {{ item.views }}
                    </div>
                  </div>
                </div>

              </a-col>
            </a-row>
          </div>
      <div style="text-align: center">
        <a-pagination v-model="current" :total="total" @change="handlePageChange" show-less-items/>
      </div>
    </a-skeleton>

  </div>
</template>
<script>
import {selectPage} from "@/api/article";

export default {
  data() {
    return {
      articlePage: [],
      current: 1,
      total: 0,
      actions: [
        {type: 'eye', text: '156'},
        {type: 'message', text: '2'},
      ],
      sk_loading: true,
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
      this.sk_loading = true
      console.log(this.current)
      selectPage({
        pageNum: this.current,
        pageSize: 10
      }).then(res => {
        this.articlePage = res.data.record.dataList
        this.total = res.data.record.total
        this.sk_loading = false
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
      pageSize: 10,
    }).then(res => {
      this.articlePage = res.data.record.dataList
      this.total = res.data.record.total
      setTimeout(() => {
        this.sk_loading = false
      }, 1000)
    })
  }
};

</script>

<style scoped>
.category-content {
  z-index: 2;
  text-align: center;
  border-radius: 3rem;
  color: #ffffff;
  position: absolute;
  top: 0.375rem;
  left: 0.375rem;
  background-color: rgb(0 0 0 / 40%);
  padding: 0.225rem 0.5rem;
  font-size: .825rem;
}

.card-title:hover {
  color: #42b983;
}
</style>
