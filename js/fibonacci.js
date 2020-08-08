/**
 * フィボナッチ数
 * 動的計画法
 * @param n
 * @return
 */
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

const button = document.getElementById("button");
button.onclick = function () {
  alert(
    "フィボナッチ数 n=3 => " + fib(3) + "\n" +
    "フィボナッチ数 n=7 => " + fib(7) + "\n" +
    "フィボナッチ数 n=77 => " + fib(77)
  );
}