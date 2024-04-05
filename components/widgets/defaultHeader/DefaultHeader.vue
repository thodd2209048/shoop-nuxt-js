<script setup lang="ts">

import SearchBar from "~/components/widgets/defaultHeader/searchBar/index.vue";

const leftMenuItems = ref([
  {label: 'Kênh người bán', link: '/manage-shop' },
  {label: 'Trở thành người bán hàng', link: '/' },
])

const rightMenuItems = ref([
  {label: 'Thông báo', link: '/'},
  {label: 'Hỗ trợ', link: '/'},
  {label: 'Đăng ký', link: '/sign-up'},
  {label: 'Đăng nhập', link: '/sign-in'},
])

</script>

<template>
  <v-app-bar>
    <widgets-default-header-menu :leftMenuItems="leftMenuItems" :rightMenuItems="rightMenuItems"></widgets-default-header-menu>
  </v-app-bar>
  <v-app-bar>
    <search-bar></search-bar>
  </v-app-bar>
</template>

<style scoped>

</style>