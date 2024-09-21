<template>
  <v-sheet class="bg-white">
    <v-container>
      <v-row class="my-16">
        <v-col
          cols="12"
          md="6"
          sm="6"
          xs="6"
          @transition-enter="onEnter"
          @transition-leave="onLeave"
        >
          <p class="text-h6 font-weight-bold text-black">Why Chose Us</p>
          <p class="text-h4 font-weight-bold text-black">Radina Food</p>
          <p class="text-h6 text-justify mt-6">
            Produk kami menggunakan kedelai berkualitas tinggi yang diolah
            secara alami tanpa bahan pengawet. Kami menawarkan beragam produk
            olahan kedelai yang serbaguna, cocok untuk berbagai jenis hidangan.
            Dengan kandungan nutrisi yang tinggi, produk kami tidak hanya lezat,
            tetapi juga sehat dan bergizi, menjadikannya pilihan ideal bagi
            konsumen yang peduli pada kesehatan. Kami telah lama dipercaya oleh
            pelanggan karena konsistensi dan kualitas yang selalu terjaga.
          </p>
        </v-col>
        <v-col cols="12" md="6" sm="6" xs="6">
          <v-img
            height="auto"
            class="rounded-lg"
            src="../public/images/about.jpg"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <v-sheet class="bg-grey-lighten-2">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="12" sm="12" xs="12">
          <p class="text-h4 text-center font-weight-bold text-black">
            Resep dan Kembang Kulit Tahu
          </p>
          <p class="text-h6 text-center text-grey-darken-3">
            Berikut Jenis dan olahan Kembang Kulit Tahu yang dapat anda gunakan
            untuk pembuatan olahan makanan anda
          </p>
        </v-col>
        <v-col v-for="n in dataResep" cols="12" md="4" sm="4" xs="12">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="elevation-3 rounded-md"
              v-bind="props"
              :elevation="isHovering ? 12 : 2"
              :class="{
                'text-black on-hover  animate__animated animate__pulse':
                  isHovering,
              }"
            >
              <v-card-text>
                <iframe
                  width="100%"
                  height="315"
                  :src="n.link"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <p class="text-center text-h6 font-weight-bold text-grey-darken-4">
        Dan masih banyak lagi pekerjaan yang kami salurkan
      </p>
    </v-container>
  </v-sheet>

  <Distribusi/>
</template>

<script>
export default {
  methods: {
    onEnter(el, done) {
      this.animateClass = true;
      setTimeout(done, 1000); // Mengatur durasi animasi (1 detik)
    },
    onLeave(el, done) {
      this.animateClass = false;
      setTimeout(done, 1000); // Mengatur durasi animasi (1 detik)
    },
  },
  data() {
    return {
      dataResep: [
        {
          link: "https://www.youtube.com/embed/Jn0sx6xXGKY?si=ool6zUNhVYWMA7gs",
        },
        {
          link: "https://youtube.com/embed/ywVe3Hwf-Cc?si=L2aQoiUQcNYwp8OV",
        },
        {
          link: "https://youtube.com/embed/uFKkyFyF1io?si=5GH7jmMwjfSNDpJz",
        },
        {
          link: "https://youtube.com/embed/vHCzNpvKcMc?si=4wHi5HId-BHuEMaO",
        },
        {
          link: "https://youtube.com/embed/BPoqXnThpes?si=1koamUcB297w35hC",
        },
        {
          link: "https://youtube.com/embed/J4SeEoD_VbM?si=HE0FE_Olpk2MP5DG",
        },
      ],
    };
  },
};
</script>
