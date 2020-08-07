function powRecursion(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * powRecursion(x, n - 1);
  }
}

const recursionButton = document.getElementById('recursion');
recursionButton.onclick = function () {
  alert("powRecursion(2, 3) = " + powRecursion(2, 3));
}
