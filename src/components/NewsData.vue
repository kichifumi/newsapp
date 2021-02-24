<template>
  <div class="news">
    <br>
    <!-- ニュースデータ設定 -->
    <div class="modal-mask" v-if="isLoading === true">
      <vue-loading
        type="bubbles"
        color="#333"
        :size="{ width: '50px', height: '50px' }"
      ></vue-loading>
    </div>
    <div class="newsData" v-for="(item, index) in items" :key="index">
      <img
        class="newsImage"
        alt="news image"
        v-bind:src="item.urlToImage"
        style="vertical-align: middle"
        align="right"
      />
      <div>
        <p>{{ getPublisher(item.title) }}</p>
        <h3>
          <p style="width: 75%">{{ getNewsTitle(item.title) }}</p>
        </h3>
        <p style="width: 75%">{{ omittedText(item.description) }}</p>
        <p><a v-bind:href="item.url" target="_blank" style="font-size:14px;">続きを読む</a></p>
        <p style="font-size:14px;">{{ changeMoment(item.publishedAt) }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import { VueLoading } from "vue-loading-template";

export default {
  name: "News",
  props: {
    title: String,
    params: Object,
  },
  components: {
    VueLoading,
  },
  data() {
    return {
      items: Object,
      isLoading: false,
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    // 日付変換処理
    changeMoment(value: string): string {
      moment.locale('ja');
      return moment(value, "YYYY/MM/DD HH:mm:S").fromNow();
    },
    // 文字列制限処理
    omittedText(text: string): string {
      const MAX_LENGTH = 90;
      if (text && text.length > MAX_LENGTH) {
        return text.substr(0, MAX_LENGTH) + "...";
      }
      return text;
    },
    getPublisher(text: string): string {
      return text.substr(text.indexOf("-") + 2);
    },
    getNewsTitle(text: string): string {
      return text.substr(0, text.indexOf("-"));
    },
    // ニュース取得
    async getNews() {
      console.log("*** getNews Start : " + JSON.stringify(this.params));
      // ローディング表示
      this.isLoading = true;

      const pageSize = 10;
      const baseUrl = `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=735dccc6a61b4ea8ac03bdb82b9395ba`;
      let addUrl = baseUrl;
      // URL編集
      if (this.params && this.params.category)
        addUrl += `&category=${this.params.category}`;

      await this.axios
        .get(addUrl)
        .then((response) => {
          this.items = response.data.articles;
          // ローディング非表示
          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
          // ローディング非表示
          this.isLoading = false;
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
  border-radius: 10px;
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

.modal-mask {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>