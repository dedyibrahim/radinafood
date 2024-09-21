<template>
  <v-sheet class="bg-white">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="6" sm="6" xs="6" @transition-enter="onEnter" @transition-leave="onLeave">
          <p class="text-h6 font-weight-bold text-black">Contact Us</p>
          <p class="text-h4 font-weight-bold text-primary">
            Radina Food
          </p>
          <br />
          <p class="text-h6 text-grey-darken-4 text-justify">
            Jangan ragu untuk menghubungi kami dan temukan kebaikan kembang tahu serta kulit tahu berkualitas. Kami siap memenuhi kebutuhan Anda dengan produk terbaik yang diolah dari kedelai pilihan.        </p>
        </v-col>
        <v-col cols="12" md="6" sm="6" xs="6">
          <v-img height="auto" class="rounded-lg" src="../public/images/kontak.jpg" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <v-sheet class="bg-primary">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="6" sm="6" xs="6">
          <p class="text-h5 font-weight-bold text-darken">
            Anda Dapat Mengunjungi Kami di
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31711.744346922933!2d106.71030163764948!3d-6.525719986436587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c33a85689895%3A0x4f46ad5292634491!2sPERUM%20BOPER!5e0!3m2!1sid!2sid!4v1726898057137!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" class="pr-11 rounded-lg" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        </v-col>
        <v-col cols="12" md="6" sm="6" xs="6">
          <p class="text-h5 font-weight-bold test-daken">
            Atau Menghubungi Kami di
          </p>
          <v-list class="bg-transparent">
            <v-list-item v-for="(item, i) in items" :to="item.link" :key="i" :value="item" color="primary" rounded="xl">
              <v-list-item-title>
                <v-icon> {{ item.icon }}</v-icon>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <p class="text-h5 font-weight-bold">Head Office</p><br>
          <p class="text-h6">
            Perumahan Bojong Permai Blok B2 No.14 Kel.Kemang Kec.Kemang Kabupaten Bogor.
          </p><br><br>
          <p class="text-h5 font-weight-bold">Factory Office</p><br>
          <p class="text-h6">
           Sumurwangi RT.01 RW.07 Kel.Kayumanis Kec.Tanah Sareal Kota Bogor
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>




  <v-parallax height="300px" src="/images/indobuild.png">
    <v-sheet class="bg-transparent">
      <v-container>
        <v-row class="my-16">
          <v-col cols="12" md="12" sm="12" xs="12">
            <p class="text-h5 text-center font-weight-bold test-daken">
              Kami siap mendengarkan dan merespons setiap pertanyaan Anda dengan cepat dan profesional. Hubungi kami
              sekarang untuk memulai percakapan yang berarti dan menginspirasi. </p>

          </v-col></v-row></v-container></v-sheet>
  </v-parallax>

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
      items: [
          { text: "081289903664 (WA) ", icon: "mdi-phone" },
          { text: "radinafood@gmail.com", icon: "mdi-mail" }
        ],
     };
  },
};
</script>
