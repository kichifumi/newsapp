<template>
  <div class="general">
    <NewsData title="ジェネラル" :params="params" />
  </div>
</template>

<script lang="ts">
import NewsData from "@/components/NewsData.vue"; // @ is an alias to /src

export default {
  name: "General",
  components: {
    NewsData,
  },
  data() {
    return {
      // コンポーネントへの引数を設定
      params: {
        category: "general",
      },
    };
  },
};
</script>
