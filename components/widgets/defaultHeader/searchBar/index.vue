<script setup lang="ts">
import { ref } from 'vue'
import PrimaryLink from "~/components/ui/PrimaryLink.vue";
import HeaderLogo from "~/components/widgets/defaultHeader/searchBar/HeaderLogo.vue";
import SearchInput from "~/components/widgets/defaultHeader/searchBar/SearchInput.vue";


defineProps(['menuItems'])

const isShowMenu = ref(false)
</script>

<template>
  <div class="container h-full px-0 flex flex-col">
    <div class="bg-white h-full">
      <div class=" flex flex-row h-full justify-between items-center p-0 gap-1 sm:gap-4">
        <div
            @click="isShowMenu = !isShowMenu"
            class="flex sm:hidden justify-center items-center h-[50px] w-[50px] p-2 border rounded ">
          <v-icon icon="md:menu" class="h-full" />
        </div>

        <header-logo class="hidden sm:flex"></header-logo>
        <search-input></search-input>
        <div class=" flex justify-center items-center p-2">
          <v-icon icon="mdiCart" color="black" class="cart size-10"  />
        </div>
      </div>
    </div>
    <div
        v-show="isShowMenu"
        class="flex flex-col items-center text-center w-full sm:hidden">
      <primary-link v-for="item in menuItems" :key="item.label"
                    :to="item.link"
                    class="p-1">{{ item.label }}
      </primary-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.cart {

  &:hover {
    cursor: pointer;
  }
}

</style>