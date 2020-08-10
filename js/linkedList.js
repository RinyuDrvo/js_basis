let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

/**
 * 単一連結リストのアイテムを1つずつ出力
 * ループを使用
 * @param list 単一連結リスト
 */
function printListLoop(list) {
  let tmp = list;
  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}

/**
 * 単一連結リストのアイテムを1つずつ出力
 * 再帰を使用
 * @param list 単一連結リスト
 */
function printListRecursion(list) {
  alert(list.value);
  if (list.next === null) return;
  return printListLoop(list.next);
}

const loopButton = document.getElementById("loop");
loopButton.onclick = function () {
  printListLoop(list);
}

const recursionButton = document.getElementById("recursive");
recursionButton.onclick = function () {
  printListRecursion(list);
}
