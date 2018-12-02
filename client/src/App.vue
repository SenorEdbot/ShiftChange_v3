<template>
<body>
  <div id="app">
    <div id="nav">
      <a
      @click="navigateTo({name: 'home'})">Shifts | </a>
      <a
      @click="navigateTo({name: 'newShift'})">New Shift | </a>
      <a
      @click="navigateTo({name: 'about'})">About | </a>
      <a
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({name:'createEmployee'})">Create Employee | </a>
      <a
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({name:'login'})">Login</a>
      <a 
      v-if="$store.state.isUserLoggedIn"
      @click="logout"
      to="/login">Logout</a>
    </div>
    <router-view/>
  </div>
  </body>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
    , logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-image: linear-gradient(rgb(248, 241, 241), rgb(146, 143, 143)); */
  
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
background-image: radial-gradient(rgb(248, 241, 241), rgb(146, 143, 143));
height: 100vh;  
}

</style>
