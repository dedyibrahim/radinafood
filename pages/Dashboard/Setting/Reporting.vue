<template>
  <v-row>
    <v-col>
      <v-card>
        <v-toolbar color="white">
          <v-toolbar-title
            >Reporting Generate
            <v-btn
              class="text-capitalize"
              color="primary"
              density="compact"
              variant="tonal"
            >
              26 File</v-btn
            >
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn variant="outlined" class="mr-2 text-capitalize">
            <icon name="bytesize:upload"></icon> Import
          </v-btn>
          <v-btn variant="outlined" @click="dialog = true" class="mr-2 text-capitalize bg-primary">
            <icon name="ic:twotone-plus"></icon> Generate Report
          </v-btn>
        </v-toolbar>
        <v-card-subtitle
          >Keep track of vendor and their security ratings.</v-card-subtitle
        >
        <v-toolbar color="white px-3">
          <div
            class="text-subtitle-1 my-3 text-medium-emphasis d-flex align-center justify-space-between"
          >
            <v-btn-toggle
              color="grey"
              variant="outlined"
              divided
              rounded="lg"
              density="compact"
              size="x-small"
            >
              <v-btn size="x-small" class="bg-white text-caption">
                View All</v-btn
              >
              <v-btn size="x-small" class="bg-white text-caption">
                Monitored</v-btn
              >
              <v-btn size="x-small" class="bg-white text-caption">
                Unmonitored</v-btn
              >
            </v-btn-toggle>
          </div>
          <v-spacer></v-spacer>
          <v-text-field
            density="compact"
            hide-details=""
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            placeholder="search"
          />
        </v-toolbar>
        <v-card-text>
          <v-data-table-server
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items-length="totalItems"
            :items="serverItems"
            :loading="loading"
            item-value="name"
            @update:options="loadItems"
          >
            <template v-slot:item.name_file="{ item }">
              <v-btn icon color="grey" density="compact" class="mr-2">
                <v-icon size="15">mdi-file</v-icon>
              </v-btn>
              <span> {{ item.name_file }} </span><br>
              <span class="mx-auto">{{ item.size }}</span>
            </template>

            <template v-slot:item.progress="{ item }">
              <v-progress-linear
                v-model="item.progress"
                color="primary"
                rounded
                height="6"
                :label="item.progress"
              ></v-progress-linear>
            </template>
            <template v-slot:item.Aksi="{ item }">
             <v-btn density="compact" class="elevation-0 mr-2" icon><icon color="grey" size="30" name="prime:cloud-download"></icon></v-btn>
             <v-btn density="compact" class="elevation-0 mr-2" icon><icon color="grey" size="25" name="heroicons:trash"></icon></v-btn>
             <v-btn density="compact" class="elevation-0 mr-2" icon><icon color="grey" size="30" name="bx:refresh"></icon></v-btn>
            </template>
          </v-data-table-server>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-dialog persistent v-model="dialog" width="500">
    <v-card rounded="lg" width="500" height="550" class="overflow-hidden">
      <v-toolbar color="transparent " class="ma-0">
        <v-toolbar-title>
          <Icon name="ion:bar-chart-outline" size="28" color="grey" class="mr-1"></Icon>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-title class="my-0">Generate Reporting</v-card-title>
      <v-card-subtitle>Flexible pricing that grows with you.</v-card-subtitle>
      <v-card-text>
        <v-list lines="three" select-strategy="classic">

          <v-card class="my-2 mx-2 " v-for="(n, index) in 3" :value="index" elevation="2">
            <v-list-item>
              <template v-slot:append="{ isActive }">

                <v-list-item-action>
                  <v-checkbox-btn color="blue" :model-value="isActive"></v-checkbox-btn>
                </v-list-item-action>
              </template>

              <template v-slot:prepend="{ isActive }">

                <v-list-item-action class>
                  <Icon name="ph:stack" size="20" color="blue" class="mr-3 mt-3" />
                </v-list-item-action>
              </template>

              <v-list-item-title>RUU </v-list-item-title>

              <v-list-item-subtitle>
                12 Desember 2023 10:15:32
              </v-list-item-subtitle>
            </v-list-item>
          </v-card>


        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col><v-btn variant='outlined' @click="dialog = false" block>Cancel</v-btn></v-col>
          <v-col><v-btn variant='outlined' @click="dialog = false" block
              class="bg-light-blue-darken-1">Confirm</v-btn></v-col>
        </v-row>

      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: ["auth"],
});
</script>

<script>
const desserts = [
  {
    name_file: "Frozen Yogurt",
    size: "3 mb",
    progress: 79,
    tanggal: "26 Januari 2023",
    generate_by: "USER0078",
    Aksi: 24,
  },
  {
    name_file: "Frozen Yogurt",
    size: "3 mb",
    progress: 99,
    tanggal: "22 Januari 2023",
    generate_by: "USER0078",
    Aksi: 24,
  },
  {
    name_file: "Frozen Yogurt",
    size: "3 mb",
    progress: 39,
    tanggal: "22 Januari 2023",
    generate_by: "USER0078",
    Aksi: 24,
  },
  {
    name_file: "Frozen Yogurt",
    size: "3 mb",
    progress: 49,
    tanggal: "25 Januari 2023",
    generate_by: "USER0078",
    Aksi: 24,
  },
  {
    name_file: "Frozen Yogurt",
    size: "3 mb",
    progress: 59,
    tanggal: "25 Januari 2023",
    generate_by: "USER0078",
    Aksi: 24,
  },
  {
    name_file: "Frozen Yogurt",
    size: "3 mb",
    progress: 89,
    tanggal: "22 Januari 2023",
    generate_by: "USER0078",
    Aksi: 24,
  },
  {
    name_file: "Frozen Yogurt",
    size: "3 mb",
    progress: 69,
    tanggal: "22 Januari 2023",
    generate_by: "USER0078",
    Aksi: 24,
  },
];

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const items = desserts.slice();

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          items.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
          });
        }

        const paginated = items.slice(start, end);

        resolve({ items: paginated, total: items.length });
      }, 500);
    });
  },
};

export default {
  data: () => ({
    dialog:false,
    itemsPerPage: 5,
    headers: [
      {
        title: "Nama File",
        align: "start",
        sortable: false,
        key: "name_file",
        width: "25%",
      },
      { title: "Progress", key: "progress", align: "start" },
      { title: "Tanggal", key: "tanggal", align: "start", width: "15%" },
      {
        title: "Generate By",
        key: "generate_by",
        align: "start",
        width: "15%",
      },
      { title: "Aksi", key: "Aksi", align: "start", width:"13%" },
    ],
    serverItems: [],
    loading: true,
    totalItems: 0,
  }),
  methods: {
    loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        this.serverItems = items;
        this.totalItems = total;
        this.loading = false;
      });
    },
  },
};
</script>
