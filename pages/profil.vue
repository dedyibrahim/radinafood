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
          <p class="text-h6 font-weight-bold text-black">About Us</p>
          <p class="text-h4 font-weight-bold text-black">Radina Food</p>
          <br />
          <p class="text-h6 text-grey-darken-4 text-justify">
            Kami adalah perusahaan yang bergerak di bidang pengolahan kedelai
            dengan spesialisasi pada produksi kembang tahu dan kulit tahu
            berkualitas tinggi. Dengan menggunakan bahan baku pilihan dan proses
            produksi modern, kami berkomitmen menghadirkan produk yang sehat,
            lezat, dan bernutrisi bagi konsumen. Kami berfokus pada inovasi dan
            kualitas untuk memenuhi kebutuhan pasar domestik maupun
            internasional.
          </p>
        </v-col>
        <v-col cols="12" md="6" sm="6" xs="6">
          <v-img
            height="auto"
            class="rounded-lg"
            src="../public/images/profile.jpg"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <v-sheet class="bg-grey-lighten-2">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="6" sm="12" xs="12">
          <p class="text-center text-h3 text-black font-weight-bold">Visi</p>
          <p class="text-h6 text-justify mt-4">
            Visi kami adalah menjadi pemimpin dalam industri pengolahan kedelai,
            khususnya di bidang produksi kembang tahu dan kulit tahu, dengan
            fokus pada inovasi dan kualitas. Kami berkomitmen untuk menghasilkan
            produk yang tidak hanya lezat dan bernutrisi, tetapi juga ramah
            lingkungan dan bermanfaat bagi kesehatan konsumen.
          </p>
        </v-col>
        <v-col cols="12" md="6" sm="12" xs="12">
          <p class="text-center text-h3 text-black font-weight-bold">Misi</p>
          <p class="text-h6 text-justify mt-4">
            Misi kami adalah memberdayakan petani lokal melalui pemanfaatan
            bahan baku kedelai terbaik, serta mengoptimalkan teknologi modern
            dalam setiap proses produksi. Kami berusaha untuk memperluas
            jangkauan pasar, baik domestik maupun internasional, dengan tetap
            menjaga kualitas, konsistensi, dan keamanan produk. Selain itu, kami
            berkomitmen untuk menjalankan bisnis dengan integritas, memberikan
            nilai tambah bagi masyarakat, dan berkontribusi pada pengembangan
            ekonomi lokal.
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
            <p class="text-h5 text-center font-weight-bold text-white">
              Seperti kembang tahu yang lembut namun berkualitas, kesuksesan
              lahir dari ketekunan dan inovasi. Dari kedelai sederhana, kami
              menciptakan sesuatu yang luar biasa.
            </p>
          </v-col></v-row
        ></v-container
      ></v-sheet
    >
  </v-parallax>

  <Distribusi />
</template>

<script>
export default {
  methods: {
    onEnter(el, done) {
      alert("Asdsad");
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
      dataPekerjaan: [
        {
          title: "WareHouse",
          icon: "/images/warehouse.png",
          listWork: [
            { name: "Staf Gudang" },
            { name: "Operator Warehouse" },
            { name: "Admin Gudang" },
            { name: "Kepala Gudang" },
            { name: "Packer" },
          ],
        },
        {
          title: "Logistik",
          icon: "/images/logistik.png",
          listWork: [
            { name: "Kurir" },
            { name: "Delivery" },
            { name: "Driver" },
            { name: "Kurir Event" },
            { name: "Kurir Harian" },
          ],
        },
        {
          title: "Penjualan & Pelayanan",
          icon: "/images/penjualan.png",
          listWork: [
            { name: "Field Sales" },
            { name: "Telemarketer" },
            { name: "Business Development" },
            { name: "Customer Service" },
            { name: "SPG/SPB" },
          ],
        },
        {
          title: "Manufaktur",
          icon: "/images/manufaktur.png",
          listWork: [
            { name: "Security" },
            { name: "Pekerja Lepas" },
            { name: "Operator Produksi" },
            { name: "Teknisi" },
            { name: "Helper Produksi" },
          ],
        },
        {
          title: "Konstruksi & Bangunan",
          icon: "/images/kontruksi.png",
          listWork: [
            { name: "Surveyor" },
            { name: "Pekerja Konstruksi" },
            { name: "Tenaga ahli" },
            { name: "Estimator" },
            { name: "Dll" },
          ],
        },
        {
          title: "Dapur & Pantri",
          icon: "/images/chef.png",
          listWork: [
            { name: "Chef" },
            { name: "Cook Helper" },
            { name: "Kitchen Crew" },
            { name: "Head Chef" },
            { name: "Dll" },
          ],
        },
        {
          title: "Hotel & Restaurant",
          icon: "/images/hotel.png",
          listWork: [
            { name: "Waiter & Waiters" },
            { name: "Operator Warehouse" },
            { name: "Front Office" },
            { name: "Resepsionis" },
            { name: "Room Service" },
          ],
        },
        {
          title: "Kebersihan",
          icon: "/images/kebersihan.png",
          listWork: [
            { name: "Cleaning Service" },
            { name: "Office Boy" },
            { name: "Graderner" },
            { name: "Sky Service" },
            { name: "House Keeping" },
          ],
        },
      ],
    };
  },
};
</script>
