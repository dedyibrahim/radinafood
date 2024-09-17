<template>
   <v-row>
      <v-col cols="12"  xs="12" sm="12" md="12" lg="12" xl="12">
         <v-card class="rounded-lg mb-3" image="/bubblebg.png">
            <ConversationIssuesTopIssuesChart />
         </v-card>
      </v-col>

      <v-col cols="12"  xs="12" sm="12" md="12" lg="12" xl="12">
         <v-card class="rounded-lg">
            <div class="ma-4 text-h5 font-weight-bold">
               <Icon class="mr-3" size="25" name="fluent-mdl2:donut-chart"></Icon><span
                  class="text-h6 font-weight-bold">CONTENT CATEGORY</span>
            </div>
            <ConversationIssuesIssueContentCategoryChart />
         </v-card>
      </v-col>
   </v-row>

   <v-row>
      <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
         <v-card class="rounded-lg">
            <v-card-title class="font-weight-bold">TOP ISUES ON POTS</v-card-title>
            <v-card-text>Minim dolor in amet nulla laboris enim dolore consequatt.</v-card-text>
            <ConversationIssuesTopIssuesOnPostsChart />
         </v-card>
      </v-col>
      <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
         <v-card class="rounded-lg">
            <v-toolbar color="transparent" density="compact">
               <v-toolbar-title class='text-h6  font-weight-bold'>
                  TOP POST ON COMMENTS
               </v-toolbar-title>

               <span class="ma-3">
                  <Icon name="charm:menu-kebab" size="20" class="mt-2">
                  </Icon>
               </span>
            </v-toolbar>
            <ConversationIssuesTopIssuesCommentChart />
         </v-card>
      </v-col>
      <v-col cols="12">


      </v-col>
   </v-row>
</template>

<script setup>
definePageMeta({
   layout: 'dashboard',
   middleware: ["auth"],
})
</script>
