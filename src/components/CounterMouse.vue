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
import { reactive, ref, computed } from '@vue/composition-api'
export default {
  props: { 
    times: {
      type: Number,
      default: 2
    }
  },
  // 第一引数にpropsが取れる
  setup(props){
    const mousePos = reactive({
      //reactiveはobjectしか入れられない
      x: 0,
      y: 0
    })

    let count = ref(0) // 書き換えるからlet

    // methods内でrefの値を使う時は.valueをつける
    // テンプレート内では.valueはいらない
    const incrementCount = () => {
      count.value ++
    }
    const updateMouse = (e) => {
      mousePos.x = e.clientX
      mousePos.y = e.clientY
    }

    const multipleResult = computed(() => {
      return count.value * props.times // setup呼び出し時のpropsを使う。thisは使えない
    })


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
  watch:{
    count(){
      setTimeout(()=>{
        alert('3秒後')
      }, 3000)
    }
  },
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