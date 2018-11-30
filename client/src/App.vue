<template>
<body>
  <div id="app">
    <div id="nav">
      <router-link to="/">Shifts</router-link> |
      <router-link to="/new-shift">New Shift</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
  </body>
</template>

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
