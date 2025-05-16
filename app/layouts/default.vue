<template>
  <v-app>
    <AppSidebar v-model:drawer="drawer" />
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import AppSidebar from '~/components/sidebar.vue'

const drawer = ref(true)
</script>
