<template>
  <v-card class="rounded-lg">
    <v-card-title class="font-weight-bold">RECENT GALLERY</v-card-title>  
   <ConversationGalleryRecent/>
 </v-card> 

 <v-card class="rounded-lg mt-4">
  <v-card-title class="font-weight-bold">ALL GALERRY</v-card-title>  
   <v-card-text>
   <ConversationGalleryAll/>
   </v-card-text>
   <v-divider></v-divider>
 
   <div class="text-center">
     <v-pagination
       v-model="page"
       :length="15"
       :total-visible="10"
     ></v-pagination>
   </div>
 </v-card>
 </template>
 
 <script setup>
 definePageMeta({
   layout: 'dashboard',
   middleware: ["auth"],
 })
 </script>