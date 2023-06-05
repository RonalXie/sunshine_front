<template>
  <div>
    <div id="vditor"/>
    <br>
    <div style="padding: 0 24px 24px 24px;text-align: right">
      <a-button type="primary" @click="handlePublish">
        发布设置
      </a-button>
      &nbsp;
      <a-button>
        清空
      </a-button>
    </div>
  </div>
</template>
<script>
import Vditor from "vditor";
import 'vditor/dist/index.css'
import handle from "ant-design-vue/lib/vc-slider/src/Handle";

export default {
  computed: {
    handle() {
      return handle
    }
  },
  props: [
    "text"
  ],

  data() {
    return {
      contentEditor: {},
      content: ""
    }

  },
  watch: {
    "content": function (val, oldVal) {
      console.log(val, oldVal)
    }
  },
  mounted() {
    this.contentEditor = new Vditor('vditor', {
      height: 870,
      placeholder: '此处为话题内容……',
      theme: 'classic',
      counter: {
        enable: true,
        type: 'markdown'
      },
      preview: {
        actions: [],
        delay: 0,
        hljs: {
          style: 'monokai',
          lineNumber: true
        }
      },
      tab: '\t',
      typewriterMode: true,
      toolbarConfig: {
        pin: true
      },
      cache: {
        enable: false
      },
      mode: 'sv',
      after: () => {
        console.log(this.text, "text")
        this.contentEditor.setValue(this.text === undefined ? '' : this.text)
      },
    })
  },
  methods: {
    handlePublish() {

      let editorValue = {
        content: this.contentEditor.getValue(),
        modalVisible: true,
      }
      this.$emit("handlePublish", editorValue)
    }
  }

}

</script>
<style>
.vditor-toolbar {
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid #d1d5da;
}

.vditor {
  border: none;
}

.vditor-preview {
  background-color: #ffffff;
}

.vditor {
  --textarea-background-color: #ffffff
}

.vditor-content {
  border-bottom: 1px solid #d1d5da;

}
</style>
