<template>
  <div class="entertainment">
    <NewsData title="エンタメ" :params="params" />
  </div>
</template>

<script lang="ts">
import NewsData from "@/components/NewsData.vue"; // @ is an alias to /src

export default {
  name: "Entertainment",
  components: {
    NewsData,
  },
  data() {
    return {
      // コンポーネントへの引数を設定
      params: {
        category: "entertainment",
      },
    };
  },
};
</script>
