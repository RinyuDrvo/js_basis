/**
 * 階乗
 * @param n 階乗する数値
 * @return 階乗した結果
 */
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}


const button = document.getElementById("button");
button.onclick = function () {
  alert("階乗(5) = " + factorial(5));
}