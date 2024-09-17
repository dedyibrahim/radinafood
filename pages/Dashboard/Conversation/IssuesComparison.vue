<template>
  <v-row>
    
    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
      <v-card class="rounded-lg">
        <v-card-title>TOP ISSUES</v-card-title>
        <v-card-text>
          <ConversationIssuesComparisonTopIssues/>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
      <v-card elevation="3" class="rounded-lg">
        <v-card-title>TOP 25 RELATED</v-card-title>
          <ConversationIssuesComparisonTop25/>
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