const hero = document.querySelector('.hero');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault(); // リンクのデフォルト動作を防止
    hero.classList.toggle('hero2');

    // ボタンのテキストを変更
    btn.textContent = hero.classList.contains('hero2') ? '元に戻す' : 'メールでお問い合わせ';
});