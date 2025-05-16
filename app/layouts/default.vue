<template>
  <v-app>
    <AppSidebar />
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import AppSidebar from '~/components/sidebar.vue'
</script>
