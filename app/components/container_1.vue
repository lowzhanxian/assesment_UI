<template>
    <v-container fluid class="container-1 pa-0 mt-16">
        <v-row>
            <v-col cols="12" md="6" lg="6" sm="12" xs="12" class="mt-5">
                <div class="text-container">
                    <h1>
                        <div>Beautiful</div>
                        <div class="block-down">presentations</div>
                    </h1>
                    <p class="subtitle">
                        Captivate helps you create beautiful, branded presentation decks and experiences to engage your
                        audience and potential customers.
                    </p>
                    <v-btn class="text-btn" elevation="0">Button text</v-btn>
                </div>
            </v-col>
            <v-col cols="12" md="6" lg="6" sm="12" xs="12" class="mt-5">
                <div class="img-fluid" align="center">
                    <img src="/assets/IMG/financialReport.png" alt="">
                </div>
            </v-col>
        </v-row>
        <v-row class="mt-10" justify="center" align="center">
            <v-col cols="auto" class="ml-10">
                <div>
                    <img class="partner-logo" src="/assets/SVG/apertureLogo.svg" alt="">
                </div>
            </v-col>

            <v-col cols="auto" class="ml-10">
                <div>
                    <img class="partner-logo" src="/assets/SVG/northStarLogo.svg" alt="">
                </div>
            </v-col>

            <v-col cols="auto" class="ml-10">
                <div>
                    <img class="partner-logo" src="/assets/SVG/triadLogo.svg" alt="">
                </div>
            </v-col>

            <v-col cols="auto" class="ml-10">
                <div>
                    <img class="partner-logo" src="/assets/SVG/transferMedia.svg" alt="">
                </div>
            </v-col>

            <v-col cols="auto" class="ml-10">
                <div>
                    <img class="partner-logo" src="/assets/SVG/cubic.svg" alt="">
                </div>
            </v-col>

        </v-row>

    </v-container>
</template>

<script setup lang="ts">
</script>
<style scoped>
.text-container {
    padding-left: 60px;
    padding-right: 32px;
    margin-top: 40px;
}

@media (max-width: 960px) {
    .text-container {
        padding-left: 24px;
        padding-right: 24px;
        margin-top: 24px;
        text-align: center;
    }

    h1 {
        font-size: 48px;
    }

    .subtitle {
        margin: 0 auto 24px;
    }

    .cta-btn {
        margin: 0 auto;
    }
}

h1 {
    font-size: 64px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.2;
    margin-bottom: 24px;
}

.block-down {
    display: block;
    margin-top: 4px;
}

.subtitle {
    font-size: 18px;
    color: #cfcfcf;
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 500px;
}
.text-btn {
    color: white;
    font-weight: 600;
    padding: 10px 24px;
    border-radius: 999px;
    text-transform: none;
    background: linear-gradient(360deg, #11CCA8 ), #0E1A1F;
    border: 1px solid transparent;
    transition: 0.3s ease;
}

.img-fluid {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
}
.partner-logo{
    opacity: 0.5;
}

</style>