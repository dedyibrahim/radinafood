<template>
    <v-row>
        <v-col cols="12">
            <v-card>
                <v-card-text>
                  
                    <v-btn-toggle v-model="type" color="grey" variant="outlined" divided rounded="lg" density="comfortable"
                        size="x-small">
                        <v-btn size="x-small" class=" bg-white text-caption"> General</v-btn>
                        <v-btn size="x-small" class=" bg-white text-caption"> Query List</v-btn>
                        <v-btn size="x-small" class=" bg-white text-caption"> Demography Filter</v-btn>
                    </v-btn-toggle>

                    <SettingsAdministratorGeneral v-if="type == 0" />

                    <SettingsAdministratorQueryList v-if="type == 1" />

                    <SettingsAdministratorDemographyFilter v-if="type == 2" />

                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="elevated" class="bg-grey text-capitalize">Cancel</v-btn>
                    <v-btn variant="elevated" class="bg-blue text-capitalize">Save Changes</v-btn>
                </v-card-actions>
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
    data() {
        return {
            type: 0
        }
    },
    methods: {

    }
}
</script>