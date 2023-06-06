<template>
  <div style="height: 100%;padding-top: 10%">
    <a-row type="flex" justify="center" align="middle">
      <a-col :span="4">
        <div class="login card">
          <h2 style="text-align: center">登录</h2>
          <a-form
              id="components-form-demo-normal-login"
              :form="form"
              class="login-form"
              @submit="handleSubmit"
          >
            <a-form-item>
              <a-input
                  v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
                  placeholder="Username"
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                  v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
                  type="password"
                  placeholder="Password"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit" :loading="loading" class="login-form-button">
                Log in
              </a-button>
            </a-form-item>
          </a-form>

        </div>
      </a-col>
    </a-row>
  </div>


</template>

<script>
import {login} from "@/api/user";
import {message} from "ant-design-vue";

export default {
  data(){
    return{
      loading:false
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      this.loading=true
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
      const formData=this.form.getFieldsValue()
      login(formData).then(res=>{
        if (res.data.record){

          message.success("登录成功!")
          this.loading=false;
          window.localStorage.setItem("token",res.data.record)
          this.$router.replace("/dashboard")
        }else{
          this.loading=false
          message.error("错误的用户名或密码!")
        }

      })
    },
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
