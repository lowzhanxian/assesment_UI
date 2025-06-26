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
                <v-col cols="12" md="6" lg="6" sm="12" xs="12" v-for="(plan, index) in pricingPlans" :key="index">
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
                <v-col cols="12" class="justify-end">
                    <v-row>
                        <v-expansion-panels style="width: 100%;" class="expansion-panels pa-5">
                            <v-expansion-panel v-for="(faq, index) in faqItems" :key="index"
                                class="custom-expansion-panel pa-2" :title="faq.title" :text="faq.text" />
                        </v-expansion-panels>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="mt-16 mb-16">
                <v-col cols="12">
                    <div class="img-fluid" align="center">
                        <img class="partner-logo" src="/assets/SVG/apertureLogo.svg" alt="">
                    </div>
                </v-col>
                <v-row justify="center">
                    <v-col cols="12" md="8" class="text-center">
                        <h4 class="font-weight-regular">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Turpis mauris, libero tellus nec tortor libero arcu, sapien.
                            Venenatis sit morbi ac amet amet.”
                        </h4>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" md="4" class="text-center">
                        <span style="color: #4AC5DF;">Mikayla Smith,Marketing Director</span>
                    </v-col>
                </v-row>
            </v-row>

            <v-row justify="center" align="center" class="mt-16 mb-16 pa-16 card-6 text-center">
                <v-col cols="12">
                    <h1 class="font-weight-bold text-white">Get started today</h1>
                </v-col>
                <v-col cols="12">
                    <p class="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                        Aenean et netus enim pellentesque pharetra semper at faucibus neque ac suspendisse.
                    </p>
                </v-col>
                <v-col cols="12" md="6" class="mt-10">
                    <div class="d-flex align-center justify-space-between"
                        style="overflow: hidden; border: 1px solid #11CCA8; border-radius: 30px; padding-bottom: 10px; background-color: transparent;">
                        <v-text-field v-if="showInput" v-model="email" placeholder="Email address" hide-details
                            variant="plain" density="comfortable" class="pl-5"
                            style="flex: 1; color: white;"></v-text-field>

                        <v-btn
                            :style="{ backgroundColor: '#11CCA8', color: 'black', height: '40px', minWidth: '100px' }"
                            class="rounded-pill mt-2 ml-2" @click="showInput = true">
                            Sign up
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-row class="mt-16">
                <v-col cols="12">
                    <div class="d-flex align-center">
                        <img src="/assets/SVG/captivate.svg" alt="Captivate Logo" class="mr-3" height="40" />

                    </div>
                </v-col>
                <v-col class="mt-16" cols="12" md="6" lg="6" sm="12" xs="12">
                    <span class="landing-page-text">Landing Pages</span>
                    <v-row class="mt-5 text-white">
                        <v-col>
                            <a href="#">Landing page V1</a>
                        </v-col>
                        <v-col>
                            <a href="#">Landing page V4</a>
                        </v-col>
                    </v-row>
                    <v-row class="text-white">
                        <v-col>
                            <a href="#">Landing page V2</a>
                        </v-col>
                        <v-col>
                            <a href="#">Landing page V5</a>
                        </v-col>
                    </v-row>
                    <v-row class="text-white">
                        <v-col>
                            <a href="#">Landing page V3</a>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col class="mt-16" cols="12" md="6" lg="6" sm="12" xs="12">
                    <span class="landing-page-text">Utility Pages</span>
                    <v-row class="mt-5 text-white">
                        <v-col>
                            <a href="#">Login</a>
                        </v-col>
                        <v-col>
                            <a href="#">Password</a>
                        </v-col>
                    </v-row>
                    <v-row class="text-white">
                        <v-col>
                            <a href="#">Sign Up</a>
                        </v-col>
                        <v-col>
                            <a href="#">404</a>
                        </v-col>
                    </v-row>
                    <v-row class="text-white">
                        <v-col>
                            <a href="#">Privacy</a>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class="mt-10 pt-10" justify="space-between" align="center" style="border-top: 1px solid #11CCA8;">
                <v-col cols="12" md="2" class="d-flex align-center">
                    <v-img src="/assets/SVG/facebook.svg" width="20" height="24" alt="Facebook" />
                    <v-img src="/assets/SVG/twitter.svg" width="20" height="24" alt="Twitter" />
                    <v-img src="/assets/SVG/linkedin.svg" width="24" height="24" alt="LinkedIn" />
                    <v-icon size="26" color="white">mdi-instagram</v-icon>
                </v-col>

                <v-col cols="12" md="6" class="text-right">
                    <span class="text-white">© 2025. All Rights Reserved.</span>
                </v-col>
            </v-row>



        </v-container>
    </div>
</template>
<script setup>
import magnetIcon from '@/assets/SVG/magnet.svg'
import bankIcon from '@/assets/SVG/bank.svg'
import presentIcon from '@/assets/SVG/present.svg'
import earnIcon from '@/assets/SVG/earn.svg'
import webbIcon from '@/assets/SVG/webb.svg'
import caseIcon from '@/assets/SVG/case.svg'
// import addIcon from '@/assets/svg/addicon.svg'

const showInput = ref(false)
const email = ref('')

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

const faqItems = [
  {
    title: 'Is Captivate easy to use for a beginner?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'How is it different than PowerPoint?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'How much does it cost to use Captivate?',
    text: 'Lorem ipsum dolor sit amet .',
  },
  {
    title: 'Is Captivate right for my team?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'How do I add members to our plan?',
    text: 'Lorem ipsum dolor sit amet consectetur .',
  },
  {
    title: 'How do I contact support?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]


</script>

<style scoped>
@import '@/assets/container_2.css';
.landing-page-text {
  background: linear-gradient(360deg, #11CCA8, #4AC5DF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  word-spacing: 2px;
  letter-spacing: 2px;
}
a{
    text-decoration: none;
    color: white;
}
</style>