<template>
  <v-row>
    <v-col cols="12" xs="8" sm="8" md="8" lg="8" xl="8">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent">
          <v-toolbar-title class='text-h6  font-weight-bold'>
            STACKED BAR<br>
            1,000 Value
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <span class="ma-3">
            <v-btn>
              <Icon name="tabler:refresh" size="20" class="mt-2">
              </Icon>
            </v-btn>
          </span>
        </v-toolbar>
        <conversation-emotion-stacked-bar-chart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
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

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>EMOTION TIMELINE</v-card-title>
        <conversation-emotion-timeline-chart />
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
<style>
.custom-style-emotion {
  position: absolute;
  left: 3%;
  text-align: left;
  top: 1%;
}
</style>