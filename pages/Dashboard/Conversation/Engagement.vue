<template>
  <v-row>
    <v-col cols="12">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          HEADLINE
        </v-card-title>
        <ConversationEngagementHeadLineCard />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          IMPRESSION HISTORY
        </v-card-title>
        <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt</v-card-subtitle>
        <ConversationEngagementImpressionHistoryChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="3" sm="3" md="3" lg="3" xl="3">
      <v-card class="rounded-lg">
        <div class="custom-style">
          <span class="text-caption">ESTIMATED REACH</span>
          <br><span class="text-h5 font-weight-bold">3.944.159.614</span>
          <span><v-btn density="compact" class="text-capitalize rounded-lg" color="#005F73"
              style="font-size:xx-small; z-index: 100;">Sum Of User Followers Count</v-btn></span>
        </div>
        <ConversationEngagementEstimatedReachChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent">
          <v-toolbar-title class='text-capitalize font-weight-bold'>
            ESTIMATED REACH RANGE
          </v-toolbar-title>
          <span class="ma-3">
            <v-btn>
              <Icon name="octicon:kebab-horizontal-16" size="20" class="mt-2"></Icon>
            </v-btn>
          </span>
        </v-toolbar>
        <ConversationEngagementEstimatedReachRangeChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="3" sm="3" md="3" lg="3" xl="3">
      <v-card class="rounded-lg">
        <div class="custom-style2">
          <span class="text-caption">SUM OF ENGAGEMENTS</span>
          <br><span class="text-h5 font-weight-bold">3.944.159.614</span>
          <span><v-btn density="compact" class="text-capitalize rounded-lg" color="#005F73"
              style="font-size:xx-small; z-index: 100;">Sum Of User Followers Count</v-btn></span>
        </div>
        <ConversationEngagementSumOfEngagementsChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          REACH HISTORY
        </v-card-title>
        <ConversationEngagementReachHistoryChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          ENGAGEMENTS HISTORY
        </v-card-title>
        <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt</v-card-subtitle>
        <ConversationEngagementEngagementsHistoryChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          POST TREND
        </v-card-title>
        <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt</v-card-subtitle>
        <ConversationEngagementPostTrendChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          COMMENTS/REPLIES TREND
        </v-card-title>
        <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt</v-card-subtitle>
        <ConversationEngagementCommentsRepliesTrendChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          SHARES TREND
        </v-card-title>
        <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt</v-card-subtitle>
        <ConversationEngagementSharesTrendChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          LIKES/FAVORITES TREND
        </v-card-title>
        <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt</v-card-subtitle>
        <ConversationEngagementLikesFavoritesTrendChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          TOP CONTRIBUTORS BY IMPRESSIONS
        </v-card-title>
        <ConversationEngagementTopContributorsByImpressions />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          TOP CONTRIBUTORS BY MENTIONS
        </v-card-title>
        <ConversationEngagementTopContributorsByMentions />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          POST TYPE
        </v-card-title>
        <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt</v-card-subtitle>
        <ConversationEngagementPostType />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title class="font-weight-bold">
          FAVORITE POST TYPE
        </v-card-title>
        <ConversationEngagementFavoritePostType />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
      <v-card class="rounded-lg mb-3">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-body-1  font-weight-bold'>
            POST TABLE
          </v-toolbar-title>
          <span class="ma-3">
            <Icon name="octicon:kebab-horizontal-16" size="20" class="mr-5">
            </Icon>
          </span>
        </v-toolbar>
        <ConversationEngagementPosstTableChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent" density="compact">
          <div class="ma-4 text-h5 font-weight-bold">
            <Icon class="mr-3" size="25" name="fluent-mdl2:donut-chart"></Icon><span
              class="text-h6 font-weight-bold">TIMELINE</span>
          </div>
        </v-toolbar>
        <ConversationEngagementMostFavoritedPostAndComments />
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
.custom-style {
  position: absolute;
  left: 0%;
  text-align: center;
  top: 9%;
}

.custom-style2 {
  position: absolute;
  left: 0%;
  text-align: center;
  top: 9%;
}
</style>

