<!--  -->
<template>
  <input v-model="keyWords" />
  <h3>{{keyWords}}</h3>
  <so></so>
</template>

<script>
import { ref, customRef } from 'vue'
import so from "./so.vue"
// Focus   customRef 是简易版 ref
export default {
  components: {
    so
  },
  setup ( props ) {
    //#region 
    // let keyWords=ref("hello")
    // 使用自定义ref
    let keyWords = myRef( "hello" )
    // 定义ref
    function myRef ( value ) {
      let timer
      /* 
        Focus 
        track:
        trigger:重新解析模版
       */
      return customRef( ( track, trigger ) => {

        return {
          //  获取数据触发
          get () {
            track() //追踪改变
            return value
          },
          // v-model修改触发
          set ( newValue ) {
            // 输入框防抖
            clearTimeout( timer )
            timer = setTimeout( () => {
              value = newValue
              trigger() //重新解析模版
            }, 1000 );


          }
        }
      } )

    }
    //#endregion
    
    // 
    // return { keyWords }
    // Focus Suspense和异步引入配合时 可返回promise
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve()
      }, 5000);
    })
  }
}
</script>

<style  scoped lang="scss">
</style>