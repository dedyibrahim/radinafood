<template>
    <div class="auth-wrapper auth-v1 background-login">
        <div class="auth-inner">
            <p class="text-center text-h4 my-3">Join Us!</p>
            <v-btn variant="outlined" color="grey" block class="text-capitalize">
                <icon size="25" class="mr-3" name="flat-color-icons:google"></icon> Sign Up
                With Google
            </v-btn>
            <div class="text-center">
                <p class="font-weight my-5 background-text">Sign Up with your Email</p>
                <v-divider class="divider-behind-text"></v-divider>
            </div>
            <v-form ref="form">

                <div class="text-subtitle-1 text-medium-emphasis">Your Name</div>

                <v-text-field v-model="signup.name" :rules="nameRules" class="bg-white" density="compact"
                    placeholder="Insert Name" prepend-inner-icon="mdi-text" variant="outlined"></v-text-field>


                <div class="text-subtitle-1 text-medium-emphasis">Email Address</div>

                <v-text-field v-model="signup.email" :rules="emailRules" class="bg-white" density="compact"
                    placeholder="Email address" prepend-inner-icon="mdi-email-outline"
                    variant="outlined"></v-text-field>

                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                    Password
                </div>

                <v-text-field v-model="signup.password" class="bg-white" :rules="passwordRules"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                    density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline"
                    variant="outlined" @click:append-inner="visible = !visible"></v-text-field>
                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                    Password Confirmation
                </div>

                <v-text-field v-model="signup.password_confirmation" class="bg-white" :rules="passwordRules"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                    density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline"
                    variant="outlined" @click:append-inner="visible = !visible"></v-text-field>

                <div class="text-subtitle-1 mt-0 text-medium-emphasis d-flex align-center ">
                    <v-checkbox :rules="[v => !!v || 'You must agree to continue!']" label="Agree Terms and Conditions "
                        class="font-weight-bold "></v-checkbox>



                </div>
                <v-btn :loading="loading" @click="validate()" color="light-blue-darken-1" block class="text-capitalize">
                    Sign Up
                </v-btn>
            </v-form>
            <div class="text-subtitle-1 mt-2 text-medium-emphasis d-flex align-center ">

                Already have an account ? <NuxtLink to="/"
                    class="text-caption ml-2 text-decoration-none text-blue font-weight-bold">
                    Login </NuxtLink>



            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        nameRules: [
            v => !!v || 'Name is required',
        ],
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'Email must be valid',
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 6) || 'Password must be at least 6 characters',
        ],
        loading: false,
        visible: false,
        signup: {
            email: '',
            name: '',
            password: '',
            password_confirmation: ''
        }
    }),
    methods: {
        async validate() {
            const { valid } = await this.$refs.form.validate()

            if (valid)
                this.signUp()
        },
        async signUp() {
            this.loading = true;
            const config = useRuntimeConfig();
            try {
                const data = await $fetch(config.public.apiBase + 'register', {
                    method: 'POST',
                    body: this.signup
                })

                this.loading = false;
                useStore().$patch({
                    snackStatus: "primary",
                    snackbar: true,
                    messageSnack: data.message,
                });

                await navigateTo({ path: '/'})

            } catch (error) {
                useStore().$patch({
                    snackStatus: "red",
                    snackbar: true,
                    messageSnack: error.response.status + ' ' + error.response.statusText,
                });
                this.loading = false;
            }
        }
    }
};
</script>
<style>
h1 {
    font-family: 'FarAwayGalaxy', sans-serif;
}

.background-text {
    background-color: #fff;

    display: inline-block;
    padding: 0 10px;
}

.text-center {
    position: relative;
}

.divider-behind-text {
    position: absolute;
    width: 100%;
    top: 50%;
    z-index: -1;
}

.background-login {
    background-image: url("/bgLogin.svg");
    background-position: bottom;
    height: 50vh;
}

.auth-wrapper {
    display: flex;
    min-height: calc(var(--vh, 1vh) * 100);
    width: 100%;
    flex-basis: 10%;
    align-items: center;
}

.auth-wrapper a {
    text-decoration: unset;
}

.auth-wrapper.auth-v1 {
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.auth-wrapper.auth-v1 .auth-mask-bg {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.auth-wrapper.auth-v1 .auth-tree,
.auth-wrapper.auth-v1 .auth-tree-3 {
    position: absolute;
}

.auth-wrapper.auth-v1 .auth-tree {
    bottom: 0;
    left: 0;
}

.auth-wrapper.auth-v1 .auth-tree-3 {
    bottom: 0;
    right: 0;
}

.auth-wrapper.auth-v1 .auth-inner {
    width: 22rem;
    z-index: 1;
}

.auth-wrapper.auth-v1 .auth-inner .auth-card {}

@media (max-width: 600px) {

    .auth-v1 .auth-mask-bg,
    .auth-v1 .auth-tree,
    .auth-v1 .auth-tree-3 {
        display: none;
    }
}
</style>
