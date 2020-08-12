let user = new Object();

// Johnという値を持つnameプロパティを追加
user = { name: "John" };

// Smithという値を持つsurnameプロパティを追加
user = { surname: "Smith" };

// nameの値をPeteに変えます
user.name = "Pete";

// オブジェクトからnameプロパティを削除する
delete user.name;
