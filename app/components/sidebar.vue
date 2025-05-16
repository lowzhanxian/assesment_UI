<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    app
    @click="rail = false"
  >
    <v-list>
      <v-list-item
        prepend-icon="mdi-account-circle"
        title="zhanxian"
      >
        <template #append>
          <v-btn
            icon="mdi-chevron-left"
            variant="text"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-city"
        title="Dashboard"
        to="/dashboard"
      />
      <v-list-item
        prepend-icon="mdi-account"
        title="My Account"
        to="/account"
      />
      <v-list-item
        prepend-icon="mdi-cog"
        title="Settings"
        to="/settings"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(true)
const rail = ref(true)
</script>
