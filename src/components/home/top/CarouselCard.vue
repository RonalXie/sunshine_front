<template>
  <a-carousel :after-change="onChange" dot-position="right" autoplay>
    <div v-for="i in 4" :key="i">
      <router-link to="">
        <div style="position: relative;border-radius: 6px;overflow: hidden">
          <div>
            <img height="350"
                 width="100%"
                 src="https://pandapro.halo.nicetheme.xyz/upload/img00051.jpg"
                 style="object-fit: cover" alt="">
          </div>
          <div class="box-mask" style="height: 50px"/>
          <div style="position: absolute;bottom: 0;color: #ffffff ;width: 100%;height: 50px;line-height: 50px;">
            <span style="font-size: large;margin-left: 14px;">标题</span>
          </div>
        </div>

      </router-link>
    </div>
  </a-carousel>
</template>
<script>
export default {
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
  height: 350px;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
