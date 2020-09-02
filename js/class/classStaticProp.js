class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA - articleB;
  }

  static createTodays() {
    return new this("Today's digest", new Date());
  }
}

let article = Article.createTodays();

alert(article.title);