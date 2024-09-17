<template>
  <v-row>
    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title
            class="text-capitalize text-subtitle-1 font-weight-bold"
          >
            <Icon name="ant-design:signal-filled" size="15" class="mr-1"></Icon
            >EXPOSURE
          </v-toolbar-title>

          <v-spacer></v-spacer>
          <span class="mr-3">
            <Icon
              name="ic:baseline-ssid-chart"
              size="25"
              style="color: #55b8ec"
              class="mr-1"
            ></Icon>
            + 86%
          </span>
        </v-toolbar>
        <v-card-subtitle
          >Minim dolor in amet nulla laboris enim dolore
          consequatt...</v-card-subtitle
        >
        <ResumeExposureDashboardExposureChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="3" lg="3" xl="3" xxl="3">
      <v-card elevation="0" class="rounded-lg">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title
            class="text-capitalize text-subtitle-1 font-weight-bold"
            >TOTAL POSTS</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <span class="mr-3">
            <Icon name="charm:menu-kebab"></Icon>
          </span>
        </v-toolbar>
        <ResumeExposureTotalPotsChart />
        <v-divider></v-divider>
        <v-toolbar color="transparent" density="compact">
          <v-spacer></v-spacer>
          <span class="ma-3">
            <v-btn class="text-caption" style="color: #0077b6">Show more</v-btn>
          </span>
        </v-toolbar>
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="3" lg="3" xl="3" xxl="3">
      <v-card elevation="0" class="rounded-lg">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title
            class="text-capitalize text-subtitle-1 font-weight-bold"
            >TOTAL REPLIES</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <span class="mr-3">
            <Icon name="charm:menu-kebab"></Icon>
          </span>
        </v-toolbar>
        <ResumeExposureTotalRepliesChart />
        <v-divider></v-divider>
        <v-toolbar color="transparent" density="compact">
          <v-spacer></v-spacer>
          <span class="ma-3">
            <v-btn class="text-caption" style="color: #0077b6">Show more</v-btn>
          </span>
        </v-toolbar>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5" xxl="5">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title class="text-capitalize text-subtitle-1 font-weight-bold"
          >PERCEPTION STREAM</v-card-title
        >
        <v-card-subtitle
          >Minim dolor in amet nulla laboris enim dolore
          consequatt...</v-card-subtitle
        >
        <ResumeExposurePerceptionStream />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="7" xxl="7">
      <v-card elevation="0" class="rounded-lg">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title
            class="text-capitalize text-subtitle-1 font-weight-bold"
            >CITY OF TOPIC LOCATION</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-btn class="text-subtitle-1"  variant="outlined"
            >Real-time report</v-btn
          >
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <p class="text-h4 mb-5 font-weight-bold ">10.8 K</p>
          <ResumeExposureCityOfTopicChart />
       
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: ["auth"],
});
</script>
