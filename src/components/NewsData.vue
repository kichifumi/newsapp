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
        <p style="width: 75%">{{ omittedText(item.description) }}</p>
        <p>{{ changeMoment(item.publishedAt) }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import moment from "moment";

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
    // 日付変換処理
    changeMoment(value: string) {
      return moment(value, "YYYY/MM/DD HH:mm:S").fromNow();
    },
    // 文字列制限処理
    omittedText(text: string) {
      const MAX_LENGTH = 90;
      if (text.length > MAX_LENGTH) {
        return text.substr(0, MAX_LENGTH) + "...";
      }
      return text;
    },
    // ニュース取得
    getNews() {
      console.log("*** getNews Start : " + JSON.stringify(this.params));

      const pageSize = 10;
      const baseUrl = `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=735dccc6a61b4ea8ac03bdb82b9395ba`;
      let addUrl = baseUrl;
      // URL編集
      if (this.params && this.params.category)
        addUrl += `&category=${this.params.category}`;

      this.axios
        .get(addUrl)
        .then((response) => {
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
  padding-right: 30px;
  padding-left: 30px;
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