<template>
  <v-row>
    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
      <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            USER LOCATION
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn class="text-capitalize" variant="outlined" size="small">
            Real-Time report
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <ResumeAudienceUserLocation />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-toolbar color="transparent" density="compact">
          <v-btn icon>
            <Icon name="fluent-mdl2:chrome-back" size="20" ></Icon>
          </v-btn>
          <v-spacer></v-spacer>
            <v-btn icon>
              <Icon name="charm:menu-kebab" size="20" ></Icon>
            </v-btn>
        </v-toolbar>
        <v-card-text>
          <ResumeAudienceTwitterDevice />
         <p class="text-h5 font-weight-bold text-center">Twitter Device</p>
        </v-card-text>
        <v-card-actions>
          <p><icon name="mdi:square-rounded" style="color:#437EF7" size="20"></icon> Twitter<br>
          <icon name="mdi:square-rounded" style="color:#CCC" size="20"></icon> UnkNown</p>
          <v-spacer></v-spacer>
          <v-btn  class=" bg-primary" >
                    REFRESH
                </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col ccols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            USER LOCATION (CITY LEVEL)
          </v-toolbar-title>
        </v-toolbar>
        <ResumeAudienceUserLocationCityLevel />
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