<template>
  <div class="technology">
    <NewsData title="テクノロジー" :params="params" />
  </div>
</template>

<script lang="ts">
import NewsData from "@/components/NewsData.vue"; // @ is an alias to /src

export default {
  name: "Technology",
  components: {
    NewsData,
  },
  data() {
    return {
      // コンポーネントへの引数を設定
      params: {
        category: "technology",
      },
    };
  },
};
</script>
