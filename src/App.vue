<template>
  <div id="app">
    <div id="nav">
      <Headers />
      <!-- <router-link to="{ name : 'Headline', params: { msg: 'test value' }}">Headline</router-link> | -->
      <router-link to="/">Headline</router-link> |
      <router-link to="/business">Business</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Headers from "@/components/Headers.vue"; // @ is an alias to /src

export default {
  name: "App",
  components: {
    Headers,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 60%;
  margin: 0 auto;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
