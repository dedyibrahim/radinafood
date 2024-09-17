<template>
  <v-row>
    <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="4" xxl="4">
      <ResumeVisualDataGallery />
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3" xxl="4">
      <ResumeVisualDataEmpatCard />
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4">
      <v-card class="rounded-lg">
        <v-toolbar class="bg-transparent">
          <v-toolbar-title class="font-weight-bold text-subtitle-1"> PLATFORM </v-toolbar-title>
            <v-btn icon>
              <Icon
                name="iconamoon:menu-kebab-horizontal-bold"
                size="20"
              ></Icon>
            </v-btn>
        </v-toolbar>
        <ResumeVisualDataPlatform />
        <v-card-actions>
            <span class="text-medium-emphasis">Total of all counterparty balances</span>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" xxl="8">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent">
          <v-toolbar-title class="font-weight-bold text-subtitle-1">
            VISUAL - EXPOSURE
          </v-toolbar-title>
        </v-toolbar>
        <ResumeVisualDataVisualExposure />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent">
          <v-toolbar-title class="font-weight-bold text-subtitle-1">
            VISUAL - ACTIVE ACCOUNTS
          </v-toolbar-title>
        </v-toolbar>
        <ResumeVisualDataVisualActiveAccounts />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5" xxl="5">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent">
          <v-toolbar-title class="font-weight-bold text-subtitle-1"> KEYWORD </v-toolbar-title>
        </v-toolbar>
        <v-card-text>

            <ResumeVisualDataKeyword />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="7" xxl="7">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent">
          <v-toolbar-title class="font-weight-bold text-subtitle-1">
            SENTIMENT HISTORY
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <ResumeVisualDataSentimentHistory />
     
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent" class="font-weight-bold" density="compact">
            <v-toolbar-ttitle>
                <Icon class="ml-3" size="20" name="fluent-mdl2:donut-chart"></Icon>       SENTIMENT PROPORTION
            </v-toolbar-ttitle>
         
        </v-toolbar>
        <ResumeVisualDataSentimentProportion />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent" class="font-weight-bold" density="compact">
            <v-toolbar-ttitle>
                <Icon class="ml-3" size="20" name="fluent-mdl2:donut-chart"></Icon>       EMOTION
            </v-toolbar-ttitle>
         
        </v-toolbar>
        <ResumeVisualDataEmotionChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent" class="font-weight-bold" density="compact">
            <v-toolbar-ttitle>
                <Icon class="ml-3" size="20" name="fluent-mdl2:donut-chart"></Icon>      VISUAL - EXPOSURE DETAIL
            </v-toolbar-ttitle>

        </v-toolbar>
        <ResumeVisualDataVisualExposureDetail/>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent" class="font-weight-bold" density="compact">
            <v-toolbar-ttitle>
                <Icon class="ml-3" size="20" name="fluent-mdl2:donut-chart"></Icon>      VISUAL - LOGO
            </v-toolbar-ttitle>
         
        </v-toolbar>

        <ResumeVisualDataVisualLogo />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent" class="font-weight-bold" density="compact">
            <v-toolbar-ttitle>
                <Icon class="ml-3" size="20" name="fluent-mdl2:donut-chart"></Icon>      VISUAL - PERSON
            </v-toolbar-ttitle>
         
        </v-toolbar>
        <ResumeVisualDataVisualPerson />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" xxl="8">
      <v-card class="rounded-lg" height="400px">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class="text-capitalize text-subtitle-1 font-weight-bold">
            VISUAL - FREQUENTLY DATA
          </v-toolbar-title>
          
        </v-toolbar>
        <ResumeVisualDataVisualFrequentlyData />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" xxl="4">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent" class="font-weight-bold" density="compact">
            <v-toolbar-ttitle>
                <Icon class="ml-3" size="20" name="fluent-mdl2:donut-chart"></Icon>      VISUAL - TOP POST
            </v-toolbar-ttitle>
         
        </v-toolbar>
        <v-card-text style="max-height:350px" class="overflow-y-auto ">
            <ResumeVisualDataVisualTopPost />
    
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5" xxl="5">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent">
          <v-toolbar-title class="font-weight-bold text-subtitle-1">
            VISUAL - ENGAGEMENT HISTORY
          </v-toolbar-title>
        </v-toolbar>
        <ResumeVisualDataVisualEngagementHistory />
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
