<template>
  <div class="box">
    <EditorCard @handlePublish="getEditorValue" :text="this.updateData.content"/>
    <a-modal v-model="modalVisible" title="发布设置" @ok="handleSubmit">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="标题">
          <a-input
              v-decorator="['title', { rules: [{ required: true, message: 'Please input your note!' }],initialValue:this.updateData.title }]"
          />
        </a-form-item>
        <a-form-item label="摘要">
          <a-textarea
              v-decorator="['summary', { rules: [{ required: true, message: 'Please input your note!' }],initialValue:this.updateData.summary }]"
          />
        </a-form-item>
        <a-form-item label="分类">
          <a-select
              v-decorator="['categoryId', { rules: [{ required: true, message: 'Please input your note!' }] ,initialValue:this.updateData.category.id}]"
          >
            <a-select-option v-for="(item,index) in this.categoryData" :value="item.id" :key="index">
              {{item.name}}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="标签">
          <a-select
              v-decorator="['tagIds', { rules: [{ required: true, message: 'Please input your note!' }] ,initialValue:this.updateTags}]"
              mode="multiple"
          >
            <a-select-option v-for="(item,index) in this.tagData" :value="item.id" :key="index">
              {{item.name}}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="封面">
          <a-button type="primary" @click="()=>{this.selectVisible=true}" v-if="coverUrl.length===0">选择封面</a-button>
          <a href="#" v-else @click="selectVisible=true">
            <img :src="coverUrl" width="100" height="100" style="object-fit: cover">
          </a>
        </a-form-item>
        <a-form-item label="是否置顶">
          <a-switch
              v-decorator="[
          'top',{valuePropName: 'checked',initialValue:this.updateData.top}]"
          />
        </a-form-item>
      </a-form>
    </a-modal>
<!--    封面选择模态框-->
    <a-modal v-model="selectVisible" title="附件库" @ok="handleOk">
      <div>
        <a-row :gutter="16">
          <a-col :span="6" v-for="(item,index) in this.attachmentList" :key="index">
            <div  class="box p-0" style="border-radius: 0;margin-bottom: 16px">
              <a href="#">
                <img :src="item.url" @click="selectCover(item.url)" alt="" style="width: 100%;height:100px;object-fit: cover" class="image-scale">
              </a>
              <div class="ellipsis is-ellipsis-1" style="width: 100%;font-size: small">
                {{ item.name }}
              </div>
            </div>
          </a-col>
        </a-row>
        <hr>
        <div style="text-align: right">
          <a-pagination v-model="current" :total="total" @change="handlePageChange" :defaultPageSize="16" show-less-items />
        </div>
      </div>

    </a-modal>
  </div>

</template>
<script>
import EditorCard from "@/components/admin/article/EditorCard.vue";
import {getCategories} from "@/api/category";
import {getTags} from "@/api/tag";
import {updateArticle} from "@/api/article";
import {searchPage} from "@/api/attachment";
import {message} from "ant-design-vue";

export default {
  components: {EditorCard},
  data() {
    return {
      form: this.$form.createForm(this),
      modalVisible: false,
      categoryData:[],
      tagData:[],
      content:'',
      summary_value:"",
      coverUrl:"",
      selectVisible:false,
      attachmentList:[],
      current: 1,
      total: 0,
      updateTags:[],
      updateData:{},
      updateContent:""

    }
  },
  created() {
    getCategories().then((res)=>{this.categoryData=res.data.record})
    getTags().then((res)=>{this.tagData=res.data.record})
    this.beforeUpdate()
    searchPage({
      pageSize: 16,
      pageNum: 1,
    }).then(res => {
      this.attachmentList = res.data.record.dataList
      this.total=res.data.record.total
    })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      let formData=this.form.getFieldsValue()
      formData['content']=this.content
      formData['cover']=this.coverUrl
      formData['id']=this.updateData.id
      // formData['abs']=this.abs_value
      // formData['id']=this.updateData.id
      console.log(formData,"表单")
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
      updateArticle(formData).then((res)=>{
        console.log(res)
        message.success("更新成功!")
        this.modalVisible=false
      })
    },

    handlePageChange() {
      console.log(this.current)
      searchPage({
        pageNum: this.current,
        pageSize: 16
      }).then(res => {
        this.attachmentList=res.data.record.dataList
        this.total=res.data.record.total
      })
    },

    getEditorValue(val) {
      this.modalVisible = val.modalVisible
      this.content=val.content
      this.summary_value = val.content.slice(0, 200);

    },
    beforeUpdate(){
      this.updateData=this.$route.params.data
      this.coverUrl=this.updateData.cover
      console.log(this.updateData,"data11")
      for (let tag of this.updateData.tags) {
        this.updateTags.push(tag.id)
      }
      // searchContent(this.updateData.id).then(res=>{
      //   this.updateContent=res.data.record;
      //   console.log(this.updateContent)
      // })

    },
    handleOk() {


    },
    selectCover(val){
      this.coverUrl=val;
      this.selectVisible=false
    }
  }


}
</script>
<style scoped>

</style>
