<template>
    <div class="auth-wrapper auth-v1 background-login">
        <div class="auth-inner">
            <p class="text-center text-h4 my-3">Welcome back!</p>
            <v-img class="mx-auto" height="100%" width="50%" :v-if="totp" :src="totp" />
            <div class="text-body-1 order">
                <span>Petunjuk Login:</span>
                <ol>
                    <li>Buka Google Authenticator</li>
                    <li>Klik Tombol Plus</li>
                    <li>Arahkan Gawai ke QR Code yang ditampilkan</li>
                    <li>Lanjutkan Login Ulang</li>
                </ol>
            </div>
            <div class="text-center">
                <p class="font-weight my-5 background-text">One Time Password</p>
                <v-divider class="divider-behind-text"></v-divider>
            </div>

            <v-form ref="form">
                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                    Input OTP
                </div>

                <v-text-field class="bg-white" :rules="passwordRules" v-model="verifys.token"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                    density="compact" placeholder="Enter your OTP" prepend-inner-icon="mdi-lock-outline"
                    variant="outlined" @click:append-inner="visible = !visible"></v-text-field>


                <v-btn :loading="loading" @click="validate()" color="light-blue-darken-1" block class="text-capitalize">
                    Verify Account
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
        passwordRules: [
            v => !!v || 'OTP is required',
        ],
        visible: false,
        loading: false,
        verifys: {
            email: '',
            token: ''
        },
        totp: "",
    }),
    mounted() {
        if (this.$route)
            this.totp = this.$route?.query.qr_code;
        this.verifys.email = this.$route?.query.email;
    },
    methods: {
        async validate() {
            const { valid } = await this.$refs.form.validate()

            if (valid)
                this.verify()
        },
        async verify() {
            this.loading = true;
            const config = useRuntimeConfig();
            try {
                const data = await $fetch(config.public.apiBase + '2fa-authenticate', {
                    method: 'POST',
                    body: this.verifys
                })

                this.loading = false;
                useStore().setTokens(
                    data.token,
                    data.name,
                    data.email,
                );
                useStore().$patch({
                    snackStatus: "primary",
                    snackbar: true,
                    messageSnack: "Your Account Verified",
                });

                await navigateTo({ path: '/Dashboard' })
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
