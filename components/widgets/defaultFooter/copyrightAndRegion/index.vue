<script setup>

import ContainerWrapper from "../ContainerWrapper.vue";
import ReverseTheRight from "./ReverseTheRight.vue";
import {regions} from "~/states/regions.ts";

</script>

<template>
  <container-wrapper>
    <div class=" grid lg:grid-cols-2 sm:grid-cols-1 gap-y-2">
      <reverse-the-right></reverse-the-right>
      <div class="flex justify-center md:justify-start text-center ">
        <div>
          <span>Quốc gia & Khu vực: </span>
          <ui-tag-list :tags="regions"></ui-tag-list>
        </div>
      </div>
    </div>
  </container-wrapper>
</template>

<style scoped lang="scss">

</style>