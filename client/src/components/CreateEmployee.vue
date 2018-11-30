<template>
    <div>
        <h1>Register</h1>

        <input 
            type="email"
            name="email"
            v-model="email"
            placeholder="email" />
        <input 
            type="password"
            name="password"
            v-model="password"
            placeholder="password" />
        <div v-html="error" class="error" />
        <b-btn @click="register">Register</b-btn>
    </div>
</template>

<script>
    import AuthenticationService from '@/services/AuthenticationService'
    export default {
        data() {
            return {
                email: '',
                password: '',
                error: null
            }
        },
        methods: {
            async register() {
                try {
                await AuthenticationService.create({
                    email: this.email,
                    password: this.password
                })
                } catch (error) {
                    this.error = error.response.data.error
                }
            }
        }
    }
</script>

<style scoped>
.error {
    color: red;
}
</style>