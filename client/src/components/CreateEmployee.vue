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
        <b-btn @click="register">Register</b-btn>
    </div>
</template>

<script>
    import AuthenticationService from '@/services/AuthenticationService'
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            register() {
                AuthenticationService.create({
                    email: this.email,
                    password: this.password
                }).then((res) => {
                    console.log('success')
                })
                console.log('register button was clicked', this.email, this.password)
            }
        }
    }
</script>

<style scoped>

</style>