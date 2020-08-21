// スクリプトを読み込む
function loadScirpt(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

// スクリプトを読み込み実行する
loadScirpt('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the ${script.src} is loaded`);
  alert(_); // ロードされたスクリプトで宣言されている関数
});