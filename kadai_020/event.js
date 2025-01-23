// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  const textElement = document.getElementById('text');
   // 取得した文字列の文字数を出力する
  textElement.textContent = 'ボタンをクリックしました';
});