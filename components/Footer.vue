<template>
  <v-main class="bg-white">
    <v-footer color="white" class="footer">
      <v-container>
        <v-row>
          <v-col cols="12" md="3" sm="12">
            <p class="text-h4 font-weight-bold">Head Office</p><br>
            <p class="text-left">
              Perumahan Bojong Permai Blok B2 No.14 Kel.Kemang Kec.Kemang Kabupaten Bogor          
             </p>
          </v-col>
          <v-col cols="12" md="9" sm="12">
            <v-card class="bg-red text-center">
              <v-card-text class="white--text text-h6">
                <p class="text-justify text-h6">
                  Selamat datang di Kami adalah mitra terpercaya dalam pengolahan kedelai, khususnya dalam produksi kembang tahu dan kulit tahu berkualitas tinggi. Dengan pengalaman dan teknologi modern, kami berkomitmen untuk menyediakan produk berkualitas yang memenuhi standar kesehatan dan kelezatan bagi konsumen.
                </p></v-card-text
              >
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="8" sm="12">
            <v-row>
              <v-col cols="12" md="3" sm="6"
                ><v-list density="compact" class="bg-transparent">
                  <v-list-subheader class="test-darken text-h5">
                    <b>Company</b></v-list-subheader
                  >

                  <v-list-item
                    v-for="(item, i) in menulmspim"
                    :to="item.link"
                    :key="i"
                    :value="item"
                    color="ungu"
                  >
                    <v-list-item-title
                    class="text-black"
                      v-text="item.text"
                    ></v-list-item-title>
                  </v-list-item> </v-list
              ></v-col>
              <v-col cols="12" md="3" sm="6"
                ><v-list density="compact" class="bg-transparent">
                  <v-list-subheader class="test-darken text-h5"
                    ><b>Mitra</b></v-list-subheader
                  >

                  <v-list-item
                    v-for="(item, i) in menuasn"
                    :key="i"
                    :value="item"
                    :to="item.link"
                    color="ungu"
                    class="text-black"
                  >
                    {{ item.text }}
                  </v-list-item>
                </v-list></v-col
              >
              <v-col cols="12" md="3" sm="6"
                ><v-list density="compact" class="bg-transparent">
                  <v-list-subheader class="test-darken text-h5"
                    ><b>Bisnis</b></v-list-subheader
                  >

                  <v-list-item
                    v-for="(item, i) in menupanduan"
                    :key="i"
                    :to="item.link"
                    :value="item"
                    color="ungu"
                    class="text-ungu"
                  >
                    <v-list-item-title class="text-black" v-text="item.text"></v-list-item-title>
                  </v-list-item> </v-list
              ></v-col>
              <v-col cols="12" md="3" sm="6"
                ><v-list density="compact" class="bg-transparent">
                  <v-list-subheader class="text-darken text-h5"
                    ><b>Social Media</b></v-list-subheader
                  >

                  <v-list-item
                    v-for="(item, i) in menulainnya"
                    :key="i"
                    @click="OpenSocialMedia(item.link)"
                    :value="item"
                    color="ungu"
                    class="text-ungu"
                  >
                    <v-list-item-title class="text-black" v-text="item.text"></v-list-item-title>
                  </v-list-item> </v-list
              ></v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="4" sm="12" class="mb-2">
            <v-card elevation="0" color="primary">
              <v-card-text>
                <v-list class="bg-transparent">
                  <v-list-subheader class="test-darken text-h6 text-center"
                    ><b> Contact </b></v-list-subheader
                  >

                  <v-list-item
                    v-for="(item, i) in items"
                    :to="item.link"
                    :key="i"
                    :value="item"
                    color="primary"
                    rounded="xl"
                  >
                    <v-list-item-title>
                      <v-icon> {{ item.icon }}</v-icon>
                      {{ item.text }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
                <v-list class="bg-transparent">
                  <v-list-subheader class="test-daken text-h6 text-center"
                    ><b> Jam Operasional</b></v-list-subheader
                  >

                  <v-list-item
                    v-for="(item, i) in items2"
                    :key="i"
                    :value="item"
                    color="darken"
                    rounded="xl"
                  >
                    <v-list-item-title>
                      <v-icon> {{ item.icon }}</v-icon>
                      <span v-html="item.text"></span>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <hr />
        <v-row class="text-black">
          <v-col>&copy; 2024 <b>UD Sumurwangi Jaya </b></v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "081289903664 ", icon: "mdi-phone" },
        { text: "foodradina@gmail.com", icon: "mdi-mail" },
      ],
      items2: [
        { text: "Senin-sabtu <br> Pukul 09:00 - 18:00 WIB", icon: "mdi-clock" },
      ],
      menulmspim: [
        {
          text: "Beranda",
          link: "/",
        },
        {
          text: "Profil",
          link: "/profil",
        },
      ],
      menuasn: [
        {
          text: "Layanan",
          link: "/layanan",
        },
      ],
      menulainnya: [
        {
          text: "Facebook",
          link: "https://www.facebook.com/profile.php?id=100071218411647",
        },
        {
          text: "Instagram",
          link: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fsolusimitrapertama%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3ygl8fgGdMyeMRS3F4qvAtOX94-zk9CmBwoC6YoV_gRXjeVmXrukhBXW0_aem_ATuP4qtwhQ27_W8I4q3m0j5BqtxVFS-NqIAoB1FdnHS2q70AORxWaNpiZhRADBlmfJXVqWcxQhRlXXCT1qZXLNdF&h=AT2FU_Zhcru01mhbNimJ2y23hybNdYQZAKmBoSD0x1q0Ip3mF3WRjifkKZdvqUBFLxagya_iLztRyc4z3OAFH86u0OCdv1Ds3Y8fCTLknTc293b6x50BoSDu1iQCZVgAzkXg",
        },
        {
          text: "Twitter",
          link: "https://twitter.com/solusimitraper1",
        },
        {
          text: "LinkedIn",
          link: "https://www.linkedin.com/in/pt-solusi-mitra-pertama-6275421a5/",
        },
      ],
      menupanduan: [
        {
          text: "Kontak",
          link: "/kontak",
        },
      ],

      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  methods: {
    goTo(val) {
      this.$router.push({ name: val });
    },
    OpenSocialMedia(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
<style>
.v-footer {
  position: relative;
  top: -1%;
  bottom: 10%;
  border-radius: 57px 57px 57px 57px;
  -moz-border-radius: 57px 57px 57px 57px;
  -webkit-border-radius: 57px 57px 57px 57px;
}
</style>
