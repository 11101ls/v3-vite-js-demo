<!--  -->
<template>
  <div class=''>
    <button @click="isShow=true">点击弹框</button>
    <!-- Focus 将内容 传送到指定 位置  html标签或者css选择器 -->
    <teleport to='body'>
      <div class="mask" v-show="isShow">
        <div class="dialog" >
          <h3>弹框</h3>
          <h4>111</h4>
          <h4>111</h4>
          <button @click="isShow=false">关闭</button>
        </div>
      </div>
    </teleport>

  </div>
</template>

<script>
import { ref } from 'vue'
  export default {
    name:"Dialog",
     setup(props) {
       let isShow=ref(false)
       return {isShow}
  }


  }
</script>

<style  scoped >
.mask{
  position: absolute;
  height: 100vw;
   width:  100vw;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
}
.dialog{
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 300px;
  background-color: #bf3;
}
</style>