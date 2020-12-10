<template>
  <div @mousemove="updateMouse">
    <div>
      count is {{ count }}, count * {{ times }} is {{ multipleResult }}
      <button @click="incrementCount">+</button>
    </div>
    <p>Mouse is at {{ mousePos.x}} and {{ mousePos.y }}</p>
  </div>
</template>

<script>
import { ref, computed, watch } from '@vue/composition-api'
// 再利用できるよう関数をまとめたファイル↓↓
import { usePosition } from '../util-functions/position'
export default {
  props: { 
    times: {
      type: Number,
      default: 2
    }
  },
  // 第一引数にpropsが取れる
  setup(props){

    /* -------------------------------- 
    ①関数や定義を機能ごとにまとめられる（カウント系）
    →今まではオプションごとにまとめていた
    --------------------------------*/ 

    let count = ref(0) // 書き換えるからlet

    // methods内でrefの値を使う時は.valueをつける
    // テンプレート内では.valueはいらない
    const incrementCount = () => {
      count.value ++
    }

    const multipleResult = computed(() => {
      return count.value * props.times // setup呼び出し時のpropsを使う。thisは使えない
    })

    watch(count, () => { // count の値が変わったら...→コールバック関数
      setTimeout(()=>{
        alert('3秒後')
      }, 3000)
    }) // 第三引数{ lazy: true }でリロードしても表示されない


    /* -------------------------------- 
    ①関数や定義を機能ごとにまとめられる（マウスムーブ系）
    --------------------------------*/ 
    /* -------------------------------- 
    ②再利用性を高める→名前のコンフリクトが起こらない
    --------------------------------*/ 
    const { position: mousePos, updatePosition: updateMouse } = usePosition()


    // テンプレートで使うものは全てreturnする
    return {
      mousePos,
      count,
      incrementCount,
      updateMouse,
      multipleResult,
    }
  },
  // data() {
  //   return {
  //     mousePos: { x: 0, y: 0 },
  //     count: 0,
  //   }
  // },
  // computed: { 
  //   multipleResult(){
  //     return this.count * this.times
  //   }
  // },
  // watch:{
  //   count(){
  //     setTimeout(()=>{
  //       alert('3秒後')
  //     }, 3000)
  //   }
  // },
  // methods: {
  //   incrementCount(){
  //     this.count ++
  //   },
  //   updateMouse(e){
  //     this.mousePos.x = e.clientX
  //     this.mousePos.y = e.clientY
  //   }
  // }
}
</script>