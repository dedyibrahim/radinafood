<template>
  <v-app id="inspire">
    <DrawerMenu @titleName="handleDataFromDrawer" ref="childComponentRef"/>


    <v-main class="bg-grey-lighten-3 background-profile">
  
      <v-app-bar-nav-icon @click="callChildMethod"
          class="d-flex d-sm-none d-sm-flex d-md-none d-md-flex d-lg-none"></v-app-bar-nav-icon>
      <v-container>
        <NuxtPage />
  
      </v-container>
    </v-main>


    <v-footer class="bg-grey-lighten-3">
      <p class="text-center mx-auto">© 2023 PT.SIBER FORENSIK INDONESIA</p>
    </v-footer>
    
  </v-app>
</template>

<script>
export default {
  data() {
    return {

      titleName: ''
    };
  },
  methods: {
    callChildMethod() {
      // Accessing the child component instance using $refs
      this.$refs.childComponentRef.runFunction();
    },
    handleDataFromDrawer(data) {
      this.titleName = data
      console.log(data)
    }
  }
};
</script>
<style>
.background-profile {
    background-image: url("/bgProfile.svg");
    background-position: top;
    width: 100%;
}
</style>