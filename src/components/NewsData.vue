<template>
  <div class="news">
    <h3>{{ title }}</h3>
  </div>
</template>

<script lang="ts">

export default {
  name: "News",
  props: {
    title: String,
  },
  setup() {
    console.log("*** setup Start ***");
    const getNews = () => {
      console.log("*** getNews Start ***");
    };
    return {
      getNews,
    };
  },
};
</script>
