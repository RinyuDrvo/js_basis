/**
 * 関数クラスパターン
 * @param name
 * @param birthday
 */
function User(name, birthday) {

  // User内からのみ見える
  function clacAge() {
    return new Date().getFullYear() - birthday.getFullYear();
  }
  this.sayHi = function () {
    alert(name + ', age: ' + clacAge());
  };
}

let user = new User("Jhon", new Date(2000, 0, 1));
user.sayHi();