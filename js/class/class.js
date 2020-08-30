/**
 * 関数クラスパターン
 * @param name
 */
function User(name) {
  this.sayHi = function () {
    alert(name);
  };
}

let user = new User("Jhon");
user.sayHi();