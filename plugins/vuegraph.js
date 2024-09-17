import BubbleCloudComponent from '../node_modules/vue-graph/src/components/bubblecloud.js';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component("BubbleCloud", BubbleCloudComponent);
});