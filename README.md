```
组件内使用
import  Avator  from 'h5-vue-croppers' 
components: {
  Avator,
},



```

```使用示例
    <template>
    <div>
        <input
            type="file"
            @change="avatorChange"
        >
    <Avator
        v-if="state"
        :url="imageUrl"
        :name="fileName"
        :autoCrop="true"
        :centerBox="true"
        @cancel="cancelAvatorChoose"
        @upload="getCropData"
        />
    </div>
    </template>

    <script>
    import { Avator } from 'h5-vue-croppers' 
    export default {
    components: {
     Avator,
    },
    data() {
        return {
        imageUrl: '',
        state: false,
        fileName: ''
        }
    },
    methods: {
        getCropData(files) {
            console.log(files)//裁剪之后返回的文件流，用于上传服务器
        },
        avatorChange(e) {
        const file = e.srcElement.files[0]
        const imgURL = window.URL.createObjectURL(file)
        this.imageUrl = imgURL
        this.fileName = file.name
        this.state = true
        },
        cancelAvatorChoose() {
        this.imageUrl = ''
        this.state = false
        },
    }
    }
    </script>
```

<table style="text-align: center">
  <thead>
    <tr>
        <td>名称</td>
        <td>功能</td>
        <td>默认值</td>
        <td>可选值</td>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>url</td>
        <td>裁剪图片的地址</td>
        <td>空</td>
        <td>url 地址 || base64 || blob</td>
    </tr>
    <tr>
        <td>name</td>
        <td>input返回的file对象里的name</td>
        <td>空</td>
        <td></td>
    </tr>
    <tr>
        <td>outputSize</td>
        <td>裁剪生成图片的质量</td>
        <td>1</td>
        <td>0.1 - 1</td>
    </tr>
    <tr>
        <td>outputType</td>
        <td>裁剪生成图片的格式</td>
        <td>jpg (jpg 需要传入jpeg)</td>
        <td>jpeg || png || webp</td>
    </tr>
    <tr>
        <td>info</td>
        <td>裁剪框的大小信息</td>
        <td>true</td>
        <td>true || false</td>
    </tr>
    <tr>
        <td>canScale</td>
        <td>图片是否允许滚轮缩放</td>
        <td>true</td>
        <td>true || false</td>
    </tr>
    <tr>
        <td>autoCrop</td>
        <td>是否默认生成截图框</td>
        <td>false</td>
        <td>true || false</td>
    </tr>
    <tr>
        <td>autoCropWidth</td>
        <td>默认生成截图框宽度</td>
        <td>200px</td>
        <td>0~max</td>
    </tr>
    <tr>
        <td>autoCropHeight</td>
        <td>默认生成截图框高度</td>
        <td>200px</td>
        <td>0~max</td>
    </tr>
    <tr>
        <td>fixed</td>
        <td>是否开启截图框宽高固定比例</td>
        <td>true</td>
        <td>true | false</td>
    </tr>
    <tr>
        <td>fixedNumber</td>
        <td>截图框的宽高比例</td>
        <td>[1, 1]</td>
        <td>[宽度, 高度]</td>
    </tr>
    <tr>
        <td>full</td>
        <td>是否输出原图比例的截图</td>
        <td>false</td>
        <td>true | false</td>
    </tr>
    <tr>
        <td>fixedBox</td>
        <td>固定截图框大小 不允许改变</td>
        <td>false</td>
        <td>true | false</td>
    </tr>
    <tr>
        <td>canMove</td>
        <td>上传图片是否可以移动</td>
        <td>true</td>
        <td>true | false</td>
    </tr>
    <tr>
        <td>canMoveBox</td>
        <td>截图框能否拖动</td>
        <td>true</td>
        <td>true | false</td>
    </tr>
    <tr>
        <td>original</td>
        <td>上传图片按照原始比例渲染</td>
        <td>false</td>
        <td>true | false</td>
    </tr>
    <tr>
        <td>centerBox</td>
        <td>截图框是否被限制在图片里面</td>
        <td>false</td>
        <td>true | false</td>
    </tr>
	<tr>
        <td>high</td>
        <td>是否按照设备的dpr 输出等比例图片</td>
        <td>true</td>
        <td>true | false</td>
    </tr>
    <tr>
        <td>infoTrue</td>
        <td>true 为展示真实输出图片宽高  false 展示看到的截图框宽高</td>
        <td>false</td>
        <td>true | false</td>
    </tr>
    <tr>
        <td>maxImgSize</td>
        <td>限制图片最大宽度和高度</td>
        <td>2000</td>
        <td>0-max</td>
    </tr>
    <tr>
        <td>enlarge</td>
        <td>图片根据截图框输出比例倍数</td>
        <td>1</td>
        <td>0-max(建议不要太大)</td>
    </tr>
    <tr>
        <td>mode</td>
        <td>图片默认渲染方式</td>
        <td>contain</td>
        <td>contain , cover, 100px, 100% auto</td>
    </tr>
  </tbody>
</table>


#1.0.5
  文档维护

