import { reactive } from '@vue/composition-api'
export const usePosition = () => {
  const position = reactive({
    //reactiveはobjectしか入れられない
    x: 0,
    y: 0
  })
  const updatePosition = (e) => {
    position.x = e.clientX
    position.y = e.clientY
  }
  return {
    position, updatePosition
  }
}