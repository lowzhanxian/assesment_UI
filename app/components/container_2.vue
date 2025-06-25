<template>
    <div class="mt-10 pa-10">
        <v-container>
            <v-row justify="center" align="center" class="mt-10">
                <v-col cols="12" md="6" lg="6" sm="12" xs="12">
                    <h1 class="ml-10">Features</h1>
                </v-col>
                <v-col cols="12" md="6" lg="6" sm="12" xs="12">
                    <p class="feature-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor in laoreet justo lectus a eget
                        vitae.
                        Tellus id pretium.
                    </p>
                </v-col>
            </v-row>
        </v-container>

        <v-row class="mt-10" justify="center">
            <v-col class="first-card mr-5" cols="12" md="7" lg="7" sm="12" xs="12">
                <div class="pa-5" justify="center" align="center">
                    <img src="/assets/IMG/designAnimate.png" alt="">
                </div>
                <span class="text-all-in ml-10">ALL-IN-ONE</span>
                <h2 class="ml-10 mb-3 mt-5">Evevrything you need</h2>
                <span class="ml-10 text-white">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</span>
            </v-col>
            <v-col class="second-card pa-6" cols="12" md="3" lg="3" sm="12" xs="12">
                <div class="second-card-content">
                    <span class="text-all-in mt-5">DESIGN</span>
                    <h2 class="my-4">Branding</h2>
                    <p class="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div>
                    <img src="/assets/IMG/font.png" alt="">
                </div>
            </v-col>

        </v-row>
    </div>
</template>
<script setup></script>
<style scoped>
h1 {
    font-size: 48px;
    color: #ffffff;
}

h2 {
    font-size: 36px;
    color: #ffffff;
}

.feature-text {
    font-size: 18px;
    line-height: 1.6;
    max-width: 500px;
    color: #ffffff;
}

.first-card {
    background: linear-gradient(360deg, #11CCA8, #4AC5DF), #0E1A1F;
    background-blend-mode: overlay;
    border-radius: 10px;
}
.second-card{
    background: linear-gradient(360deg, #4AC5DF , #11CCA8 ), #0E1A1F;
    background-blend-mode: overlay;
    border-radius: 10px;
}

.text-all-in {
    display: inline-block;
    border-radius: 5px;
    padding: 8px 10px;
    background-color: #11CCA8;
    letter-spacing: 2px;
}

</style>