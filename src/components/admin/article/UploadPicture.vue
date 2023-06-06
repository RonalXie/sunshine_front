<template>
    <a-upload
            name="file"
            list-type="picture-card"
            class="avatar-uploader"
            :show-upload-list="false"
            action="http://localhost:8090/attachment/upload"
            :before-upload="beforeUpload"
            @change="handleChange"
    >
        <img v-if="imageUrl" :src="imageUrl" alt="avatar" width="300" height="240" style="object-fit: cover"/>
        <div v-else>
            <a-icon :type="loading ? 'loading' : 'plus'" />
            <div class="ant-upload-text">
                上传封面
            </div>
        </div>
    </a-upload>
</template>
<script>
function getBase64(img, callback) {
    console.log(img,callback)
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
export default {
    data() {
        return {
            loading: false,
            imageUrl: '',
        };
    },
  props:[
      "img"
  ],
  created() {
    this.imageUrl=this.img===undefined?"":this.img;
  },
  methods: {
        handleChange(info) {
            if (info.file.status === 'uploading') {
                this.loading = true;
                return;
            }
            if (info.file.status === 'done') {
                console.log(info.file.response)
                this.$emit("change",info.file.response)
                // Get this url from response in real world.
                getBase64(info.file.originFileObj, imageUrl => {
                    this.imageUrl = imageUrl;
                    this.loading = false;
                });
            }
        },
        beforeUpload(file) {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                this.$message.error('You can only upload JPG file!');
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('Image must smaller than 2MB!');
            }
            return isJpgOrPng && isLt2M;
        },
    },
};
</script>
<style>
.avatar-uploader > .ant-upload {
}
.ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
    color: #666;
}
.ant-form-item{
  margin-bottom: 0;
}
</style>
