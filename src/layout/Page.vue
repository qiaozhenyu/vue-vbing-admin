<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <blogo></blogo>
      <bmenu></bmenu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <bcrumb></bcrumb>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import bmenu from '../components/menu/Index.vue'
import blogo from '../components/logo/Index.vue'
import bcrumb from '../components/breadcrumb/Index.vue'
import { ref } from 'vue';
const collapsed = ref<boolean>(false)
</script>

