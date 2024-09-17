<template>
    <v-row align="end" class="profile">
        <v-col cols="12" md="2" sm="12" xs="12" class=" text-center pa-0 ma-0">
            <v-avatar class="custom-foto" size="170" link>
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
            </v-avatar>

        </v-col>
        <v-col cols="12" md="2" sm="12" xs="12"  >
            <span class=" mt-7 text-h6 font-weight-bold">{{useStore().full_name}}</span><br>
            <span class=" mt-7 text-medium-emphasis">{{ useStore().email }}</span>
            <v-spacer></v-spacer>
        </v-col>
        <v-col></v-col>
        <v-col cols="12" md="3" sm="12" xs="12" class="text-center">
            <v-btn class="text-capitalize " prepend-icon="mdi-share-variant-outline"> Share</v-btn>
            <v-btn class="text-capitalize ml-2" color="primary"> View Profile</v-btn>

        </v-col>

        <v-col cols="12" class="pa-0 mt-5">
            <v-card  elevation="0">
               <v-card-text>
                <v-btn class="text-capitalize" @click="menu = 0"> Profile</v-btn>
                <v-btn class="text-capitalize ml-1" @click="menu = 1"> Password</v-btn>

               </v-card-text>
              
            </v-card>
        </v-col>
        <v-row>
            <v-col cols="12">
                <ProfileDetailProfile v-if="menu == 0" />
                <ProfilePassword v-else />

            </v-col>
        </v-row>
    </v-row>
</template>


<script setup>
definePageMeta({
    layout: 'profile',
    middleware: ["auth"],
})
</script>

<script>
export default {
    data() {
        return {
            menu: 0,
        }
    }
}

</script>

<style>
.profile {
    margin-top: 12%;

}

.custom-foto {
    border: 5px solid white;
    border-radius: 50%;
}
</style>