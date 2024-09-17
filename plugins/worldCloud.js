//import VueApexCharts from "vue3-apexcharts"
import VueWordCloud from 'vuewordcloud';

export default defineNuxtPlugin(nuxtApp => {
const worldcloud = VueWordCloud;
nuxtApp.vueApp.component("worldcloud", worldcloud);

})