<template>
  <div class="box">
    <div>
      <a-input/>
    </div>
    <br>
    <div style="text-align: right">
      <a-button type="primary" @click="()=>{this.upload_visible=true}">上传附件</a-button>
    </div>
    <hr>
    <div>
      <a-row :gutter="16">
        <a-col :span="3" v-for="(item,index) in this.attachmentList" :key="index">
          <div class="box p-0" style="border-radius: 0;margin-bottom: 16px">
            <a href="#">
              <img :src="item.url" @click="preview(item.url)" alt="" style="width: 100%;height:100px;object-fit: cover"
                   class="image-scale">
            </a>
            <div class="ellipsis is-ellipsis-1" style="width: 100%;font-size: small">
              {{ item.name }}
            </div>
          </div>
        </a-col>
      </a-row>
      <hr>
      <div style="text-align: right">
        <a-pagination v-model="current" :total="total" @change="handlePageChange" :defaultPageSize="16" show-less-items/>
      </div>
    </div>
    <!--预览图片-->
    <a-modal v-model="visible" title="预览" @ok="handleOk">
      <img :src="preview_url" alt="" width="100%">
    </a-modal>

    <!--    上传附件-->
    <a-modal v-model="upload_visible" title="上传附件" @ok="handleUpload" :confirmLoading="upload_loading">
      <!--      <a-selet>-->

      <!--      </a-selet>-->
      <hr>
      <upload-attachment @change="getFileList"/>
    </a-modal>

  </div>
</template>
<script>
import {searchPage, upload} from "@/api/attachment";
import UploadAttachment from "@/components/admin/article/UploadAttachment.vue";
import {message} from "ant-design-vue";

export default {
  components: {
    UploadAttachment
  },
  data() {
    return {
      attachmentList: [],
      current: 1,
      visible: false,
      preview_url: "",
      upload_visible: false,
      fileList: [],
      upload_loading: false,
      total:0


    }
  },
  methods: {
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    preview(url) {
      this.preview_url = url;
      this.visible = true;
    },
    getFileList(val) {
      this.fileList = val;
    },
    handlePageChange() {
      console.log(this.current)
      searchPage({
        pageNum: this.current,
        pageSize: 16
      }).then(res => {
        this.attachmentList=res.data.record.dataList
      })
    },
    handleUpload() {
      const {fileList} = this;
      const formData = new FormData();
      fileList.forEach(file => {
        console.log(file, "file")
        formData.append('file', file.originFileObj);
      });
      this.upload_loading = true;
      // You can use any AJAX library you like
      console.log(fileList, "上传文件")
      console.log(formData.get("file"), "上传表单")
      upload(formData).then(res => {
        console.log(res)
        message.success("上传成功")
        this.upload_loading = false;
        this.upload_visible = false;
      })
    },
  },
  created() {
    searchPage({
      pageSize: 16,
      pageNum: 1,
    }).then(res => {
      this.attachmentList = res.data.record.dataList
      this.total=res.data.record.total
    })
  }
}
</script>

<style scoped>

</style>
