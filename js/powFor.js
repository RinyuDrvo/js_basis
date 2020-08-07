function powFor(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

const forButton = document.getElementById('for');
forButton.onclick = function () {
  alert("powFor(2, 3) = " + powFor(2, 3));
}
