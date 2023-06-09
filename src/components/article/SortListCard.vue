<template>
  <div class="box" style="position: sticky;top: 72px">
    <h2>热门文章</h2>
    <div>
      <div v-for="(item,index) in this.dataList" :key="index" style="width: 100%">
        <a-row :gutter="16" type="flex" align="middle">
          <a-col :span="10">
            <div style="margin-right:16px;width: 100%;height: 96px;overflow: hidden;border-radius: 6px;">
              <img :src="item.cover" alt="" style="border-radius: 6px;
              object-fit: cover" width="100%" height="100%" class="scale">
            </div>
          </a-col>
          <a-col :span="14">
            <div class="is-flex" style="flex-direction: column;justify-content: space-between;height: 96px">
              <div class="ellipsis is-ellipsis-2" style="width: 100%;height: 48px;font-size: medium">{{ item.title }}</div>
              <div style="font-size: small"><a-icon type="calendar"></a-icon> {{ item.createTime }}</div>
            </div>
          </a-col>
        </a-row>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import {selectHot} from "@/api/article";

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },

];
export default {
  data() {
    return {
      data,
      dataList: []
    };
  },
  created() {
    selectHot().then((res) => {
      this.dataList = res.data.record
    })
  }

};
</script>

<style scoped>
.recent-list {
  list-style: none;
}

.recent-list li {

}
</style>
