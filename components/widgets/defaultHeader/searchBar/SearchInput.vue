<script setup lang="ts">

import CustomBtn from "~/components/ui/CustomBtn.vue";
</script>

<template>
  <div class="flex flex-row h-[50px] grow max-w-xl px-2 border rounded items-center">
    <input class="searchInput w-full flex-grow"/>
    <custom-btn primary-btn
                class="py-1 px-4 sm:px-5 h-[42px] flex primaryBtn rounded">
      <Icon name="simple-line-icons:magnifier" color="white" size="medium"/>
    </custom-btn>
  </div>
</template>

<style lang="scss" scoped>
.searchInput{
  &:focus{
    outline:none;
  }
}
</style>