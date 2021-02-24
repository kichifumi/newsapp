<template>
  <div id="app">
    <div id="nav">
      <div class="tabs">
      </div>
      <Headers />
      <router-link to="/">Headline</router-link> |
      <router-link to="/business">Business</router-link> |
      <router-link to="/entertainment">Entertainment</router-link> |
      <router-link to="/general">General</router-link> |
      <router-link to="/health">Health</router-link> |
      <router-link to="/science">Science</router-link> |
      <router-link to="/sports">Sports</router-link> |
      <router-link to="/technology">Technology</router-link>
      <router-view />
    </div>
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
  margin: 0 auto;
}

#nav {
  margin-left: 20%;
  margin-right: 20%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
