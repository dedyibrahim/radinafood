<template>
  <v-app id="inspire">
    <v-system-bar class="bg-red px-16" height="35">
      <SliderText />
      <v-spacer></v-spacer>

      <v-icon
        color="white"
        @click="
          OpenSocialMedia(
            'https://www.facebook.com/profile.php?id=100071218411647'
          )
        "
        size="30"
        class="mx-2"
        >mdi-facebook</v-icon
      >
      <v-icon
        color="white"
        @click="
          OpenSocialMedia(
            'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fsolusimitrapertama%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3ygl8fgGdMyeMRS3F4qvAtOX94-zk9CmBwoC6YoV_gRXjeVmXrukhBXW0_aem_ATuP4qtwhQ27_W8I4q3m0j5BqtxVFS-NqIAoB1FdnHS2q70AORxWaNpiZhRADBlmfJXVqWcxQhRlXXCT1qZXLNdF&h=AT2FU_Zhcru01mhbNimJ2y23hybNdYQZAKmBoSD0x1q0Ip3mF3WRjifkKZdvqUBFLxagya_iLztRyc4z3OAFH86u0OCdv1Ds3Y8fCTLknTc293b6x50BoSDu1iQCZVgAzkXg'
          )
        "
        size="30"
        class="mx-2"
        >mdi-instagram</v-icon
      >
      <v-icon
        color="white"
        @click="OpenSocialMedia('https://twitter.com/solusimitraper1')"
        size="30"
        class="mx-2"
        >mdi-twitter</v-icon
      >
      <v-icon
        color="white"
        @click="
          OpenSocialMedia(
            'https://www.linkedin.com/in/pt-solusi-mitra-pertama-6275421a5/'
          )
        "
        size="30"
        class="mx-2"
        >mdi-linkedin</v-icon
      >
    </v-system-bar>

    <v-app-bar
      height="100"
      elevation="0"
      cover
      image="~/assets/images/appBar.png"
      class="bg-transparent"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          class="d-flex d-sm-none"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </template>
      <v-container class="pa-0 fill-height">
        <v-img height="70%" max-width="170" src="/images/logo.png" />
        <v-menu
        v-for="(menu, index) in menus"
        :key="index"
        offset-y
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="red"
            class="text-capitalize"
            text
            @click="navigateTo(menu.link)"
            v-bind="props"
          >
            {{ menu.name }}
          </v-btn>
        </template>

       
        <v-list v-if="menu.nested">
          <template v-if="menu.nested">
            <v-menu
              v-for="(nestedItem, nestedIndex) in menu.nested"
              :key="nestedIndex"
              offset-y
              open-on-hover
            >
              <template v-slot:activator="{ props }">
                <v-list-item
                  class="text-red"
                  v-bind="props"
                  @click="navigateTo(nestedItem.link)"
                >
                  <v-list-item-title>{{ nestedItem.name }}</v-list-item-title>
                </v-list-item>
              </template>
            </v-menu>
          </template>

         </v-list>

      </v-menu>

        <v-spacer class="d-sm-none d-md-flex d-none d-sm-flex"></v-spacer>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list color="primary">
        <v-list-item
          v-for="n in menus"
          :to="n.link"
          :title="n.name"
        ></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="UploadCV()" class="bg-primary text-capitalize" block
            >Submit CV

            <template v-slot:append>
              <v-icon>mdi-upload</v-icon>
            </template>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <Banner />
    <v-main class="bg-grey-lighten-6">
      <ArrowTop />
      <NuxtPage />
    </v-main>

    <Footer/>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    tab: null,
    menus: [
      {
        name: "Beranda",
        link: "/",
      },
      {
        name: "Profil",
        link: "/profil",
      },
      {
        name: "Produk",
        link: "/Produk",
        nested:[
          {name:'Kulit Tahu',link:'/kulitTahu'},
          {name:'Kembang Tahu',link:'/kulitTahu'},
          {name:'Kembang Tahu Bantal',link:'/kulitTahu'},
          {name:'Kembang Tahu Pita',link:'/kulitTahu'},
          {name:'Kembang Tahu Batang',link:'/kulitTahu'},
       
        ]
      },

      {
        name: "Kontak",
        link: "/kontak",
      },
    ],
  }),
  methods: {
    goTo(){

    },
    UploadCV() {
      const link =
        "https://docs.google.com/forms/d/e/1FAIpQLSeMU0MKB_D5HX1ocrTD3QxT-pBoW_abChVkGjXOq96AdzUdfg/viewform?usp=sf_link";
      window.open(link, "_blank");
    },
    OpenSocialMedia(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
