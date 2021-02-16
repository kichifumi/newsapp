<template>
  <div class="business">
    <h1>Business</h1>
    <NewsData title="ビジネス"/>
  </div>
</template>

<script lang="ts">
import NewsData from '@/components/NewsData.vue'; // @ is an alias to /src

export default {
  name: 'Business',
  components: {
    NewsData
  },
};
</script>
