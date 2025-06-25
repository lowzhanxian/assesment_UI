<template>
    <v-container class="pa-0">
        <v-card class="header-card d-flex align-center justify-space-between pa-6" elevation="0" rounded="xl">
            <!-- Logo -->
            <div class="d-flex align-center">
                <div class="glow-dot mr-3"></div>
                <span class="text-h5 font-weight-bold text-white">Captivate</span>
            </div>

            <v-tabs v-model="tab" class="hidden-sm-and-down" align-tabs="center" background-color="transparent"
                color="white" hide-slider selectedd >
                <v-tab v-for="item in tabs" :key="item">{{ item }}</v-tab>
            </v-tabs>

            <!-- Mobile Burger -->
            <v-btn icon class="hidden-md-and-up" @click="drawer = !drawer">
                <v-icon color="black">mdi-menu</v-icon>
            </v-btn>

            <!-- Right Buttons (Desktop only) -->
            <div class="d-flex align-center gap-4" v-if="mdAndUp">
                <span class="nav-link">Log in</span>
                <v-btn class="rounded-pill ml-5 px-6" style="background: #11CCA8">
                    Get started
                </v-btn>
            </div>



        </v-card>

        <!-- Mobile Drawer -->
        <v-navigation-drawer v-model="drawer" temporary class="header-drawer" location="right">
            <v-list>
                <v-list-item v-for="item in tabs" :key="item" @click="drawer = false">
                    <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <!-- Mobile Drawer Items -->
                <v-list-item v-if="smAndDown" @click="drawer = false">
                    <v-list-item-title>Log in</v-list-item-title>
                </v-list-item>

                <v-list-item v-if="smAndDown">
                    <v-btn block style="background: #11CCA8">Get started</v-btn>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
const { smAndDown, mdAndUp } = useDisplay()


const tab = ref(null)
const drawer = ref(false)
const tabs = ['Features', 'Pricing', 'FAQ']
</script>

<style scoped>
.header-card {
    background: linear-gradient(90deg, #11CCA8, #4AC5DF), #0E1A1F;
    background-blend-mode: overlay;
}

.glow-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: radial-gradient(circle, #00d4ff 0%, #00ffa3 100%);
    box-shadow: 0 0 10px #11CCA8, 0 0 5px #4AC5DF, 0 0 12px #4AC5DF;
}

.nav-link {
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s;
}

.nav-link:hover {
    color: #00d4ff;
}

.header-drawer {
    background-color: #0E1A1F;
    color: white;
}
</style>
