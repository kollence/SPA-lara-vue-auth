<template>
    <div class="login row justify-content-center">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">

                    <form action="" @submit.prevent="authenticate">

                        <label for="email">Email</label>
                        <input type="text" v-model="form.email">
                        <br>
                        <label for="password">Password</label>
                        <input type="password" v-model="form.password">
                        <br>
                        <input type="submit" value="Login">
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { login } from './../resolveAuth/auth'

export default {
    data() {
        return {
            form: {
                name: '',
                password: ''
            },
            error: null
        }
    },
    methods: {
        authenticate() {
            this.$store.dispatch('Login')

            login(this.form)
                  .then(res => {
                      this.$store.commit('login_success', res)
                      this.$router.push({path: '/admin'})
                  })
                  .catch(err => {
                      this.$store.commit('login_failed', {err})
                  })
        }
    },
}
</script>

<style>

</style>
