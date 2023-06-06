<template>
  <div class="box" >
    <a-tabs default-active-key="1" @change="callback" tab-position="left">
      <a-tab-pane key="1" tab="基本设置">
        <BaseSetting/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="安全中心" force-render>
        Content of Tab Pane 2
      </a-tab-pane>
    </a-tabs>

  </div>
</template>
<script>
import BaseSetting from "@/components/admin/user/BaseSetting.vue";

export default {
  components: {BaseSetting},

  methods:{
    // eslint-disable-next-line no-unused-vars
    callback(val){

    }
  }
}
</script>
<style scoped>

</style>
