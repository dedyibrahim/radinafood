<template>
  <v-row>

    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent">
          <v-toolbar-title class='text-capitalize font-weight-bold'>
            SENTIMENT PROPORTION
          </v-toolbar-title>
          <span class="ma-3">
            <v-btn>
              <Icon name="octicon:kebab-horizontal-16" size="20" class="mt-2"></Icon>
            </v-btn>
          </span>
        </v-toolbar>
        <ResumeSentimentProportion/>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" xxl="8">
      <v-card class="rounded-lg">
        <v-card-title>TIMELINE</v-card-title>
          <ResumeSentimentTimelineChart/>
      </v-card>
    </v-col> 

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
      <v-card class="rounded-lg">
        <v-card-title>EMOTION TIMELINE</v-card-title>
        <v-card-text>
          <v-tabs
      v-model="tab"
      bg-color="transparent"
      color="primary"
    >
      <v-tab class="text-capitalize" value="one">Netral</v-tab>
      <v-tab class="text-capitalize" value="two">Positive</v-tab>
      <v-tab class="text-capitalize" value="three">Negatif</v-tab>
    </v-tabs>
        </v-card-text>
        <v-card-text>

          <ResumeSentimentEmotiontimeline/>
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