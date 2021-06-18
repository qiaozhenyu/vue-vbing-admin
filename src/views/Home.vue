<template>
  <div @click="toIndex">
    Home
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router"; 

  const router = useRouter()

  function toIndex(){
    router.push({name:'index'})
  }
</script>

<style scoped>

</style>