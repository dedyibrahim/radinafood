export default defineNuxtRouteMiddleware((to, from) => {
    if (!useStore().loggedIn) {
      return navigateTo('/');
    }
  });