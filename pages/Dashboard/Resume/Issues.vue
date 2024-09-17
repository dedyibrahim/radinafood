<template>
  <v-row>
    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
      <v-card image="/bubblebg.png" elevation="0" class="rounded-lg">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class="text-capitalize text-subtitle-1 font-weight-bold">TOP ISUES</v-toolbar-title>
        </v-toolbar>
        <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt...</v-card-subtitle>
       <v-card-text>
        <ResumeIsuesTopIsues />
     
       </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
      <v-card image="/bubblebg.png" elevation="0" class="rounded-lg">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class="text-capitalize text-subtitle-1 font-weight-bold">CONTENT CATEGORY</v-toolbar-title>
        </v-toolbar>
        <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt...</v-card-subtitle>
        <v-card-text>
          <ResumeIsuesContentCategory/>
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

<style scoped></style>