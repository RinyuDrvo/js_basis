/**
 * オブジェクトがプロパティを持っているかどうかを判定する
 * @param オブジェクト
 * @return boolean
 */
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}


const emptyCheckButton = document.getElementById("emptyCheck");
emptyCheckButton.onclick = function () {
  let schedule = {};

  alert(isEmpty(schedule));

  schedule["8:30"] = "get up";

  alert(isEmpty(schedule));
}