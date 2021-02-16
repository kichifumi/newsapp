<template>
  <div class="headline">
    <h1>Headline</h1>
    <NewsData title="ヘッドライン"/>
  </div>
</template>

<script lang="ts">
import NewsData from '@/components/NewsData.vue'; // @ is an alias to /src

export default {
  name: 'Headline',
  components: {
    NewsData
  },
  created() {
    console.log("ヘッドライン");
  }
};
</script>
