<template>
  <v-app id="inspire">
    <DrawerMenu ref="childComponentRef" />

    <v-app-bar color="grey-lighten-3" scroll-behavior="elevate">

      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="callChildMethod"
          class="d-flex d-sm-none d-sm-flex d-md-none d-md-flex d-lg-none"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>{{ useStore().titleBar }}
        <br>
        <span class="text-grey text-subtitle-1 d-none d-md-flex d-lg-none d-lg-flex d-xl-none">Measure your advertising
          ROI and track and report website traffic.</span>


      </v-app-bar-title>

      <v-spacer></v-spacer>
      <v-btn color="grey" variant="outlined" class=" bg-white text-capitalize mx-1" rounded="lg">
        <icon name="lucide:download-cloud" class="mr-2" size="20" />
        <span class="d-none d-md-flex d-lg-none d-lg-flex d-xl-none d-xl-flex d-xxl-none d-xxl-flex">Export</span>
      </v-btn>
      <v-btn class=" bg-primary text-capitalize mx-1" rounded="lg">
        <icon name="fluent-mdl2:insights" class="mr-2" size="20" />
        <span class=" d-none d-md-flex d-lg-none d-lg-flex d-xl-none d-xl-flex d-xxl-none d-xxl-flex">Insights</span>
      </v-btn>


    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <div class="text-subtitle-1 my-3 text-medium-emphasis d-flex align-center justify-space-between">

          <v-btn-toggle color="grey" variant="outlined" divided rounded="lg" density="comfortable" size="x-small">
            <v-btn size="x-small" class="d-none d-sm-flex bg-white text-caption"> 12 Months</v-btn>
            <v-btn size="x-small" class=" bg-white text-caption"> 30 Days</v-btn>
            <v-btn size="x-small" class=" bg-white text-caption"> 7 Days</v-btn>
            <v-btn size="x-small" class=" bg-white text-caption"> 24 Hours</v-btn>
          </v-btn-toggle>

          <div>
            <v-menu v-model="menu" open-on-hover :close-on-content-click="false" location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" variant="outlined" color="grey" class=" bg-white text-capitalize mx-1" rounded="lg">
                  <icon name="lets-icons:date-today" />
                  <span class="d-none d-md-flex d-lg-none d-lg-flex d-xl-none d-xl-flex d-xxl-none d-xxl-flex">Select
                    Dates</span>
                </v-btn>
              </template>

              <v-card min-width="200">

                <v-date-picker color="primary"></v-date-picker>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn variant="text" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn color="primary" variant="text" @click="menu = false">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu> 
            
            <v-menu open-on-hover  :close-on-content-click="false">
              <template v-slot:activator="{ props }">
                <v-btn  v-bind="props" variant="outlined" color="grey" class=" bg-white text-capitalize mx-1" rounded="lg">
                  <icon name="ion:filter-sharp" />
                  <span
                    class="d-none d-md-flex d-lg-none d-lg-flex d-xl-none d-xl-flex d-xxl-none d-xxl-flex">Filters</span>
                </v-btn>

              </template>

              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

          </div>

        </div>
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
      items: [
        { title: 'Ascending' },
        { title: 'Descending' },
        { title: 'Twitter' },
      ],
      fav: true,

      menu: false,
      message: false,
      hints: true,
      drawer: true,
    };
  },
  methods: {
    callChildMethod() {
      this.$refs.childComponentRef.runFunction();
    },
  
  }
};
</script>