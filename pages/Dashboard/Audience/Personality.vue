<template>
  <v-row>
    <v-col cols="12"  xs="12" sm="12" md="12" lg="12" xl="12">
       <v-card class="rounded-lg mb-3" image="/bubblebg.png">
        <v-card-title class='font-weight-bold'>THE MYERS-BRIGGS INDICATOR (MBTI)</v-card-title>
        <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt.</v-card-subtitle>
        <AudiencePersonalityChart/>
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
 