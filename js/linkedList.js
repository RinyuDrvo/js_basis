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

/**
 * 単一連結リストのアイテムを逆順で出力
 * ループを使用
 * @param list 単一連結リスト
 */
function printListLoopReverse(list) {
  let tmp = list;
  const listStack = [];
  while (tmp) {
    listStack.push(tmp.value);
    tmp = tmp.next;
  }
  while (listStack.length !== 0) {
    const popValue = listStack.pop();
    alert(popValue);
  }
}

/**
 * 単一連結リストのアイテムを逆順で出力
 * 再帰を使用
 * @param list 単一連結リスト
 */
function printListRecursionReverse(list) {
  if (list.next) {
    printListRecursionReverse(list.next);
  }

  alert(list.value);
}

const loopButton = document.getElementById("loop");
loopButton.onclick = function () {
  printListLoop(list);
}

const recursionButton = document.getElementById("recursive");
recursionButton.onclick = function () {
  printListRecursion(list);
}

const reverseLoopButton = document.getElementById("reverseLoop");
reverseLoopButton.onclick = function () {
  printListLoopReverse(list);
}

const reverseRecursiveButton = document.getElementById("reverseRecursive");
reverseRecursiveButton.onclick = function () {
  printListRecursionReverse(list);
}