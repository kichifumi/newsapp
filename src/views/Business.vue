<template>
  <div class="business">
    <NewsData title="ビジネス" :params="params" />
  </div>
</template>

<script lang="ts">
import NewsData from "@/components/NewsData.vue"; // @ is an alias to /src

export default {
  name: "Business",
  components: {
    NewsData,
  },
  data() {
    return {
      // コンポーネントへの引数を設定
      params: {
        category: "business",
      },
    };
  },
};
</script>
