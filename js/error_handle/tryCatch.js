let json = '{ "age" : 30 }';

try {
  let user = JSON.parse(json);

  if (!user.name) throw new SyntaxError("Incomplete data: no name");

  alert(user.name);
} catch (e) {
  alert("JSON Error: " + e.message);
}
