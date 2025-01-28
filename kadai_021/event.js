const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const text = document.getElementById('text');
  // 取得した文字列を2秒後に書き換える
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);

});