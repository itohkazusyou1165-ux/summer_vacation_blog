
// ハンバーガーボタンとナビゲーションメニューの要素を取得
const hamburgerBtn = document.getElementById('js-hamburger');
const navMenu = document.getElementById('js-nav');

// ボタンがクリックされた時の処理
hamburgerBtn.addEventListener('click', function() {
    // ボタン自身に 'active' クラスを付け外しする（×印アニメーション用）
    this.classList.toggle('active');
    
    // ナビゲーションメニューに 'active' クラスを付け外しする（スライド表示用）
    navMenu.classList.toggle('active');
});

// メニュー内のリンクがクリックされたら、メニューを閉じる（スマホ利用時の親切設計）
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});