<template>
  <v-row>

    <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5" xxl="5">
      <v-card elevation="0" class="rounded-lg">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-subtitle class="text-capitalize text-body-1 font-weight-bold ml-3">SENTIMENT
            PROPORTION</v-toolbar-subtitle>
          <v-spacer></v-spacer>
          <span class="mr-3">
            <v-btn icon="">
              <Icon name="ph:heart" size="25" style="color:#000000;" class=" mr-1"></Icon>
            </v-btn>
          </span>
        </v-toolbar>
        <v-card-subtitle class="text-wrap">Minim dolor in amet nulla laboris enim dolore consequatt.</v-card-subtitle>
        <ResumeShortAnalisysSentimentProportionChart />
      </v-card>
    </v-col>


    <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="7" xxl="7">
      <v-card elevation="0" class="rounded-lg mb-3"  image="/bubblebg.png">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-subtitle class="text-capitalize text-body-1 font-weight-bold ml-3">HASHTAGS</v-toolbar-subtitle>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt.</v-card-subtitle>
          <ResumeShortAnalisysHashtagsChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="12" xxl="12">
      <v-card elevation="0" density="compact">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class="text-capitalize text-subtitle-1 font-weight-bold">PERCEPTION STREAM</v-toolbar-title>
        </v-toolbar>
        <v-card-subtitle>
          Minim dolor in amet nulla laboris enim dolore consequatt.
        </v-card-subtitle>
        <ResumeShortAnalisysPerceptionChart />
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
definePageMeta({
  layout: 'dashboard',
  middleware: ["auth"],
})
</script>