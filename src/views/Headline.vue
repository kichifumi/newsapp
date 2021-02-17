<template>
  <div class="headline">
    <NewsData title="ヘッドライン" :params="params" />
  </div>
</template>

<script lang="ts">
import NewsData from "@/components/NewsData.vue"; // @ is an alias to /src

export default {
  name: "Headline",
  components: {
    NewsData,
  },
  data() {
    return {
      // コンポーネントへの引数を設定
      params: {
        category: "",
      },
    };
  },
};
</script>
