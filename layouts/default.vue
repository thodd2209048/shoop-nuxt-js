<script setup lang="ts">

</script>

<template>
  <v-layout>
    <widgets-default-header></widgets-default-header>
    <v-main>
      <v-container>
        <slot/>
      </v-container>
    </v-main>

    <v-footer app>
      <widgets-default-footer></widgets-default-footer>
    </v-footer>
  </v-layout>
</template>

<style scoped>

</style>