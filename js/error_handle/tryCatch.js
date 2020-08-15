// let json = '{"name":"John", "age": 30}';
let json = '{ bad json }';

try {
  let user = JSON.parse(json);
  alert(user.name);
  alert(user.age);
} catch (e) {
  alert(e.name);
  alert(e.message);
}
