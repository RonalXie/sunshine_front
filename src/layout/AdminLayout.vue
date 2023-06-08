<template>
  <div>
    <div class="header">
      <a-row type="flex" justify="center">
        <a-col :xs="22" :sm="24" :md="22" :lg="20" :xl="20" :xxl="16">
          <AdminHeader/>
        </a-col>
      </a-row>
    </div>
    <div :style="{paddingTop:'88px'}">
      <a-row type="flex" justify="center">
        <a-col :xs="22" :sm="24" :md="22" :lg="20" :xl="20" :xxl="16">
          <a-row :gutter="16">
            <a-col :span="5">
              <AdminSider/>
            </a-col>
            <a-col :span="19">
              <router-view/>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <div>Footer</div>
  </div>
</template>

<script>
import AdminHeader from "@/components/bar/AdminHeader.vue";
import AdminSider from "@/components/bar/AdminSider.vue";

export default {
  components: {AdminSider, AdminHeader,}

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
  line-height: 64px;
}
</style>
