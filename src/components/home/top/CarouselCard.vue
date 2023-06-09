<template>
  <a-skeleton :loading="sk_loading" active>
    <a-carousel :after-change="onChange" dot-position="right" autoplay>
      <div v-for="(item,index) in this.topData" :key="index">
        <router-link to="">
          <div style="position: relative;border-radius: 6px;overflow: hidden">
            <div>
              <img height="380"
                   width="100%"
                   :src="item.cover"
                   style="object-fit: cover" alt="">
            </div>
            <div class="box-mask" style="height: 50px"/>
            <div style="position: absolute;bottom: 0;color: #ffffff ;width: 100%;height: 50px;line-height: 50px;">
              <span style="font-size: large;margin-left: 14px;">{{item.title}}</span>
            </div>
          </div>

        </router-link>
      </div>
    </a-carousel>
  </a-skeleton>
</template>
<script>
import {selectTop} from "@/api/article";

export default {
  data(){
    return{
      topData:[],
      sk_loading:true
    }
  },

  created() {
    selectTop().then((res)=>{
      this.topData=res.data.record
      this.sk_loading=false
    })
  },
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    },
  },
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  height: 380px;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
