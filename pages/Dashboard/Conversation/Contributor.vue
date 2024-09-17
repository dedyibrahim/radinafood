<template>
  <v-row>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>MOST ACTIVE ACCOUNT</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
        <conversation-contributor-top-mentioned-accountson-posts />
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>

      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>ACTIVE ACCOUNTS WITH POSTS</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
        <conversation-contributor-active-accounts-with-posts />
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>MOST ACTIVE ACCOUNTS (NO MEDIA)</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
        <conversation-contributor-most-active-accounts-no-media />
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>ACTIVE ACCOUNTS WITH MOST FANS</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
        <conversation-contributor-active-accounts-with-mostfans />
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>TOP ACCOUNTS COMMENT/REPLY</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
        <conversation-contributor-top-accounts-comment-reply />
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>TOP MENTIONED ACCOUNTS ON COMMENT</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
        <conversation-contributor-top-mentioned-accountson-comment />
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>TOP MENTIONED ACCOUNTS ON POSTS</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
        <conversation-contributor-top-mentioned-accountson-post />
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
      <v-card elevation="0" class="rounded-lg">
        <v-card-title>MOST ACTIVE ACCOUNT (MEDIA)</v-card-title>
        <v-card-text>Minim dolor in amet nulla laborris enim dolare consequatt</v-card-text>
        <conversation-contributor-most-active-account-media />
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