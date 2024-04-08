<script setup lang="ts">
import {ref} from 'vue'

import HeaderLogo from "~/components/widgets/defaultHeader/searchBar/HeaderLogo.vue";
import SearchInput from "~/components/widgets/defaultHeader/searchBar/SearchInput.vue";
import PrimaryLink from "~/components/global/ui/PrimaryLink.vue";


defineProps(['menuItems'])


</script>

<template>
  <div class="container h-full px-0 flex flex-col">
    <div class="bg-white h-full">
      <div class=" flex flex-row h-full justify-between items-center p-0 gap-1 sm:gap-4">
        <div
            class="flex sm:hidden justify-center items-center h-[50px] w-[50px] p-2 border rounded ">
          <v-menu>
            <template v-slot:activator="{ props }">
              <Icon name="material-symbols:menu" class="h-full size-10" v-bind="props"></Icon>
            </template>

            <v-list>
              <v-list-item
                  v-for="item in menuItems" :key="item.label"
              >
                <v-list-item-title>
                  <primary-link :to="item.link"
                                class="p-1">
                    {{ item.label }}
                  </primary-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <header-logo class="hidden sm:flex"></header-logo>
        <search-input></search-input>
        <div class=" flex justify-center items-center p-2">
          <Icon name="material-symbols:shopping-cart" color="black" class="cart size-10"/>
        </div>
      </div>
    </div>
    <div
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