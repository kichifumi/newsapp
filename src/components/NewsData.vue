<template>
  <div class="news">
    <h3>{{ title }}</h3>
    <!-- ニュースデータを設定 -->
    <div class="newsRow" v-for="(item, index) in items" :key="index">

      {{item.title}}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "News",
  props: {
    title: String,
    params: Object,
  },
  data() {
    return {
      items: Object,
    };
  },
  methods: {
    getNews() {
      console.log("*** getNews Start : " + JSON.stringify(this.params));

      // ページサイズ
      const pageSize = 10;
      const baseUrl = `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=735dccc6a61b4ea8ac03bdb82b9395ba`;
      let addUrl = baseUrl;
      // URL編集
      if (this.params && this.params.category)
        addUrl += `&category=${this.params.category}`;

      // ニュースデータ取得
      this.axios
        .get(addUrl)
        .then((response) => {
          // const res = JSON.stringify(response.data.articles);
          this.items = response.data.articles;
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

<style scoped>
.newsRow {
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
    text-align: left;
    vertical-align: top;
    margin: 20px 50px 20px 20px;
    border-radius: 20px;
    background-color: #fff;
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 20px;
    padding-left: 20px;
}
</style>