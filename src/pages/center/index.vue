<template>
  <view class="center">
    <view
      class="link"
      @tap="nav"
    >
      <view class="at-icon at-icon-link" /> 页面跳转 <view class="at-icon at-icon-link" />
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import "taro-ui-vue/dist/style/components/icon.scss";
import './index.scss' 
export default {
    components: {
    
  },
  data () {
    return {
      
    }
  },
  methods: {
    nav(){
      Taro.navigateTo({
        url: '/pages/other/index'
      })
    }
  },
}
</script>
