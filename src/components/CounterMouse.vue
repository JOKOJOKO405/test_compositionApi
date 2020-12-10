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
export default {
  props: { 
    times: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      mousePos: { x: 0, y: 0 },
      count: 0,
    }
  },
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
  methods: {
    incrementCount(){
      this.count ++
    },
    updateMouse(e){
      this.mousePos.x = e.clientX
      this.mousePos.y = e.clientY
    }
  }
}
</script>