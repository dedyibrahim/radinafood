<template>
  <v-row>
    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent">
          <v-toolbar-title class='text-capitalize text-subtitle-1 font-weight-bold'>
            IMPRESSIONS HISTORY
          </v-toolbar-title>
          <span class="ma-3">
            <v-btn>
              <Icon name="octicon:kebab-horizontal-16" size="20" class="mt-2"></Icon>
            </v-btn>
          </span>
        </v-toolbar>
        <v-card-text>

        </v-card-text>
        <ResumeEngagementImpressionsHistoryChart />
        <v-card-actions>
          Data in person range
          <v-spacer></v-spacer>
          <v-btn color="primary" class="text-subtitle-1">
            Open <Icon name="akar-icons:link-out" size="18" class="ml-2"></Icon>
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="3" xxl="3">
      <v-card class="rounded-lg elevation-0">
        <v-toolbar color="transparent">
          <v-toolbar-title class='text-capitalize text-subtitle-1 font-weight-bold'>
            IMPRESSIONS
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon><Icon name="ic:round-bar-chart" size="30" style="color:#005F73;" class=" mr-1"></Icon>
          </v-btn>
        </v-toolbar>
        <ResumeEngagementImpressions />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="9" xxl="9">
      <v-card class="rounded-lg elevation-0">
        <v-toolbar color="transparent">
          <v-toolbar-title class='text-capitalize text-subtitle-1 font-weight-bold'>
            IMPRESSION RANGE
          </v-toolbar-title>
          <span class="ma-3">
            <v-btn>
              <Icon name="octicon:kebab-horizontal-16" size="20" class="mt-2"></Icon>
            </v-btn>
          </span>
        </v-toolbar>
        <ResumeEngagementImpressionsRange />
        <v-card-actions>
          Data in person range
          <v-spacer></v-spacer>
          <v-btn color="primary" class="text-subtitle-1">
            Open <Icon name="akar-icons:link-out" size="18" class="ml-2"></Icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold text-subtitle-1">
          REACH HISTORY
        </v-card-title>
        <ResumeEngagementReachHistoryChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3" xxl="3">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent">
          <v-toolbar-title class='text-capitalize text-subtitle-1 font-weight-bold'>
        ESTIMATED REACH
          </v-toolbar-title>
          <span class="ma-3">
            <v-btn>
              <Icon name="octicon:kebab-horizontal-16" size="20" class="mt-2"></Icon>
            </v-btn>
          </span>
        </v-toolbar>
        <ResumeEngagementEstimatedReach />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent">
          <v-toolbar-title class='text-capitalize  text-subtitle-1 font-weight-bold'>
            ESTIMATED REACH RANGE
          </v-toolbar-title>
          <span class="ma-3">
            <v-btn>
              <Icon name="octicon:kebab-horizontal-16" size="20" class="mt-2"></Icon>
            </v-btn>
          </span>
        </v-toolbar>
        <ResumeEngagementEstimatedReachRangeChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3" xxl="3">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent">
          <v-toolbar-title class='text-capitalize text-subtitle-1 font-weight-bold  wrap--text'>
            SUM OF ENGAGEMENT
          </v-toolbar-title>
            <v-btn>
              <Icon name="octicon:kebab-horizontal-16" size="20" class="mt-2"></Icon>
            </v-btn>
        </v-toolbar>
        <ResumeEngagementSumOfEngagement />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          TOP CONTRIBUTORS BY IMPRESSIONS
        </v-card-title>
        <ResumeEngagementTopContributorsImpressions />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          TOP CONTRIBUTORS BY MENTIONS
        </v-card-title>
        <ResumeEngagementTopContributorsMentions />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          TOP CONTRIBUTORS BY ENGAGEMENT (NO MEDIA)
        </v-card-title>
        <ResumeEngagementTopContributorsEngagementNoMedia />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          TOP CONTRIBUTORS BY ENGAGEMENTS
        </v-card-title>
        <ResumeEngagementTopContributorsEngagements />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>

definePageMeta({
  layout: 'dashboard',
  middleware: ["auth"],
})
</script>
<style scoped></style>