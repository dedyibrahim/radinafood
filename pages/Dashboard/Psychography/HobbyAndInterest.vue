<template>
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-lg">
          <v-cart-title>
            <h1 class="pl-8 pt-5">Popular Themes </h1>
          </v-cart-title>
          <PsychographyHobbyAndInterestPopularChart/>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
            <PsychographyHobbyAndInterestCulinaryChart/>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
            <PsychographyHobbyAndInterestCollectionChart/>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
            <PsychographyHobbyAndInterestArtsChart/>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
            <PsychographyHobbyAndInterestEntertainmentChart/>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
            <PsychographyHobbyAndInterestNatureChart/>
        </v-card>
      </v-col>
 
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
            <PsychographyHobbyAndInterestPetsChart/>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
            <PsychographyHobbyAndInterestSportsAndOutdoorChart/>
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