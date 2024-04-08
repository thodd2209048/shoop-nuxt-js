<script setup lang="ts">

import SearchBar from "~/components/widgets/defaultHeader/searchBar/index.vue";
import {ref} from "vue";

const leftMenuItems = ref([
  {label: 'Kênh người bán', link: '/manage-shop'},
  {label: 'Trở thành người bán hàng', link: '/'},
])

const rightMenuItems = ref([
  {label: 'Thông báo', link: '/'},
  {label: 'Hỗ trợ', link: '/'},
  {label: 'Đăng ký', link: '/sign-up'},
  {label: 'Đăng nhập', link: '/sign-in'},
])

const menuItems = ref([...leftMenuItems.value,...rightMenuItems.value])
</script>

<template>

    <v-app-bar :elevation="0" class="d-none d-sm-block">
      <widgets-default-header-menu :leftMenuItems="leftMenuItems"
                                   :rightMenuItems="rightMenuItems"></widgets-default-header-menu>
    </v-app-bar>

    <v-app-bar class="searchBar">
      <search-bar :menu-items="menuItems"></search-bar>
    </v-app-bar>


</template>

<style scoped>
.searchBar {
  top: 0 !important;
}

@media only screen and (min-width: 600px){
  .searchBar{
    top: 64px !important;
  }
}
</style>