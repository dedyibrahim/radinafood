<template>
  <v-row>

    <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
      <v-card class="rounded-lg">
        <v-toolbar color="transparent">
          <v-toolbar-title class='text-capitalize font-weight-bold'>
            ACTIVE ACCOUNTS
          </v-toolbar-title>
          <span class="ma-3">
            <v-btn>
              <Icon name="octicon:kebab-horizontal-16" size="20" class="mt-2"></Icon>
            </v-btn>
          </span>
        </v-toolbar>
        <ResumeContributorActiveAcountsChart/>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>MOST ACTIVE ACCOUNT</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
       <ResumeContributorMostActiveAccount/>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>

      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>ACTIVE ACCOUNTS WITH POSTS</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
       <ResumeContributorActiveAccountsWithPosts/>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>MOST ACTIVE ACCOUNTS (NO MEDIA)</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
       <ResumeContributorMostActiveAccountsNoMedia/>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>ACTIVE ACCOUNTS WITH MOST FANS</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
       <ResumeContributorActiveAccountsWithMostFans/>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>TOP ACCOUNTS COMMENT/REPLY</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
       <ResumeContributorTopAccountsCommentReply/>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>TOP MENTIONED ACCOUNTS ON COMMENT</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
       <ResumeContributorTopMentionedAccountsOnComment/>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>TOP MENTIONED ACCOUNTS ON POSTS</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
       <ResumeContributorTopMentionedAccountsOnPosts/>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" xxl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>MOST ACTIVE ACCOUNT (MEDIA)</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
       <ResumeContributorMostActiveAccountMedia/>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
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