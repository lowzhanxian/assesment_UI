<template>
    <div class="mt-10 pa-10">
        <v-container>
            <v-row class="mt-10">
                <v-col cols="12" md="6" lg="6" sm="12" xs="12">
                    <h1 class="ml-10 text-center">Features</h1>
                </v-col>
                <v-col align="center" cols="12" md="6" lg="6" sm="12" xs="12">
                    <p class="feature-text text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor in laoreet justo lectus a eget
                        vitae.
                        Tellus id pretium.
                    </p>
                </v-col>
            </v-row>
        </v-container>

        <v-row class="mt-10" justify="center">
            <v-col class="first-card mr-5 mt-10" cols="12" md="7" lg="7" sm="12" xs="12">
                <div class="pa-5" justify="center" align="center">
                    <img src="/assets/IMG/designAnimate.png" alt="">
                </div>
                <span class="text-all-in ml-10">ALL-IN-ONE</span>
                <h2 class="ml-10 mb-3 mt-5">Evevrything you need</h2>
                <span class="ml-10 text-white">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</span>
            </v-col>
            <v-col class="second-card pa-6 mt-10" cols="12" md="3" lg="3" sm="8" xs="8">
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
        <v-container>
            <v-row class="card-3 mt-16 pa-10">
                <v-col class="d-flex flex-column justify-center">
                    <div style="max-width: 800px;">
                        <span class="text-all-in mb-5">
                            Templates
                        </span>
                        <h2>Create a beutiful presentation in minutes</h2>
                        <p class="text-white mt-5">Lorem ipsum dolor sit amet,consectetur adipiscing elit.Sed purus au,
                            non velit uy nisi. Arcu orci id aliquet elementum in.</p>
                    </div>
                </v-col>
                <v-col class="justify-center">
                    <div>
                        <img src="/assets/IMG/allin1.png" alt="">
                    </div>
                </v-col>
            </v-row>
            <v-row class="mt-16">
                <v-col col="12" md="6" lg="6" sm="12" xs="12" class="card-4 mt-10 mr-15" style="position: relative;">
                    <v-img src="/assets/IMG/video.png" class="video-img" cover height="250px" width="95%"></v-img>
                    <div class="card-content pa-6">
                        <span class="text-all-in mb-3">LIVESTREAM</span>
                        <h2 class="mb-2">Broadcast to the world</h2>
                        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </v-col>
                <v-col col="12" md="5" lg="5" sm="12" xs="12" class="pa-10 mt-10 card-5">
                    <span class="text-all-in  mt-5">ANALYTICS</span>
                    <h2 class="mt-5 ">Track your performance</h2>
                    <p class="text-white mt-2 ">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                    <v-img class="mt-5" src="/assets/IMG/statistic.png"></v-img>
                </v-col>
            </v-row>

            <!-- later do -->
            <v-row class="mt-10" justify="center">
                <v-col v-for="(item, index) in items" :key="index" cols="12" sm="6" md="4" lg="2">
                    <div class="border-card d-flex flex-column align-center pa-4">
                        <img :src="item.icon" width="40" height="40" alt="icon" />
                        <span class="mt-4 text-white">{{ item.label }}</span>
                    </div>
                </v-col>
            </v-row>

            <v-row>
                <v-col>

                </v-col>
                <v-col></v-col>

            </v-row>

        </v-container>
    </div>
</template>
<script setup>
const items = [
  { icon: '/svg/pitchDecks.svg', label: 'Pitch Decks' },
  { icon: '/svg/financial.svg', label: 'Financial Reports' },
  { icon: '/svg/presentation.svg', label: 'Presentation Decks' },
  { icon: '/svg/earning.svg', label: 'Earnings' },
  { icon: '/svg/webinar.svg', label: 'Webinars' },
  { icon: '/svg/staff.svg', label: 'Staff Training' },
]
</script>

<style scoped>
.video-img {
  position: absolute;
  top: 0;
  right: 0px;
  /* width: 90%; */
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  object-fit: cover;
  z-index: 1;
}
.card-content {
  position: relative;
  z-index: 2;
  margin-top: 250px; 
}
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
    border-radius: 40px;
}
.second-card{
    background: linear-gradient(360deg, #4AC5DF , #11CCA8 ), #0E1A1F;
    background-blend-mode: overlay;
    border-radius: 40px;
}
.card-3, .card-4 ,.card-5{
    background: linear-gradient(360deg, #11CCA8, #4AC5DF), #0E1A1F;
    background-blend-mode: overlay;
    border-radius: 40px;
}
.text-all-in {
    display: inline-block;
    border-radius: 5px;
    padding: 8px 10px;
    background-color: #11CCA8;
    letter-spacing: 2px;
}
.border-card {
  border: 1px solid #11CCA8;
  border-radius: 12px;
  background-color: #0E1A1F;
  transition: 0.3s ease;
}
.border-card:hover {
  background-color: rgba(17, 204, 168, 0.1);
  transform: translateY(-4px);
}

</style>