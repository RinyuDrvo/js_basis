class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  // 静的プロパティ
  static publisher = "Ilya Kantor";

  // Articleオブジェクト同士を比較
  static compare(articleA, articleB) {
    return articleA - articleB;
  }

  // 静的メソッドからインスタンスを作成
  static createTodays() {
    return new this("Today's digest", new Date());
  }
}

alert(Article.publisher);