<template>
  <v-row>

    <v-col cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
      <v-card class="rounded-lg">
        <v-card-title>SENTIMENT PROPORTION</v-card-title>
          <SentimentProportionChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="8" sm="8" md="8" lg="8" xl="8">
      <v-card class="rounded-lg">
        <v-card-title>TIMELINE</v-card-title>
          <SentimentTimelineChart />
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
      <v-card class="rounded-lg">
        <v-card-title>EMOTION TIMELINE</v-card-title>
       
          <SentimentEmotionTimeline />
       
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title>POSITIVE SENTIMENT TIMELINE</v-card-title>
        <SentimentPositiveSentimentTImeline />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title>POSITIVE SENTIMENT TEXT CLOUD</v-card-title>
        <v-card-text>
          <SentimentPositiveSentimentTextCloud />
        </v-card-text>

      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title>POSITIVE SENTIMENT ACCOUNT</v-card-title>
        <SentimentPositiveSentimentAccount />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title>POSITIVE SENTIMENT HASTAG CLOUD</v-card-title>
        <SentimentPositiveSentimentHashtagCloud />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title>NEGATIVE SENTIMENT TIMELINE</v-card-title>
        <SentimentNegativeSentimentTimeline />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title>NEGATIVE SENTIMENT TEXT CLOUD</v-card-title>
        <SentimentNegativeSentimentTextCloud />

      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title>NEGATIVE SENTIMENT ACCOUNT</v-card-title>
        <SentimentNegativeSentimentAccount />
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card class="rounded-lg">
        <v-card-title>NEGATIVE SENTIMENT HASTAG CLOUD</v-card-title>
        <SentimentNegativeSentimentHashtagCloud />
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import SentimentEmotionTimeline from '~/components/Sentiment/SentimentEmotionTimeline.vue';
import SentimentProportionChart from '~/components/Sentiment/SentimentProportionChart.vue';
import SentimentTimelineChart from '~/components/Sentiment/SentimentTimelineChart.vue';
import SentimentByGenderMale from '~/components/Sentiment/SentimentByGenderMale.vue';
import SentimentByGenderFemale from '~/components/Sentiment/SentimentByGenderFemale.vue';
import SentimentByAgeRangeBellow18A from '~/components/Sentiment/SentimentByAgeRangeBellow18A.vue';
import SentimentByAgeRangeBellow18B from '~/components/Sentiment/SentimentByAgeRangeBellow18B.vue';
import SentimentByAgeRangeBellow18C from '~/components/Sentiment/SentimentByAgeRangeBellow18C.vue';
import SentimentByAgeRangeBellow31 from '~/components/Sentiment/SentimentByAgeRangeBellow31.vue';
import SentimentByAgeRangeBellow41 from '~/components/Sentiment/SentimentByAgeRangeBellow41.vue';
import SentimentByAgeRangeBellow51 from '~/components/Sentiment/SentimentByAgeRangeBellow51.vue';
import SentimentPositiveSentimentTImeline from '~/components/Sentiment/SentimentPositiveSentimentTImeline.vue';
import SentimentPositiveSentimentTextCloud from '~/components/Sentiment/SentimentPositiveSentimentTextCloud.vue';
import SentimentPositiveSentimentAccount from '~/components/Sentiment/SentimentPositiveSentimentAccount.vue';
import SentimentPositiveSentimentHashtagCloud from '~/components/Sentiment/SentimentPositiveSentimentHashtagCloud.vue';
import SentimentNegativeSentimentTimeline from '~/components/Sentiment/SentimentNegativeSentimentTimeline.vue';
import SentimentNegativeSentimentTextCloud from '~/components/Sentiment/SentimentNegativeSentimentTextCloud.vue';
import SentimentNegativeSentimentAccount from '~/components/Sentiment/SentimentNegativeSentimentAccount.vue';
import SentimentNegativeSentimentHashtagCloud from '~/components/Sentiment/SentimentNegativeSentimentHashtagCloud.vue';








definePageMeta({
  layout: 'dashboard',
  middleware: ["auth"],
})
</script>