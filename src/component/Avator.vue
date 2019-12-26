<template>
  <div class="cropper-box">
    <vue-cropper
      ref="cropper"
      :autoCrop="autoCrop"
      :img="url"
      :centerBox="centerBox"
      :fixed="fixed"
      :autoCropWidth="autoCropWidth"
      :autoCropHeight="autoCropHeight"
      :fixedNumber="fixedNumber"
      :outputSize="outputSize"
      :outputType="outputType"
      :info="info"
      :canScale="canScale"
      :full="full"
      :fixedBox="fixedBox"
      :canMove="canMove"
      :canMoveBox="canMoveBox"
      :original="original"
      :high="high"
      :infoTrue="infoTrue"
      :maxImgSize="maxImgSize"
      :enlarge="enlarge"
      :mode="mode"
    />
    <div class="bottom-btn-box">
      <div
        class="btn"
        @click="cancelAvatorChoose"
      >
        取消
      </div>
      <div
        class="btn"
        @click="getCropData"
      >
        确定
      </div>
    </div>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'

export default {
  name: 'Avator',
  components: {
    VueCropper
  },
  props: {
    url: {//图片路径
      type: String,
      required: true
    },
    name: {//图片名,blob转换files用到
      type: String
    },
    outputSize: {//裁剪生成图片的质量, 0.1~1
      type: Number,
      default: 1
    },
    outputType: {//裁剪生成图片的格式,jpeg || png || webp
      type: String,
      default: 'jpeg'
    },
    info: {//裁剪框的大小信息
      type: Boolean,
      default: true
    },
    canScale: {//图片是否允许滚轮缩放
      type: Boolean,
      default: true
    },
    autoCrop: {//是否默认生成截图框
      type: Boolean,
      default: false
    },
    autoCropWidth: {//默认生成截图框宽度
      type: String,
      default: '200px'
    },
    autoCropHeight: {//默认生成截图框高度
      type: String,
      default: '200px'
    },
    fixed: {//是否开启截图框宽高固定比例
      type: Boolean,
      default: true
    },
    fixedNumber: {//截图框的宽高比例
      type: Array,
      default: () => [1, 1]
    },
    full: {//是否输出原图比例的截图
      type: Boolean,
      default: false
    },
    fixedBox: {//固定截图框大小 不允许改变
      type: Boolean,
      default: false
    },
    canMove: {//上传图片是否可以移动
      type: Boolean,
      default: true
    },
    canMoveBox: {//截图框能否拖动
      type: Boolean,
      default: true
    },
    original: {//上传图片按照原始比例渲染
      type: Boolean,
      default: false
    },
    centerBox: {//截图框是否被限制在图片里面
      type: Boolean,
      default: false
    },
    high: {//是否按照设备的dpr 输出等比例图片
      type: Boolean,
      default: true
    },
    infoTrue: {//true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      type: Boolean,
      default: false
    },
    maxImgSize: {//限制图片最大宽度和高度,0~max
      type: Number,
      default: 2000
    },
    enlarge: {//图片根据截图框输出比例倍数,0-max(建议不要太大不然会卡死的呢)
      type: Number,
      default: 1
    },
    mode: {//图片默认渲染方式:contain , cover, 100px, 100% auto
      type: String,
      default: 'contain'
    }
  },
  methods: {
    cancelAvatorChoose() {
      this.$emit('cancel')
    },
    getCropData() {
      this.$refs.cropper.getCropBlob(data => {
        if (name) {
          data.name = this.name
          let files = new window.File([data], data.name, { type: data.type })
          this.$emit('upload', arr)//files,原生input返回类型
        } else {
          this.$emit('upload', data)//blob
        }
      })
    },
  },
};
</script>

<style scoped lang="scss">
.cropper-box {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 999;
  .bottom-btn-box {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .btn {
      color: #fff;
      font-size: 14px;
      padding: 20px 30px;
    }
  }
  /deep/ .vue-cropper {
    background-image: none;
    background-color: #000;
  }
}
</style>
