<template>

  <a-row :gutter="16" type="flex" align="middle">
    <a-col :span="12">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="用户名">
          <a-input
              v-decorator="['username', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
        <a-form-item label="昵称">
          <a-input
              v-decorator="['nickname', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
        <a-form-item label="个性签名">
          <a-textarea
              v-decorator="['intro', { rules: [{ required: true, message: 'Please input your note!' }],initialValue:'life is fantastic' }]"
          />
        </a-form-item>
        <a-form-item label="性别">
          <a-radio-group v-decorator="['sex', { rules: [{ required: true, message: 'Please input your note!' }] }]">
            <a-radio :value="1">
              男
            </a-radio>
            <a-radio :value="2">
              女
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="年龄">
          <a-input-number
              v-decorator="['age', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          >
          </a-input-number>
        </a-form-item>

        <a-form-item label="邮箱">
          <a-input
              v-decorator="['email', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          >
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" :loading="loading" class="login-form-button">
            保存
          </a-button>
        </a-form-item>
      </a-form>

    </a-col>
    <a-col :span="12" style="text-align: center">
      <div style="margin-left: 100px">
        <upload-picture/>
      </div>
    </a-col>
  </a-row>
</template>
<script>
import UploadPicture from "@/components/admin/article/UploadPicture.vue";
export default {
  components:{
    UploadPicture,
  },
  data(){
    return{
      form: this.$form.createForm(this),
      loading:false

    }

  },
  methods:{
    handleSubmit(){

    }
  }
}
</script>
<style scoped>

</style>
