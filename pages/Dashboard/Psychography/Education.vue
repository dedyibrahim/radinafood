<template>
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-lg">
          <v-cart-title>
            <h1 class="pl-8 pt-5">Popular Themes </h1>
          </v-cart-title>
          <PsychographyEducationPopularThemesChart />
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
          <PsychographyEducationFormalChart/>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
          <PsychographyEducationNonFormalChart/>
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