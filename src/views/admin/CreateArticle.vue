<template>
  <div class="box">
    <EditorCard @handlePublish="getEditorValue"/>
    <a-modal v-model="modalVisible" title="发布设置" @ok="handleSubmit">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="标题">
          <a-input
              v-decorator="['title', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
        <a-form-item label="摘要">
          <a-textarea
              v-decorator="['summary', { rules: [{ required: true, message: 'Please input your note!' }],initialValue:this.summary_value }]"
          />
        </a-form-item>
        <a-form-item label="分类">
          <a-select
              v-decorator="['categoryId', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          >
            <a-select-option v-for="(item,index) in this.categoryData" :value="item.id" :key="index">
              {{item.name}}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="标签">
          <a-select
              v-decorator="['tagIds', { rules: [{ required: true, message: 'Please input your note!' }] }]"
              mode="multiple"
          >
            <a-select-option v-for="(item,index) in this.tagData" :value="item.id" :key="index">
              {{item.name}}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="封面">
          <upload-picture v-decorator="['coverId']"/>
        </a-form-item>
        <a-form-item label="是否置顶">
          <a-switch
              v-decorator="[
          'top',{valuePropName: 'checked'}]"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>

</template>
<script>
import EditorCard from "@/components/admin/article/EditorCard.vue";
import UploadPicture from "@/components/admin/article/UploadPicture.vue";
import {getCategories} from "@/api/category";
import {getTags} from "@/api/tag";
import {insertArticle} from "@/api/article";

export default {
  components: {EditorCard,UploadPicture},
  data() {
    return {
      form: this.$form.createForm(this),
      modalVisible: false,
      categoryData:[],
      tagData:[],
      content:'',
      summary_value:""

    }
  },
  created() {
    getCategories().then((res)=>{this.categoryData=res.data.record})
    getTags().then((res)=>{this.tagData=res.data.record})
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      let formData=this.form.getFieldsValue()
      formData['content']=this.content
      // formData['abs']=this.abs_value
      // formData['id']=this.updateData.id
      console.log(formData,"表单")
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
      insertArticle(formData).then((res)=>{
        console.log(res)
        this.modalVisible=false
      })
    },

    getEditorValue(val) {
      this.modalVisible = val.modalVisible
      this.content=val.content
      this.summary_value = val.content.slice(0, 200);

    },
    handleOk() {


    }
  }


}
</script>
<style scoped>

</style>
