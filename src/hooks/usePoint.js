import {   reactive, onMounted, onBeforeUnmount } from "vue"
export default function usepoint(params) {
  // Focus 数据
  let point = reactive( {
    x: 0,
    y: 0
  } )
  //  Focus 方法
  function pointEvent ( event ) {

    point.x = event.pageX
    point.y = event.pageY

  }
  // Focus 生命周期
  onMounted( () => {
    window.addEventListener( 'click', pointEvent )
  } )
  onBeforeUnmount( () => {
    window.removeEventListener( 'click', pointEvent )
  } )
  return point
}
