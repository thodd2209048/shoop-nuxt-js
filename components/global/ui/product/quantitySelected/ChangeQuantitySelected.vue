<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  quantity: {type: Number, required: true}
})

const quantitySelected = ref(0)

const decreaseQuantity = () => {
  if(quantitySelected.value == 0) return;
  quantitySelected.value--
}

const increaseQuantity = () => {
  if(quantitySelected.value == props.quantity) return;
  quantitySelected.value++
}
</script>

<template>
  <div class="wrapper flex flex-row">
    <div @click="decreaseQuantity" class="decreaseBtn btn"> -</div>
    <div class="cell numberCell">{{ quantitySelected }}</div>
    <div @click="increaseQuantity" class="increaseBtn btn"> +</div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  border: 1px solid grey;
}

.btn{
  padding: 2px 1rem;
  cursor: pointer;
  user-select: none;
}

.decreaseBtn{
  border-right: 1px solid grey;
}

.increaseBtn{
  border-left: 1px solid grey;
}

.numberCell{
  padding: 2px 2rem;
}
</style>