<template>
    <v-row>
       <v-col cols="12" md="12" sm="12" xs="12">
        <v-card > 
         <v-toolbar class="bg-transparent mb-0"> 
            
           <v-toolbar-title  class="text-subtitle-1 font-weight-bold">
            <div class="ma-0 text-h5 font-weight-bold">
            <Icon class="mr-2" size="20" name="fluent-mdl2:donut-chart"></Icon><span
              class="text-subtitle-1 font-weight-bold">ACTIVE ACCOUNT</span>
          </div>
           </v-toolbar-title>
       
        </v-toolbar>
         <v-card-text>
      
            <AudienceActivityActiveAccountChart/>
       
        </v-card-text>
        </v-card>
       </v-col>
       <v-col cols="12" md="6" sm="12" xs="12">
         <v-card > 
         <v-toolbar class="bg-transparent mb-0"> 
           <v-toolbar-title class="text-subtitle-1 font-weight-bold">ENGAGEMENTS HISTORY</v-toolbar-title>
          </v-toolbar>
         <v-card-subtitle>Minim dolor in amet nulla laboris enim dolore consequatt.</v-card-subtitle>
         <v-card-text>
            <AudienceActivityEngagementHistorychart/>
        </v-card-text>
        </v-card>
       </v-col>
       <v-col cols="12" md="6" sm="12" xs="12">
         <v-card  image="/bubblebgsmall.png" cover> 
         <v-toolbar class="bg-transparent mb-0"> 
           <v-toolbar-title class="text-subtitle-1 font-weight-bold">HASHTAGS</v-toolbar-title>
           <v-spacer></v-spacer>
           <v-btn icon="mdi-dots-vertical"></v-btn>
         </v-toolbar>
         <v-card-text>
            <AudienceActivityHashtagsChart/>
        </v-card-text>
        </v-card>
       </v-col>
   
       <v-col cols="12" md="7" sm="12" xs="12">
         <v-card > 
         <v-toolbar class="bg-transparent mb-0"> 
           <v-toolbar-title class="text-subtitle-1 font-weight-bold">POSTING & COMMENTS</v-toolbar-title>
           <v-spacer></v-spacer>
           <v-btn icon="mdi-dots-vertical"></v-btn>
         </v-toolbar>
         <v-card-text>
            <AudienceActivityCommentPostingChart/>
       
        </v-card-text>
        </v-card>
       </v-col>
       
       <v-col cols="12" md="5" sm="12" xs="12">
         <v-card > 
         <v-toolbar class="bg-transparent mb-0"> 
           <v-toolbar-title class="text-subtitle-1 font-weight-bold">POST COMPOSITION</v-toolbar-title>
           <v-btn icon="mdi-dots-vertical"></v-btn>
         </v-toolbar>
         <v-card-subtitle>This is a subtitle</v-card-subtitle>
         <v-card-text>
            <AudienceActivityPostCompositionChart/>
        </v-card-text>
        </v-card>
       </v-col>
       
       <v-col cols="12">
         <v-card > 
         <v-toolbar class="bg-transparent mb-0"> 
           <v-toolbar-title class="text-subtitle-1 font-weight-bold">POSTING & COMMENTS</v-toolbar-title>
           <v-btn icon="mdi-heart-outline"></v-btn>
         </v-toolbar>
         <v-card-text>
 
            <AudienceActivityPostingCommentChart/>
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
   