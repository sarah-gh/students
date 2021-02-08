<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"> </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
    color: #fff;
    background: #949c4e;
    background: linear-gradient( 90deg, rgba(86, 216, 228, 1) 10%, rgba(159, 1, 234, 1) 90%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #b6e7d1;
    }
  }
}
</style>
