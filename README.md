# newsapp

## 概要
NewsAPIからニュースを取得し、表示するアプリです。  

## 開発環境
- Vue.js(2.6.12)
- vue/cli 4.5.11
- Bootstrap4
- NewsAPI(https://newsapi.org/)

## 苦労した点
- ルーティング周りの仕様
- API実行中のローディング画面の実装方法。
- `v-bind`などVue.js特有の構文の使い方

## 改善点
- 一部画像が表示されない
- 現状５件しか取得できないため、ページネーションまたは無限スクロールの機能を実装する。
- アプリをデプロイするとNewsAPIがHttp status 426のレスポンスを返却するため、代わりとなるAPIに変更する。

## Project setup  
  
```
git clone https://github.com/kichifumi/newsapp.git
cd newsapp
npm run serve  
```
