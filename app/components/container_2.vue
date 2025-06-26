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
            <v-row class="mt-16 mb-16">
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

            <div class="scroll-wrapper mt-16">
                <div class="scroll-track">
                    <div v-for="(item, index) in [...items , ...items]" :key="index" class="border-card-item">
                        <img :src="item.icon" width="30" height="30" alt="icon" />
                        <span class="ml-3 text-white">{{ item.label }}</span>
                    </div>
                </div>
            </div>
            <v-row class="mt-16 mb-16">
                <v-col>
                    <h2>The perfect </h2>
                    <h2 class="block-down">presentation</h2>
                    <p class="mt-2 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span class="block-down mt-1">Posuere aliquam lectus duis feugiat maecenas penatibus.</span>
                    </p>
                    <v-row class="mt-5">
                        <v-col col="12" md="1">
                            <v-img width="20px" class="mt-5" src="/assets/SVG/tickIcon.svg"></v-img>
                        </v-col>
                        <v-col col="12" md="11">
                            <p class="mt-5 text-white">Lorem ipsum dolor sit amet</p>
                        </v-col>
                    </v-row>
                    <v-row class="tick-details">
                        <v-col col="12" md="1">
                            <v-img width="20px" class="mt-5" src="/assets/SVG/tickIcon.svg"></v-img>
                        </v-col>
                        <v-col col="12" md="11">
                            <p class="mt-5 text-white">Lorem ipsum dolor</p>
                        </v-col>
                    </v-row>
                    <v-row class="tick-details">
                        <v-col col="12" md="1">
                            <v-img width="20px" class="mt-5" src="/assets/SVG/tickIcon.svg"></v-img>
                        </v-col>
                        <v-col col="12" md="11">
                            <p class="mt-5 text-white">Lorem ipsum dolor sit </p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col>
                    <v-img src="/assets/IMG/individual.png"></v-img>
                </v-col>
            </v-row>

            <v-row class="mt-16">
                <v-col>
                    <v-img src="/assets/IMG/teamwork.png"></v-img>
                </v-col>
                <v-col class="ml-16 mt-5">
                    <h2>All-in-one</h2>
                    <h2 class="block-down">platform</h2>
                    <p class="mt-2 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span class="block-down mt-1">Posuere aliquam lectus duis feugiat maecenas penatibus.</span>
                    </p>
                    <v-row class="mt-5">
                        <v-col col="12" md="1">
                            <v-img width="20px" class="mt-5" src="/assets/SVG/tickIcon.svg"></v-img>
                        </v-col>
                        <v-col col="12" md="11">
                            <p class="mt-5 text-white">Lorem ipsum dolor sit amet</p>
                        </v-col>
                    </v-row>
                    <v-row class="tick-details">
                        <v-col col="12" md="1">
                            <v-img width="20px" class="mt-5" src="/assets/SVG/tickIcon.svg"></v-img>
                        </v-col>
                        <v-col col="12" md="11">
                            <p class="mt-5 text-white">Lorem ipsum dolor</p>
                        </v-col>
                    </v-row>
                    <v-row class="tick-details">
                        <v-col col="12" md="1">
                            <v-img width="20px" class="mt-5" src="/assets/SVG/tickIcon.svg"></v-img>
                        </v-col>
                        <v-col col="12" md="11">
                            <p class="mt-5 text-white">Lorem ipsum dolor sit </p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-container>
                <v-row class="mt-10">
                    <v-col cols="12" md="6" lg="6" sm="12" xs="12">
                        <h1 class="ml-10 text-center">Pricing</h1>
                    </v-col>
                    <v-col align="center" cols="12" md="6" lg="6" sm="12" xs="12">
                        <p class="feature-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor in laoreet justo lectus a
                            eget
                            vitae.
                            Tellus id pretium.
                        </p>
                    </v-col>
                </v-row>
            </v-container>


            <v-row class="mt-16 mb-16">
                <v-col v-for="(plan, index) in pricingPlans" :key="index">
                    <v-card elevation="0" class="pricing-card">
                        <v-card-text class="pa-10 text-left">
                            <h2>{{ plan.title }}</h2>
                            <div class="d-flex align-center">
                                <h3 class="pricing-text mt-5 mr-2">{{ plan.price }}</h3>
                                <span class="text-white mt-5">/MONTH</span>
                            </div>
                            <p class="text-white mt-2">{{ plan.description1 }}</p>
                            <p class="text-white">{{ plan.description2 }}</p>

                            <h4 class="mt-5 mb-5">WHAT'S INCLUDED</h4>
                            <div v-for="(feature, i) in plan.features" :key="i">
                                <v-row class="tick-details">
                                    <v-col cols="12" md="1">
                                        <v-img width="20px" class="mt-5"
                                            :style="{ opacity: typeof feature === 'object' && feature.disabled ? 0.5 : 1 }"
                                            src="/assets/SVG/tickIcon.svg"></v-img>
                                    </v-col>
                                    <v-col cols="12" md="11">
                                        <p class="mt-5 text-white">
                                            {{ typeof feature === 'string' ? feature : feature.text }}
                                        </p>
                                    </v-col>
                                </v-row>
                            </div>

                            <v-row class="mt-10 ma-5 d-flex flex-column justify-center">
                                <v-btn class=" btn-get-started">Get Started</v-btn>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-row class="mt-16">
                <v-col cols="12">
                    <h1 class="text">Frequent questions</h1>
                </v-col>
                <v-col cols="8">
                    <v-row justify="end">
                        <v-expansion-panels style="width: 100%;" class="expansion-panels">
                            <v-expansion-panel title="Is Captivate easy to use for a beginner?"
                                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>
                </v-col>


            </v-row>


        </v-container>
    </div>
</template>
<script setup>
import magnetIcon from '@/assets/svg/magnet.svg'
import bankIcon from '@/assets/svg/bank.svg'
import presentIcon from '@/assets/svg/present.svg'
import earnIcon from '@/assets/svg/earn.svg'
import webbIcon from '@/assets/svg/webb.svg'
import caseIcon from '@/assets/svg/case.svg'

const items = [
    { icon: magnetIcon, label: 'Pitch Decks' },
    { icon: bankIcon, label: 'Financial Reports' },
    { icon: presentIcon, label: 'Presentation Decks' },
    { icon: earnIcon, label: 'Earnings' },
    { icon: webbIcon, label: 'Webinars' },
    { icon: caseIcon, label: 'Staff Training' },
]

const pricingPlans = [
  {
    title: 'Starter',
    price: '$24',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium',
    description2: 'orci penatibus sed donec consquet',
    features: [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet consecturer',
      { text: 'Lorem ipsum dolor sit', disabled: true }
    ]
  },
  {
    title: 'Business',
    price: '$72',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium',
    description2: 'orci penatibus sed donec consquet',
    features: [
      'Lorem ipsum dolor sit amet consectetur',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet consecturer',
      { text: 'Lorem ipsum dolor sit', disabled: false }
    ]
  }
]

</script>

<style scoped>
@import '@/assets/container_2.css';
</style>