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
 * @param list 単一連結リスト
 */
function printListLoop(list) {
  console.log(list.value);
  let nextList = list.next;
  while (nextList !== null) {
    console.log(nextList.value);
    nextList = nextList.next;
  }
}

const loopButton = document.getElementById("loop");
loopButton.onclick = function () {
  printListLoop(list);
}