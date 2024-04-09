<script setup lang="ts">

import { ref } from 'vue'



defineProps(['name', 'placeholder'])

const reveal = ref(false)
const toggleReveal = () => {
  reveal.value = !reveal.value
}
</script>

<template>
  <div class="relative w-full">
    <input-text-input :type="reveal?'text' : 'password' "
                :name="name"
                :placeholder="placeholder">
    </input-text-input>
    <Icon @click="toggleReveal"
                       :name="reveal? 'bi:eye-fill' : 'bi:eye-slash-fill'"
    class="absolute top-[1rem] right-[0.3rem] transform -translate-x-1/2 -translate-y-1/2"
    ></Icon>
  </div>
</template>

<style scoped lang="scss">

</style>