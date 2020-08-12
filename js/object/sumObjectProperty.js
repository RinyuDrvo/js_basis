/**
 * オブジェクト内のプロパティ全てを合計する
 * @param オブジェクト
 * @return プロパティの値の合計
 */
function sumObjectProperty(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const sumObjectPropertyButton = document.getElementById("sumObjectProperty");
sumObjectPropertyButton.onclick = function () {
  alert(sumObjectProperty(salaries));
}