<!-- 判断数据是否响应式 -->
<template>
  <div class='so'>
    <h3>读出provide数据{{car.name}}---{{car.price}}</h3>
    <Dialog></Dialog>
  </div>
</template>

<script>
import { inject,ref,reactive } from 'vue'
import Dialog from './dialog.vue'
  export default {
  components: {
    Dialog
},
  setup(props) {
   let car= inject('car')
   return {
     car
   }
  }
  }
</script>

<style  scoped >

.so{
  width: 300px;
  height: 300px;
  background-color: #6363;
}
</style>