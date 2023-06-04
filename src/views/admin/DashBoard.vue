<template>
      <div>
          <a-row :gutter="16">
              <a-col :span="6" v-for="i in 4" :key="i">
                  <a-card :loading="loading" :bordered="false" style="text-align: center">
                      <template slot="title">Card content</template>
                      <b>100</b>
                  </a-card>
              </a-col>
          </a-row>
          <br/>

          <a-row :gutter="16">
              <a-col :span="16">
              </a-col>
              <a-col :span="8">
              </a-col>
          </a-row>
      </div>
</template>

<script>


export default {
    name: "AdminView",
    components: {},
    data(){
        return{
            loading:true
        }
    },
    created () {
        setTimeout(() => {
            this.loading = !this.loading
        }, 1000)
    }
}
</script>

<style scoped>


</style>
