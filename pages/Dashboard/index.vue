<template>
  <v-row>
    <v-col cols="12" md="12" sm="12" xs="12">

      <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            <Icon name="ant-design:signal-filled" size="15" class="mr-1"></Icon>EXPOSURE
          </v-toolbar-title>

          <v-spacer></v-spacer>
          <span class="mr-3">
            <Icon name="ic:baseline-ssid-chart" size="25" style="color:#55B8EC;" class=" mr-1"></Icon> + 86%
          </span>
        </v-toolbar>

        <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt...</v-card-subtitle>
        <v-card-text>
          
             <DashboardExposureChart />
            </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="7" sm="12" xs="12">
      <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            ACTIVE ACCOUNT
          </v-toolbar-title>

          <v-spacer></v-spacer>
          <span class="mr-3">
            <Icon color="blue" name="ant-design:signal-filled" size="30" class="mr-1 bg-grey-lighten-3 rounded px-1">
            </Icon>
          </span>
        </v-toolbar>
        <v-card-text>
          <DashboardActiveAccountChart />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col  cols="12" md="5" sm="12" xs="12">
      <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            ISSUE
          </v-toolbar-title>


        </v-toolbar>

        <v-card-text>
          <DashboardIssueChart />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col  cols="12" md="4" sm="12" xs="12">
      <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            TOTAL POSTS COMPARISON
          </v-toolbar-title>
         
        </v-toolbar>

        <v-card-text>
          <DashboardComparisonChart />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col  cols="12" md="4" sm="12" xs="12"> <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            TOTAL POSTS
          </v-toolbar-title>


        </v-toolbar>

        <v-card-text>
          <DashboardListTotalPost />
        </v-card-text>
      </v-card></v-col>
    <v-col cols="12" md="4" sm="12" xs="12"> <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            TOTAL REPLIES
          </v-toolbar-title>

        </v-toolbar>

        <v-card-text>
          <DashboardListTotalReplie />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col  cols="12" md="12" sm="12" xs="12">
      <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            TOPIC LOCATION
           
          </v-toolbar-title>
          <v-spacer></v-spacer>
         <v-btn class="text-capitalize" variant="outlined" size="small">
          Real-Time report
         </v-btn>

        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <DashboardTopicLocationChart/>
        </v-card-text>
      </v-card>

    </v-col>

    <v-col  cols="12" md="4" sm="12" xs="12">
      <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1 font-weight-bold'>
            MOST RETWEET ACCOUNT
          </v-toolbar-title>
         
        </v-toolbar>

        <v-card-text>
          <DashboardListMostRetweetAccounts/>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col  cols="12" md="4" sm="12" xs="12"> <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            TOP ACCOUNTS COMMENTS / REPLY
          </v-toolbar-title>


        </v-toolbar>

        <v-card-text>
          <DashboardListTopAccountsCommentsReply/>
        </v-card-text>
      </v-card></v-col>
    <v-col  cols="12" md="4" sm="12" xs="12"> <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            TOP ACCOUNT RETWEET
          </v-toolbar-title>

        </v-toolbar>

        <v-card-text>
          <DashboardListTopAccountsRetweet/>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="4" sm="12" xs="12"> <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            PERCEPTION RADAR
          </v-toolbar-title>

        </v-toolbar>

        <v-card-text>
          <DashboardTotalPostsComparisonChart/>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="8" sm="12" xs="12"> <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            HASH TAGS
          </v-toolbar-title>
           <v-spacer/>
           <v-btn variant="outlined" color="grey" class=" bg-white text-capitalize mx-1" rounded="lg">
             View Report
            </v-btn>
        </v-toolbar>

        <v-card-text>
          <DashboardHashTagChart/>
        </v-card-text>
      </v-card>
    </v-col>
    
    <v-col cols="12" md="4" sm="12" xs="12">
      <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1 font-weight-bold'>
            PERCEPTION STREAM
          </v-toolbar-title>
         
        </v-toolbar>
        <v-card-subtitle class="text-wrap">Minim dolor in amet nulla laboris enim dolore consequatt.</v-card-subtitle>
    
        <v-card-text>
          <DashboardPerceptionStreamChart/>
        </v-card-text>
        <v-card-subtitle class="text-wrap">Minim dolor in amet nulla laboris enim dolore consequatt.</v-card-subtitle>

      </v-card>
    </v-col>
    <v-col cols="12" md="4" sm="12" xs="12"> <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            USER CREATED TIME
          </v-toolbar-title>
        </v-toolbar>

        <v-card-text >
          <ClientOnly>
            <DashboardUserCreatedTimeChart/>
          </ClientOnly>
         </v-card-text>
         <v-card-subtitle class="text-wrap">Minim dolor in amet nulla laboris enim dolore consequatt.</v-card-subtitle>

      </v-card></v-col>
    <v-col cols="12" md="4" sm="12" xs="12"> <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            ENGAGEMENTS HISTORY
          </v-toolbar-title>

        </v-toolbar>
        <v-card-subtitle  class="text-wrap">Minim dolor in amet nulla laboris enim dolore consequatt.</v-card-subtitle>

        <v-card-text>
          <DashboardEngagementHistoryChart/>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="4" sm="12" xs="12"> <v-card elevation="0" class="rounded-lg ">
        <v-toolbar color="transparent" density="compact">
          <v-toolbar-title class='text-capitalize text-subtitle-1  font-weight-bold'>
            SENTIMENT
          </v-toolbar-title>

        </v-toolbar>
        <v-card-subtitle  class="text-wrap">Minim dolor in amet nulla laboris enim dolore consequatt.</v-card-subtitle>

        <v-card-text>
         <DashboardSentimentChart/>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
definePageMeta({
  layout: 'dashboard',
  middleware: ["auth"],
});
</script>

