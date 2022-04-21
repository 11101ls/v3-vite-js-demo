<template>
  <h2>和为{{sum}}</h2>
  <button @click="sum++">点击</button>
  <h2>鼠标坐标:({{point.x}},{{point.y}})</h2>
  <h2>当前信息为{{msg}}</h2>
  <button @click="msg+=msg">点击</button>
  <h2>{{person.name}}</h2>
  <h2>{{person.age}}</h2>
  <h2>{{person.job1.j1.salary}}</h2>
  <button @click="person.name+=1">点击修改姓名</button>
  <button @click="person.age++">点击修改年龄</button>
  <button @click="person.job1.j1.salary++">点击修改工资</button>
</template>

<script>
import { ref, watch, reactive,watchEffect ,onMounted ,onBeforeUnmount} from "vue";
import usePoint from "../hooks/usePoint"

export default {
  setup ( props ) {
    let sum = ref( 0 )
    let msg = ref( "msg" )
    let person = reactive( {
      name: "张三",
      age: 12,
      job1: {
        j1: {
          salary: 20
        }
      }
    } )
   
    //Focus 监视ref单个数据
    // watch(sum,(newValue,oldValue)=>{
    //     console.log("sum 变了");
    // },{
    // immediate:true
    // 配置
    //})
    /*  //Focus 监视ref 多个数据
      监听多个数据  传入数组， newValue和oldValue变为数组
      watch([sum,msg],(newValue,oldValue)=>{
 
     }) */
    // Focus  ref类型的引用对象数据  {deep:true} 起效

    // Focus to reactive 类型监听全部属性  无法获取oldValue  强制开启 深度监听      {deep:true}仅仅对潜逃的引用数据类型起效 

    // watch(person,(newValue,oldValue)=>{
    //   console.log("personb变化",newValue,oldValue);
    // },{deep:false})

    // Focus  reactive 类型监听单个属性 
    // watch(()=>person.age,(newValue,oldValue)=>{
    //       console.log("ag改变了");
    // })

    // Focus 监视reactive类型的某些属性
    //#region 
    // watch([()=>person.age,()=>person.name],(newValue,oldValue)=>{
    //       console.log("ag或者name改变了");
    // })
    //#endregion
    
    // Focus 监视reactive类型的中的引用数据
    //#region 
    // watch( () => person.job1, ( newValue, oldValue ) => {
    //   console.log( "ag或者name改变了" );
    // }, { deep: true } )
    //#endregion
    // Focus  回调中 定义批量监听数据
    // watchEffect(()=>{
    //     //依赖数据
    //   const x1=sum.value
    //   console.log("watchEffect回掉");
    // })


    //Focus 使用hook
    let point=usePoint()

    
    return {
      sum,
      msg,
      person,
      point
    }
  }
}
</script>

<style>
</style>