let json = '{"name":"John", "age": 30}';
let user;

try {
  user = JSON.parse(json);
} catch (e) {
  alert(e.name);
  alert(e.message);
}

alert(user.name);
alert(user.age);