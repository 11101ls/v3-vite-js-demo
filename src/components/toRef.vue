<template >
  <div class="toref-dd">
    <h2>{{person.name}}</h2>
  <h2>{{person.age}}</h2>
  <h2>{{person.job1.j1.salary}}</h2>
  <button @click="person.name+=1">点击修改姓名</button>
  <button @click="person.age++">点击修改年龄</button>
  <button @click="showROw">点击修改工资</button>
  </div>
</template>

<script>
import {ref,reactive,toRef,toRefs,readonly,shallowReadonly,toRaw,markRaw} from "vue";
//Focus toRaw() 将reactive响应式数据 转为普通数据
//Focus markRaw()  将reactive响应式数据 永远标记为原始数据
export default {
  setup ( props ) {
    let a=ref(123)
    let person = reactive( {
      name: "张三",
      age: 12,
      job1: {
        j1: {
          salary: 20
        }
      }
    } )
    const x=toRefs(person)
    // person=readonly(person)
    function showROw() {
      // const p=toRaw(person)
      // console.log(p);
      // console.log(person);
      let  x=markRaw(a)
      console.log(a);
      console.log(x);
    }
    person=shallowReadonly(person)

    return {
    
      person,
      // 展开x
      ...x,showROw
    }
  }
}
</script>

<style>
.toref-dd{
  background-color: aqua;
}
</style>