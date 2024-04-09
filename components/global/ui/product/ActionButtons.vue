<script setup lang="ts">

import CustomBtn from "~/components/global/ui/CustomBtn.vue";
</script>

<template>
<div class="flex flex-row gap-5">
  <custom-btn secondary-btn class=" btn">Thêm Vào Giỏ Hàng</custom-btn>
  <custom-btn primary-btn class=" btn">Mua Ngay</custom-btn>
</div>
</template>

<style scoped lang="scss">
.btn {
  width: 15rem;
  padding: 0.8rem 1rem;
}
</style>