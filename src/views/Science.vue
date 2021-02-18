<template>
  <div class="science">
    <NewsData title="サイエンス" :params="params" />
  </div>
</template>

<script lang="ts">
import NewsData from "@/components/NewsData.vue"; // @ is an alias to /src

export default {
  name: "Science",
  components: {
    NewsData,
  },
  data() {
    return {
      // コンポーネントへの引数を設定
      params: {
        category: "science",
      },
    };
  },
};
</script>
