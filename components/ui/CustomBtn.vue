<!--<script setup lang="ts">-->
<!--import type {ButtonHTMLAttributes, PropType} from 'vue'-->

<!--defineProps({-->
<!--  title: String,-->
<!--  btnIcon: Node,-->
<!--  type: {-->
<!--    type: String as PropType<ButtonHTMLAttributes['type']>,-->
<!--    default: 'button'-->
<!--  },-->
<!--  handleClick: Function,-->
<!--  primaryBtn: Boolean,-->
<!--  secondaryBtn: Boolean,-->
<!--  greyBtn: Boolean,-->
<!--})-->

<!--const emit = defineEmits(['click'])-->

<!--</script>-->

<!--<template>-->
<!--&lt;!&ndash;  <button class="btn whitespace-nowrap"&ndash;&gt;-->
<!--&lt;!&ndash;          :class="{primaryBtn, secondaryBtn, greyBtn}"&ndash;&gt;-->
<!--&lt;!&ndash;          :type="type"&ndash;&gt;-->
<!--&lt;!&ndash;          @click="handleClick || emit('click')">&ndash;&gt;-->
<!--&lt;!&ndash;    {{ title }}&ndash;&gt;-->
<!--&lt;!&ndash;    <slot></slot>&ndash;&gt;-->
<!--&lt;!&ndash;  </button>&ndash;&gt;-->
<!--</template>-->


<!--<style lang="scss" scoped>-->
<!--.btn {-->
<!--  display: flex;-->
<!--  flex-direction: row;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  font-size: 14px;-->
<!--  line-height: 16.94px;-->

<!--  &:hover {-->
<!--    opacity: 0.8;-->
<!--  }-->
<!--}-->

<!--.primaryBtn {-->
<!--  color: white;-->
<!--  //background-color: var(&#45;&#45;primary-color);-->
<!--}-->

<!--.secondaryBtn {-->
<!--  //color: var(&#45;&#45;primary-color);-->
<!--  //border: 1px solid var(&#45;&#45;primary-color)-->
<!--}-->

<!--.greyBtn {-->
<!--  padding: 0.5rem 0.7rem;-->
<!--  border: 2px solid grey;-->
<!--}-->
<!--</style>-->

<script setup lang="ts">
import type { ButtonHTMLAttributes, PropType } from 'vue'

defineProps({
  title: String,
  // btnIcon: Node,
  type: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: 'button'
  },
  primaryBtn: Boolean,
  secondaryBtn: Boolean,
  greyBtn: Boolean,
  handleClick: Function
})

const emit = defineEmits(['click'])

</script>

<template>
  <button class="btn whitespace-nowrap"
          :class="{primaryBtn, secondaryBtn, greyBtn}"
          :type="type"
          @click="handleClick || emit('click')">
    {{ title }}
    <slot></slot>
  </button>
</template>


<style lang="scss" scoped>
.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 16.94px;

  &:hover {
    opacity: 0.8;
  }
}

.primaryBtn {
  color: white;
  background-color: var(--primary-color);
}

.secondaryBtn{
  color: var(--primary-color);
  border: 1px solid var(--primary-color)
}

.greyBtn {
  padding: 0.5rem 0.7rem;
  border: 2px solid grey;
}
</style>