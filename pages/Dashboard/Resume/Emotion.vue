<template>
  <v-row>
    <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" xxl="8">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent">
          <v-toolbar-title class='text-h6  font-weight-bold'>
            STACKED BAR<br>
            1,000 Value
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <span class="ma-3">
            <v-btn icon>
              <Icon name="tabler:refresh" size="30" class="mt-2">
              </Icon>
            </v-btn>
          </span>
        </v-toolbar>
        <conversation-emotion-stacked-bar-chart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4">
      <v-card elevation="0" class="rounded-lg">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-h6  font-weight-bold'>
            EMOTION
          </v-toolbar-title>

          <v-spacer></v-spacer>
          <span class="ma-3">
            <Icon name="charm:menu-kebab" size="20" class="mt-2">
            </Icon>
          </span>
        </v-toolbar>
        <conversation-emotion-chart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>EMOTION TIMELINE</v-card-title>
        <v-card-text>
          <v-tabs
      v-model="tab"
      bg-color="transparent"
      color="primary"
    >
      <v-tab class="text-capitalize" value="one">Anticipation</v-tab>
      <v-tab class="text-capitalize" value="two">Disgus</v-tab>
      <v-tab class="text-capitalize" value="three">Trust</v-tab>
      <v-tab class="text-capitalize" value="four">Anger</v-tab>
      <v-tab class="text-capitalize" value="five">Joy</v-tab>
      <v-tab class="text-capitalize" value="six">Surprise</v-tab>
      <v-tab class="text-capitalize" value="seven">Fear</v-tab>
    </v-tabs>
        </v-card-text>
        <v-card-text>
           
          <conversation-emotion-timeline-chart />
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

<script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>
