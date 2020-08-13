let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

/**
 * 数値プロパティに2をかける
 * @param obj オブジェクト
 */
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

const multiplyNumericButton = document.getElementById("multiplyNumeric");
multiplyNumericButton.onclick = function () {
  multiplyNumeric(menu);
  console.log(menu);
}