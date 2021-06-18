<template>
  <div @click="toHome">
    Index
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router"; 

  const router = useRouter()

  function toHome(){
    router.push({name:'home'})
  }
</script>

<style scoped>

</style>