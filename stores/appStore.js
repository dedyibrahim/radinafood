import { defineStore } from 'pinia'

export const useStore = defineStore('toolsMonitoring', {
  state: () => {
    return {
      snackbar : false,
      titleBar:'',
      messageSnack :'-',
      snackStatus :'-',
      full_name: '',
      loggedIn :false,
      email:'',
      token: '',
    }
  }, 
  actions: {
    setTokens(accessToken,full_name,email) {
      this.titleBar = 'Welcome ' + full_name+ ' !'
      this.loggedIn = true,
      this.token = accessToken;
      this.full_name = full_name
      this.email = email
    },
    clearTokens() {
      this.loggedIn = false,
      this.token.refresh = '';
      this.token.access = '';
      this.full_name = '';
      this.email = '';
    },
  }, 
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict',
    }),
  },
})