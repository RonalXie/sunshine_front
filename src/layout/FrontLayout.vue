<template>
  <div>
    <div class="header">
      <a-row type="flex" justify="center">
        <a-col :xs="22" :sm="24" :md="22" :lg="20" :xl="20" :xxl="16">
          <FrontHeader/>
        </a-col>
      </a-row>
    </div>
    <div :style="{paddingTop:'88px'}">
      <a-row type="flex" justify="center">
        <a-col :xs="22" :sm="24" :md="22" :lg="20" :xl="20" :xxl="16">
          <router-view/>
        </a-col>
      </a-row>
    </div>
    <br>
    <div>
      <footer-bar/>
    </div>
  </div>
</template>

<script>
import FrontHeader from "@/components/bar/FrontHeader.vue";
import FooterBar from "@/components/bar/FooterBar.vue";

export default {
  components: {FooterBar,  FrontHeader}

}
</script>

<style scoped>
.header{
  background: #fff;
  /*margin: 16px 0;*/
  box-shadow: 2px 1px 12px 3px #eee;
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  line-height: 68px;
}
</style>
