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
    params: Object,
  },
  methods: {
    getNews() {
      console.log("*** getNews Start : " + JSON.stringify(this.params));

      // ページサイズ
      const pageSize = 10;
      const category = this.params.category;

      // ニュースデータ取得
      this.axios
        .get(
          `https://newsapi.org/v2/top-headlines?category=${category}&country=jp&pageSize=10&apiKey=735dccc6a61b4ea8ac03bdb82b9395ba`
        )
        .then((response) => {
          console.log(JSON.stringify(response));
          if (response.status && response.status == 200) {
            const res = JSON.stringify(response.data.articles);
            console.log(res);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  created() {
    console.log("*** setup Start ***");
    this.getNews();
  },
};
</script>
