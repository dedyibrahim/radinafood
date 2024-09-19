<template>
  <v-carousel show-arrows="hover" :hide-delimiter-background="true" height="600"> 
    <v-carousel-item v-for="(item, i) in products" :key="i" >
      <v-sheet height="100%" :color="item.color" >
        <v-container style="padding-top: 13%;">
          <v-row>
            <v-col>
              <span class="text-h2 font-weight-bold">{{ item.name }}</span>
              <br />
              <br />
              <span class="text-h6">{{ item.description }}</span> <br />
            </v-col>
            <v-col>
              <v-img height="auto" class="rounded-lg" :src="item.src" />
            </v-col>
          </v-row>
        </v-container> </v-sheet
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          color: "primary",
          src: "./images/banner1.jpg",
          name: "Kulit Tahu",
          description:
            "Kulit Tahu Premium yang Renyah dan Gurih, Sempurna untuk Beragam Hidangan Favorit Anda. Nikmati Tekstur Ringan dan Rasa Autentik!",
        },
        {
          color: "green",
          src: "./images/banner2.jpg",
          name: "Kembang Tahu",
          description:
            "Kembang Tahu Berkualitas Tinggi, Lembut dan Penuh Nutrisi. Pilihan Tepat untuk Sajian Sehat dan Lezat yang Menghangatkan Keluarga.",
        },
        {
          color: "red",
          src: "./images/banner3.jpg",
          name: "Kembang Tahu Batang",
          description:
            "Kembang Tahu Batang dengan Tekstur Padat dan Rasa Alami yang Lezat. Mudah Diolah untuk Beragam Menu Sehat dan Bergizi Setiap Hari.",
        },
        {
          color: "blue",
          src: "./images/banner5.jpg",
          name: "Kembang Tahu Bantal",
          description:
            "Empuk dan Nikmat, Kembang Tahu Bantal Menghadirkan Kelezatan Tahu yang Kaya Gizi dalam Setiap Gigitan. Cocok untuk Berbagai Kreasi Masakan.",
        },
        {
          color: "grey",
          src: "./images/banner4.jpg",
          name: "Kembang Tahu Pita",
          description:
            "Elegan dan Lezat, Kembang Tahu Pita Menambah Sentuhan Indah pada Sajian Anda. Ideal untuk Hidangan Berkelas dengan Rasa yang Tetap Otentik.",
        },
      ],
    };
  },
};
</script>
