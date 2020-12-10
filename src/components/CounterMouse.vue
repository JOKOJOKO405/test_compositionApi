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
import { reactive, ref } from '@vue/composition-api'
export default {
  props: { 
    times: {
      type: Number,
      default: 2
    }
  },
  setup(){
    const mousePos = reactive({
      x: 0,
      y: 0
    })
    let count = ref(0)

    const incrementCount = () => {
      count.value ++
    }
    const updateMouse= (e) => {
      mousePos.x = e.clientX
      mousePos.y = e.clientY
    }

    return {
      mousePos,
      count,
      incrementCount,
      updateMouse,
    }
  },
  // data() {
  //   return {
  //     mousePos: { x: 0, y: 0 },
  //     count: 0,
  //   }
  // },
  computed: { 
    multipleResult(){
      return this.count * this.times
    }
  },
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