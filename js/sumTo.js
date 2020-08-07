/** sumTo */

/**
 * 与えられた数値までの全ての数値を合計する
 * forループを使用
 * @param n 与える数値
 * @return 合計
 */
function sumToFor(n) {
  let sum = 0;
  for (let i = n; i !== 0; i--) {
    sum += i;
  }
  return sum;
}

/**
 * 与えられた数値までの全ての数値を合計する
 * 再帰を使用
 * @param n 与える数値
 * @return 合計
 */
function sumToRecursion(n) {
  let sum = 0;
  if (n === 1) {
    return sum;
  } else {
    sum = sumToRecursion(n - 1);
  }
}

/**
 * 与えられた数値までの全ての数値を合計する
 * 等差数列の式を使用
 * @param n 与える数値
 * @return 合計
 */
function sumToArthmeticProgression(n) {
  let sum = 0;
  return sum;
}

const sumToForButton = document.getElementById('sumToFor');
sumToForButton.onclick = function () {
  alert(
    "sumToFor(1) = " + sumToFor(1) + "\n" +
    "sumToFor(2) = " + sumToFor(2) + "\n" +
    "sumToFor(3) = " + sumToFor(3) + "\n" +
    "sumToFor(100) = " + sumToFor(100)
  );
}

const sumToRecursionButton = document.getElementById('sumToRecursion');
sumToRecursionButton.onclick = function () {
  alert(
    "sumToRecursion(1) = " + sumToFor(1) + "\n" +
    "sumToRecursion(2) = " + sumToFor(2) + "\n" +
    "sumToRecursion(3) = " + sumToFor(3) + "\n" +
    "sumToRecursion(100) = " + sumToFor(100)
  );
}

