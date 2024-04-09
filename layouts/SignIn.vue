<script setup lang="ts">

</script>

<template>
  <v-layout full-height>
    <widgets-sign-up-sign-in-header></widgets-sign-up-sign-in-header>
    <v-main>
      <v-container>
        <slot/>
      </v-container>

      <v-footer>
        <widgets-sign-in-footer></widgets-sign-in-footer>
      </v-footer>
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss">

</style>