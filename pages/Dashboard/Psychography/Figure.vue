<template>
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-lg">
          <v-cart-title>
            <h1 class="pl-8 pt-5">Popular Themes </h1>
          </v-cart-title>
          <PsychographyFigurePopularChart/>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
          <PsychographyFigureAthleteChart/>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
          <PsychographyFigureEntertainerChart/>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
          <PsychographyFigureGovermentFigureChart/>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
          <PsychographyFigureMusicianChart/>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
          <PsychographyFigurePublicFigureChart/>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
          <PsychographyFigurePoliticalFigureChart/>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
          <PsychographyFigureReligionFigureChart/>
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