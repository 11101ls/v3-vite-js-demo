<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <slot></slot>

  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <button @click="test()">出发传递的自定义事件</button>
      <slot name="footer">
      </slot>
  <span>{{person.firstName}}</span>
  <span>{{person.lastName}}</span>
  <input type="text" v-model="person.fullName">
</template>

<script>
import {ref,reactive,computed} from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  emits:['hello'],
  setup(props,context) {
    // return 
    // console.log(props,"props");
    // console.log(context,"context.attrs");
    // console.log(context.slots,"---slots");
    /* 
      attrs: Proxy    
      emit: (event, ...args) => instance.emit(event, ...args)
      expose: exposed => {…}
      slots: (...)   插槽
      get attrs: ƒ attrs()
      get emit: emit() { return (event, ...args) => {…}
      get slots: ƒ slots()
      [[Prototype]]: Object 
      */
    /* attrs
     */
    let count=ref(1)
    let person=reactive(
     { firstName:"1111",
      lastName:"sss"}
    )
    /* // 计算属性简写
    person.fullName=computed(()=>{
     return  person.firstName+person.lastName
    }) */
    /* 计算属性完整写法 */
    person.fullName=computed({
        get(){

          return  person.firstName+"-"+person.lastName
        },
        set(value){
          const arr=value.split('-');
          person.firstName=arr[0]
          person.lastName=arr[1]
        }
    
    })
    function test(params) {
      context.emit("hello","触发")
    }
    return {count,test,person}
  }
 
}
</script>
