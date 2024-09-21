<template>

<v-sheet class="bg-grey-lighten-3">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="12" sm="12" xs="12">
          <p class="text-h4 text-center font-weight-bold text-black">
            Distri Busi
          </p>
          <p class="text-h6 text-center text-grey-darken-3">
            Produk kami telah kami distribusikan kebeberapa tempat dibawah ini, kunjungi dan rasakan sensasi lembutnya kulit tahu.
          </p>

          <v-row>
            <v-col
              cols="12"
              sm="2"
              xs="1"
              md="2"
              v-for="n in 4"
            >
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  class="mx-auto mt-5 elevation-0 bg-transparent"
                  v-bind="props"
                  :elevation="isHovering ? 12 : 2"
                  :class="{
                    'text-black on-hover  animate__animated animate__pulse':
                      isHovering,
                  }"
                >
                  <v-img
                    width="220px"
                    cover
                    class="rounded-lg mx-auto"
                    :src="'/images/client/' + n + '.png'"
                  />
                </v-card>
              </v-hover>
            </v-col>
          </v-row> </v-col></v-row></v-container
  ></v-sheet>
</template>