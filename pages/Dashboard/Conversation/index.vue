<template>
  <v-row>
    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
      <v-card class="rounded-xl">
        <v-toolbar color="transparent" density="compact">
          <div class="ma-4 text-h5 font-weight-bold">
            <Icon class="mr-3" size="25" name="fluent-mdl2:donut-chart"></Icon><span
              class="text-h6 font-weight-bold">TIMELINE</span>
          </div>
        </v-toolbar>
        <v-card-text class="rounded-lg overflow-y-auto pt-2" style="max-height: 540px;">
          <ConversationChronologyTimeLineCard />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
      <v-card class="rounded-xl">
        <v-toolbar color="transparent" density="compact">
          <div class="ma-4 text-h5 font-weight-bold">
            <Icon class="mr-3" size="25" name="fluent-mdl2:donut-chart"></Icon><span
              class="text-h6 font-weight-bold">TIMELINE POST</span>
          </div>
        </v-toolbar>

        <v-card-text class="rounded-lg overflow-y-auto pt-2" style="max-height: 540px;">
          <ConversationChronologyTimeLinePostCard />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
      <v-card class="rounded-xl">
        <v-toolbar color="transparent" density="compact">
          <div class="ma-4 text-h5 font-weight-bold">
            <Icon class="mr-3" size="25" name="fluent-mdl2:donut-chart"></Icon><span
              class="text-h6 font-weight-bold">TIMELINE COMMENT</span>
          </div>
        </v-toolbar>
        <v-card-text class="rounded-lg overflow-y-auto pt-2" style="max-height: 540px;">
          <ConversationChronologyTimeLineCommentCard />
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

  }),
}
</script>