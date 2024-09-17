<template>
  <v-row>
    <v-col cols="12">
      <v-card class="rounded-lg">
        <v-cart-title>
          <h1 class="pl-8 pt-5">Business and Economy Chart </h1>
        </v-cart-title>
        <PsychographyBusinessAndEconomyChart />
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card elevation="0" class="rounded-lg">
        <PsychographyBusinessAndEconomyAgricultureChart />
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card elevation="0" class="rounded-lg">
        <PsychographyBusinessAndEconomyCraftChart />
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card elevation="0" class="rounded-lg">
        <PsychographyBusinessAndEconomyEPaymentChart />
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card elevation="0" class="rounded-lg">
        <PsychographyBusinessAndEconomyECommerceChart />
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card elevation="0" class="rounded-lg">
        <PsychographyBusinessAndEconomyFarmingAgribusinessChart />
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card elevation="0" class="rounded-lg">
        <PsychographyBusinessAndEconomyFisheriesAgribusinessChart />
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card elevation="0" class="rounded-lg">
        <PsychographyBusinessAndEconomyRealEstateChart />
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card elevation="0" class="rounded-lg">
        <PsychographyBusinessAndEconomyTradeChart />
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card elevation="0" class="rounded-lg">
        <PsychographyBusinessAndEconomyTransportationChart />
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