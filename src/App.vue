<template>
 <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
   <HelloWorld msg="Hello Vue 3.0 + Vite"  @hello="showHell"> <span>slot---ss</span>
    <!-- <template v-slot:footer>
      <span>
        slahjflaskh flsa
      </span>
    </template> -->


    <!-- <template #footer>
      <span>slot Name</span>
    </template> -->
    <!-- Focus   优化异步加载 -->
    <Suspense>
      <!-- 主内容 -->
        <template v-slot:default>
          <customRef></customRef>
        </template>
        <!-- 主内容为加载完毕 展示 -->
        <template v-slot:fallback>
           <!-- <customRef></customRef> -->
           <h3>加载中。。。</h3>
        </template>
    </Suspense>
      
 </HelloWorld>
    <!--  <Wacth/>
   <ToRef/>  -->
   <h3>{{name}}--{{price}}</h3>
  

  <!-- <button @click="changeCount">count is: {{ count }}</button>
   <button @click="changeObj">obj is: {{ obj }}</button>
    {{hobby}}
    <button @click="addAtter">111</button>
   <button @click="deleteAtter">1</button> -->
</template>

<script>
// import customRef from './components/customerRef.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import Wacth from "./components/Wacth.vue"
// import ToRef from './components/toRef.vue'
import {ref,reactive,toRefs,provide,defineAsyncComponent} from 'vue'
const customRef=defineAsyncComponent(()=>import('./components/customerRef.vue'))
const HelloWorld=defineAsyncComponent(()=>import('./components/HelloWorld.vue'))
// Focus 异步组件
export default {
  name: 'App',
  components: {
    HelloWorld,
    // ,Wacth,ToRef
    customRef
  },

  /* setup  在beforecreate前执行 没有this 两个参数:
    props

  
  
  */
  /* ref 定义基本类型数据  通过get set 实现响应式   */
  /* reactive 定义引用对象类型   通过proxy 实现  ,内部通过reflect 操作源对象 */
  setup(props) {
    let car=reactive({
      name:"name",
      price:"20w"
    })
    console.log(props,"0---");
    function showHell(val){
        console.log(`收到%{val}`);
    };

    // Focus  provide 传值
    provide('car',car)
    return{ showHell,...toRefs(car)}
      // let count=ref(0);
      // let obj=reactive({
      //   type:"name",
      //   name:"type"
      // })
      // let hobby=reactive(["1","2","3"])
      // function changeCount(params) {
      //     count.value+=1
      // }
      // function changeObj(params) {
      //   //  reactive包裹的引用类型对象 修改
      //     obj.type="^^^";
      //     obj.name="v3++"
      //     console.log(obj.name);
      //     hobby[0]="kjsfsao"
      // }
      //   function addAtter(params) {
      //     obj.sex="anna"
      //   }      
      //   function deleteAtter(params) {
      //     delete obj.sex
      //   }
      // return {
      //   count,
      //   obj,
      //   hobby,
      //   changeCount,
      //   changeObj,
      //   addAtter,
      //   deleteAtter
       
      // }
  }
}
</script>
