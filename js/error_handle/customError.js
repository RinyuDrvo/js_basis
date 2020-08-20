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

class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'ReadError';
  }
}

class ValidationError extends Error { }

class PropertyRequiredError extends ValidationError { }

function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}

// Usage
function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Syntax Error", err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Validation Error", err);
    } else {
      throw err;
    }
  }
}

try {
  readUser('{bad json}');
  // readUser('{"name": "John", "age": 25}');
  alert("Read user successfully");
} catch (err) {
  if (err instanceof ReadError) {
    alert("Original error: " + err.cause);
  } else {
    throw err;
  }
}