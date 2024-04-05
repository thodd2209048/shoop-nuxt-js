<script setup lang="ts">

interface TopBarMenuLink {
  label: String,
  link: String
}


defineProps(['leftMenuItems', 'rightMenuItems'])

// defineProps(['leftMenuItems', 'rightMenuItems'])
</script>

<template>
  <!--    EXPAND    -->
  <div class="hidden sm:block w-full h-full bg-primary-color ">
    <div class="container h-full flex flex-row p-0 justify-between ">
      <div class="h-full flex flex-row gap-4">
        <router-link v-for="item in leftMenuItems" :key="item.label"
                     :to="item.link">
          <ui-custom-btn :title="item.label" class="h-full primaryBtn"></ui-custom-btn>
        </router-link>
      </div>
      <div class="h-full flex flex-row gap-4">
        <router-link v-for="item in rightMenuItems" :key="item.label"
                     :to="item.link">
          <ui-custom-btn :title="item.label" class="h-full primaryBtn"></ui-custom-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>