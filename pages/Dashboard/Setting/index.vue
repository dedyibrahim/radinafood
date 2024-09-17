<template>
   <v-row>
      <v-col cols="12" md="12" sm="12" xs="12">
         <SettingsDataExplorer />
      </v-col>

   </v-row>
   <v-dialog persistent v-model="dialog" activator="parent" width="850">
      <v-card rounded="lg" width="900" height="550" class="overflow-hidden">
         <v-card-title>Data Explorer</v-card-title>
         <v-card-subtitle>Select Topic & Account</v-card-subtitle>
         <v-card-text class="overflow-auto" style="max-height: 700px;">
            <v-row>
               <v-col cols="12" md="12" sm="12" xs="12">
                  <v-slide-group v-model="model" selected-class="bg-white" :show-arrows="true">
                     <v-slide-group-item v-for="n in 6" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                        <v-card color="grey-lighten-4" :class="['mr-5 my-2 mx-auto', selectedClass]" height="100"
                           width="100" @click="toggle">
                           <div class="d-flex fill-height align-center justify-center">
                              <v-scale-transition>
                                 <v-icon style="position: absolute;" v-if="isSelected" color="blue-darken-1" size="48"
                                    icon="mdi-check" />
                              </v-scale-transition>
                              <div class="text-center">
                                 <icon name="ep:user" size="50" color="grey"></icon><br>
                                 <span class="text-center " style="font-size: 11px;"> Topic & Account</span>
                              </div>
                           </div>
                        </v-card>
                     </v-slide-group-item>
                  </v-slide-group>
               </v-col>
               <v-col cols="12" md="6" sm="12" xs="12">
                  <div class="text-subtitle-1 text-medium-emphasis">Time</div>
                  <v-row>
                     <v-col>
                        <v-text-field hide-details="" color="blue" size="sm" class="bg-white" density="compact" type="date"
                           variant="outlined" />
                     </v-col>
                     <v-col>
                        <v-text-field hide-details="" color="blue" class="bg-white" density="compact" type="date"
                           variant="outlined" />
                     </v-col>
                  </v-row>
                  <div class="text-subtitle-1 text-medium-emphasis">Platform Source</div>
                  <v-select color="blue" hide-details="" class="bg-white" density="compact" selected="Twitter"
                     variant="outlined" :items="['Twiiter', 'Instagram', 'Tiktok', 'Youtube']" />
                  <div class="text-subtitle-1 text-medium-emphasis">Full Name</div>
                  <v-text-field color="blue" hide-details="" class="bg-white" placeholder="Nama Lengkap" density="compact"
                     variant="outlined" />

               </v-col>
               <v-col cols="12" md="6" sm="12" xs="12">
                  <div class="text-subtitle-1 text-medium-emphasis">Hour</div>

                  <v-row>
                     <v-col>
                        <v-text-field color="blue" hide-details="" class="bg-white" density="compact" type="time"
                           variant="outlined" />
                     </v-col>
                     <v-col>
                        <v-text-field color="blue" hide-details="" class="bg-white" density="compact" type="time"
                           variant="outlined" />
                     </v-col>
                  </v-row>
                  <div class="text-subtitle-1 text-medium-emphasis">Username</div>
                  <v-select hide-details="" color="blue" class="bg-white" prepend-inner-icon="mdi-at" density="compact"
                     selected="Twitter" variant="outlined" :items="['Twiiter', 'Instagram', 'Tiktok', 'Youtube']" />

                  <div class="text-subtitle-1 text-medium-emphasis">Mention Username</div>
                  <v-combobox v-model="select" :items="items" density="compact" multiple variant="outlined">
                     <template v-slot:selection="data">
                        <v-chip :key="JSON.stringify(data.item)" v-bind="data.attrs" :model-value="data.selected"
                           :disabled="data.disabled" size="small" @click:close="data.parent.selectItem(data.item)">
                           <template v-slot:prepend>
                              <v-avatar class="bg-blue" start>{{ data.item.title.slice(0, 1) }}</v-avatar>
                           </template>
                           {{ data.item.title }}
                        </v-chip>
                     </template>
                  </v-combobox>

               </v-col>
            </v-row>
            <div class="text-subtitle-1 text-medium-emphasis">Keyword</div>
            <v-textarea color="blue" class="bg-white" placeholder="Enter Keyword" density="compact" selected="Twitter"
               variant="outlined"></v-textarea>
         </v-card-text>
         <v-card-actions>
            <v-row>
               <v-col><v-btn variant='outlined' block>Reset</v-btn></v-col>
               <v-col><v-btn variant='outlined' @click="dialog = false" block
                     class="bg-light-blue-darken-1">Apply</v-btn></v-col>
            </v-row>

         </v-card-actions>
      </v-card>
   </v-dialog>
</template>
<script setup>
definePageMeta({
   layout: 'dashboard',
   middleware: ["auth"],
})
</script>

<script>
export default {
   data() {
      return {
         dialog: true,
         model: null,
         select: ['Vuetify', 'Programming'],
         items: [
            'Programming',
            'Design',
            'Vue',
            'Vuetify',
         ],
      }
   }
}

</script>