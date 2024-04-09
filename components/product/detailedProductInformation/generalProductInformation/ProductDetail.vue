<script setup lang="ts">
defineProps({
  title: {type:String, required: true},

})
</script>

<template>
<div class="generalProductInformation-detail">
  <span>{{title}}</span>
  <slot></slot>
</div>

</template>

<style scoped lang="scss">
.generalProductInformation-detail{
  display: grid;
  grid-template-columns: 10rem auto;
}
</style>