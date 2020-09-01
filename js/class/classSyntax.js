class User {

  constructor(name) {
    // setterを呼び出す
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name too short");
      return;
    }
    this._name = value;
  }

  sayHi() {
    alert(this.name);
  }

}

let user = new User("John");
alert(user.name);

user = new User("");