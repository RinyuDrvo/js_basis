function readData() {
  let json = '{ "name": "John", "age" : 30 }';

  try {
    let user = JSON.parse(json);

    if (!user.name) throw new SyntaxError("Incomplete data: no name");

    blabla();

    alert(user.name);

  } catch (e) {

    if (e.name != 'SyntaxError') throw e;

    if (e.name) alert("JSON Error: " + e.message);
  }
}

try {
  readData();
} catch (e) {
  alert("External catch got: " + e);
}