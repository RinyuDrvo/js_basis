/** sumTo */

/**
 * 与えられた数値までの全ての数値を合計する
 * forループを使用
 * @param n 与える数値
 * @return 合計
 */
function sumToFor(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
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
  if (n === 1) {
    return 1;
  } else {
    return n + sumToRecursion(n - 1);
  }
}

/**
 * 与えられた数値までの全ての数値を合計する
 * 等差数列の式を使用
 * @param n 与える数値
 * @return 合計
 */
function sumToArthmeticProgression(n) {
  return n * (n + 1) / 2;
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
    "sumToRecursion(1) = " + sumToRecursion(1) + "\n" +
    "sumToRecursion(2) = " + sumToRecursion(2) + "\n" +
    "sumToRecursion(3) = " + sumToRecursion(3) + "\n" +
    "sumToRecursion(100) = " + sumToRecursion(100)
  );
}

const sumToRecursionArthemticProgressionButton = document.getElementById('sumToArithmeticProgression');
sumToRecursionArthemticProgressionButton.onclick = function () {
  alert(
    "sumToArthmeticProgression(1) = " + sumToArthmeticProgression(1) + "\n" +
    "sumToArthmeticProgression(2) = " + sumToArthmeticProgression(2) + "\n" +
    "sumToArthmeticProgression(3) = " + sumToArthmeticProgression(3) + "\n" +
    "sumToArthmeticProgression100) = " + sumToArthmeticProgression(100)
  );
}

