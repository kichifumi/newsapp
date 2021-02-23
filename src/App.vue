<template>
  <div id="app">
    <div id="nav">
      <div class="tabs">
      <!-- <TabItem v-for="item in list" v-bind="item" :key="item.id" v-model="currentId"/> -->
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
// import TabItem from '@/components/TabItem.vue'

export default {
  name: "App",
  components: {
    Headers,
    // TabItem
  },
  // computed: {
  //   current() {
  //     return this.list.find(el => el.id === this.currentId) || {}
  //   }
  // },
  // data() {
  //   return {
  //     currentId: 1,
  //     list: [
  //       { id: 1, label: 'Headline', content: '' },
  //       { id: 2, label: 'Business', content: 'business' },
  //       { id: 3, label: 'Entertainment', content: 'コンテンツ3' },
  //     ]
  //   }
  // },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=M+PLUS+1p');
#app {
  font-family: "M PLUS 1p";
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
    font-size: 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
