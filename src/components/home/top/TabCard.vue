<template>
  <a-row :gutter="32">
    <a-col :span="4" v-for="(item,index) in this.url" :key="index">
      <router-link to="">
        <div class="box p-0 is-relative" :style="{overflow:'hidden',height: '6rem',backgroundSize:'cover' ,backgroundImage: 'url('+item+')',backgroundColor:'rgba(120, 120, 120, 0.03)'}">
          <div class="box-mask"/>
          <div class="is-flex" style="align-items: center;justify-content: center ;position: absolute;bottom: 0;color: #ffffff ;width: 100%;height: 100%">
            <span style="font-size: large;">后端开发</span>
          </div>
        </div>
      </router-link>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: "TabCard",
  data(){
    return{
      url:[
          "https://pandapro.halo.nicetheme.xyz/upload/img00028.jpg",
          "https://pandapro.halo.nicetheme.xyz/upload/img00029.jpg",
          "https://pandapro.halo.nicetheme.xyz/upload/img00030.jpg",
          "https://pandapro.halo.nicetheme.xyz/upload/img00031.jpg",
          "https://pandapro.halo.nicetheme.xyz/upload/img00035.jpg",
          "https://pandapro.halo.nicetheme.xyz/upload/img00033.jpg",
      ]

    }
  }
}
</script>

<style scoped>

</style>