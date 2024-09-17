<template>
    <v-snackbar  location="top right"  v-model="useStore().snackbar" :color=useStore().snackStatus>
      {{ useStore().messageSnack }}
    </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
    
      message: '',
    };
  },

  mounted() {
  },
  created() {
  },
  methods: {



  },
  setup() {

    watch(
      () => useStore().snackbar, (newSnackbar, oldSnackbar) => {

      }
    );

    return {
      useStore,
    };
  },
};
</script>
