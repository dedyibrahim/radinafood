<template>
  <v-row>
    <v-col cols="12" md="12" sm="12" xs="12">

      <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            <Icon name="ant-design:signal-filled" size="15" class="mr-1"></Icon>EXPOSURE
          </v-toolbar-title>


        </v-toolbar>

        <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt...</v-card-subtitle>
        <v-card-text>
          <SettingsComparisonExposureChart />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="12" sm="12" xs="12">

      <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            EXPOSE DATA
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <SettingsComparisonExposeDataChart />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col  cols="12" md="12" sm="12" xs="12">
      <v-row>
        <v-col v-for="n in 3" cols="12"  md="4" sm="12" xs="12">
          <v-card elevation="0" class="rounded-lg ">
            <v-toolbar color="transparent" density="compact">
              <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
                Total Post {{ n }}
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <SettingsComparisonListTotalPost />

            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="green" class="text-capitalize">Show More</v-btn>
            </v-card-actions>

          </v-card>

        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12"  md="12" sm="12" xs="12">
      <v-row>
        <v-col v-for="n in 3" cols="12" md="4" sm="12" xs="12">
          <v-card elevation="0" class="rounded-lg ">
            <v-toolbar color="transparent" density="compact">
              <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
                Time Line {{ n }}
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <SettingsComparisonTimeLinePost />

            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="green" class="text-capitalize">Show More</v-btn>
            </v-card-actions>

          </v-card>

        </v-col>
      </v-row>
    </v-col>
  
  </v-row>
  <v-dialog persistent v-model="dialog" width="600">
    <v-card rounded="lg" width="500" height="550" class="overflow-hidden">
      <v-toolbar color="transparent " class="ma-0">
        <v-toolbar-title>
          <Icon name="ion:bar-chart-outline" size="28" color="grey" class="mr-1"></Icon>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-title class="my-0">Select Comparison</v-card-title>
      <v-card-subtitle>Flexible pricing that grows with you.</v-card-subtitle>
      <v-card-text>
        <v-list lines="three" select-strategy="classic">

          <v-card class="my-2 mx-2 " v-for="(n, index) in 3" :value="index" elevation="2">
            <v-list-item>
              <template v-slot:append="{ isActive }">

                <v-list-item-action>
                  <v-checkbox-btn color="blue" :model-value="isActive"></v-checkbox-btn>
                </v-list-item-action>
              </template>

              <template v-slot:prepend="{ isActive }">

                <v-list-item-action class>
                  <Icon name="ph:stack" size="20" color="blue" class="mr-3 mt-3" />
                </v-list-item-action>
              </template>

              <v-list-item-title>Komparasi Pilpres 2024</v-list-item-title>

              <v-list-item-subtitle>
                12 Desember 2023 10:15:32
              </v-list-item-subtitle>
            </v-list-item>
          </v-card>


        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col><v-btn variant='outlined' @click="dialog = false" block>Cancel</v-btn></v-col>
          <v-col><v-btn variant='outlined' @click="dialog = false" block
              class="bg-light-blue-darken-1">Confirm</v-btn></v-col>
        </v-row>

      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
definePageMeta({
  layout: 'dashboard',
  middleware: ["auth"],
})
</script>

<script>
export default {
  data() {
    return {
      dialog: true,
    }
  },
  methods: {

  }
}
</script>