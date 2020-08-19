// JSのErrorクラスの擬似クラス
class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error";
  }
}

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidationError extends MyError { }

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.property = property;
  }
}

// Usage
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name")
  }

  return user;
}

try {
  let user = readUser('{ "name": "John" }');
  alert(user.name + user.age);
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message);
    alert(err.name);
    alert(err.property);
  } else if (err instanceof SyntaxError) {
    alert("JSON Syntax Error: " + err.message);
  } else {
    throw err;
  }
}