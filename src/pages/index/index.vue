<template>
  <view class="index">
    <view class="index">
      <AtNoticebar marquee>
        欢迎使用 Taro UI Vue
      </AtNoticebar>
      <view class="logo">
        <image
          src="./../../assets/logo-taro.png"
          mode="widthFix"
          class="logo-image"
        />
        <text>Hello Taro</text>
      </view>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { AtNoticebar } from 'taro-ui-vue'
import "taro-ui-vue/dist/style/components/noticebar.scss"
import './index.scss' 
export default {
    components: {
    AtNoticebar
  },
  data () {
    return {
     
    }
  },
  methods: {
    
  },
}
</script>
