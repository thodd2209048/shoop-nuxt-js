<script setup lang="ts">

const productsHint = [
  'bàn phím cơ ajazz ac067', 'màn hình máy tính dell ultrasharp u2422h', 'ổ cứng hdd 500gb', 'bàn phím tiếng trung',
  'ổ cứng samsung pm9a1', 'micro cài áo không dây', 'thanh lăn mắt', 'máy tính bảng realme', 'bảng vẽ điện tử wacom cintiq 16',
  'máy đo thân nhiệt', 'razer', 'laptop gaming', 'lenovo legion 5', 'chuột', 'usb'
]
</script>

<template>
  <div class="bg-white">
    <div class="container px-4 py-8">
      <p class="font-bold mb-6">Có Thể Bạn Đang Tìm Kiếm</p>
      <div class="flex flex-row flex-wrap">
        <div v-for="(product, idx) in productsHint" :key="idx"
             class="product px-2">
          <router-link to="#">{{ product }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product {
  border-right: 1px solid black;

  &:last-child {
    border-right: none;
  }
}
</style>