<template>
 <v-row>
    <v-col cols="12" md="6" sm="12" xs="12">
     <v-card > 
      <v-toolbar class="bg-transparent mb-0"> 
        <v-toolbar-title  class="text-subtitle-1 font-weight-bold">Revenue</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </v-toolbar>
      <v-card-text>
           <AudienceDemographyRevenue/>
      </v-card-text>
     </v-card>
    </v-col>
    <v-col cols="12" md="6" sm="12" xs="12">
      <v-card > 
      <v-toolbar class="bg-transparent mb-0"> 
        <v-toolbar-title class="text-subtitle-1 font-weight-bold">User Top Location</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </v-toolbar>
      <v-card-text>
           <AudienceDemographyUserTopLocationChart/>
      </v-card-text>
     </v-card>
    </v-col>
    <v-col cols="12" md="12" sm="12" xs="12">
      <v-card > 
      <v-toolbar class="bg-transparent mb-0"> 
        <v-toolbar-title class="text-subtitle-1 font-weight-bold">User Location</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </v-toolbar>
      <v-card-text>
        <AudienceDemographyUserLocationChart/>
      </v-card-text>
     </v-card>
    </v-col>

    <v-col cols="12" md="4" sm="12" xs="12">
      <v-card > 
      <v-toolbar class="bg-transparent mb-0"> 
        <v-btn icon="mdi-arrow-left"></v-btn>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </v-toolbar>
      <v-card-text>
        <AudienceDemographyTwitterDeviceChart/>
      </v-card-text>
     </v-card>
    </v-col>
    
    <v-col cols="12" md="4" sm="12" xs="12">
      <v-card > 
      <v-toolbar class="bg-transparent mb-0"> 
        <v-toolbar-title class="text-subtitle-1 font-weight-bold">Relationship Status</v-toolbar-title>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </v-toolbar>
      <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt.</v-card-subtitle>
      <v-card-text>
        <AudienceDemographyRelationshipStatusChart/>
      </v-card-text>
     </v-card>
    </v-col>
    
    <v-col cols="12" md="4" sm="12" xs="12">
      <v-card > 
      <v-toolbar class="bg-transparent mb-0"> 
        <v-toolbar-title class="text-subtitle-1 font-weight-bold">Account Status Type</v-toolbar-title>
        <v-btn icon="mdi-heart-outline"></v-btn>
      </v-toolbar>
      <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt.</v-card-subtitle>
      <v-card-text>
        <AudienceDemographyAccountStatusTypeChart/>
      </v-card-text>
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
