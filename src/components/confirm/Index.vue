<template>
  <a-button :type="type">{{name}}</a-button>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { defineProps } from "@vue/runtime-core";

const props = defineProps({
  type:{
    type:String,
    required:true
  },
  name:{
    type:String,
    defalut:'编辑'
  }
})

</script>

<style scoped>

</style>