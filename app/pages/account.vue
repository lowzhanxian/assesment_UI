<template>
  <v-container class="pa-5" style="">
    <v-card class="pa-4" elevation="3">
      <v-row justify="start" align="center">
        <v-col cols="12" md="6" sm="6"> 
          <v-avatar size="350" class="mt-5 ml-5">
            <img src="~/assets/ZHANXIAN.jpg" alt="Profile Photo" />
          </v-avatar>

        </v-col>

        <v-col cols="12" md="6" sm="6">
          <h1 class="font-weight-bold">Zhanxian Low</h1>
          <p class="text-subtitle-2">Software Frontend Developer</p>
          <p class="text-subtitle-2"><v-icon color="red">mdi-email</v-icon>: <a href="mailto:lowzhanxian9218@gmail.com">lowzhanxian9218@gmail.com</a></p>
          <p class="text-subtitle-2"><v-icon color="green">mdi-phone</v-icon>: +60 12-722 9218</p>
          <p class="text-subtitle-2"><v-icon color="blue">mdi-map-marker</v-icon>: Penang, Malaysia</p>
        </v-col>
      </v-row>

      <v-divider class="my-4 mt-5"></v-divider>

      <h2 class="ml-5 font-weight-bold">My Projects</h2>

      
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layouts: 'account'
});
</script>
<style scoped>
h2 {
  font-family: 'Segoe UI', sans-serif;
  font-size: 28px;
  margin-bottom: 4px;
}

.text-subtitle-2 {
  color: #666;
  margin-bottom: 16px;
}

.v-list-item {
  padding: 12px 0;
}

.v-list-item-title a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.v-list-item-title a:hover {
  color: #1976d2; 
}

.v-avatar img {
  border-radius: 50%;
  border: 3px solid #1976d2;
  object-fit: cover;
}

@media (max-width: 600px) {
  h2 {
    font-size: 22px;
  }

  .v-container {
    padding: 16px !important;
  }

  .v-card {
    padding: 20px !important;
  }

  .v-list-item {
    font-size: 14px;
  }
}
</style>
