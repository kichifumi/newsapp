<template>
  <div class="news">
    <h3>{{ title }}</h3>
    <!-- ニュースデータ設定 -->
    <div class="newsData" v-for="(item, index) in items" :key="index">
      <img
        class="newsImage"
        alt="news image"
        v-bind:src="item.urlToImage"
        style="vertical-align: middle"
        align="right"
      />
      <div>
        <h3>
          <p style="width: 75%">{{ item.title }}</p>
        </h3>
        <p style="width: 75%">{{ item.description }}</p>
        <p>{{ item.publishedAt }}</p>
      </div>
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
  created() {
    this.getNews();
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
};
</script>

<style scoped>
.newsData {
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
  text-align: left;
  vertical-align: top;
  margin: 10px;
  border-radius: 20px;
  background-color: #fff;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
}

.newsImage {
  object-fit: contain;
  width: 15%;
  border-radius: 5px;
  max-height: 100px;
  margin-right: 10px;
  flex: 1;
  padding-top: 20px;
}
</style>