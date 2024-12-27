// DOM Ready Event
document.addEventListener('DOMContentLoaded', function() {
    console.log("ページがロードされました");

    // ナビゲーションリンクのイベントハンドラ
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const sectionId = link.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // メニュー要素を取得
    const headerElement = document.getElementById("headerDefault");
  
    // ヘッダーの内容をHTML文字列として定義
    const headerContent = `
        <nav id="navigation">
    <ul>
        <li><a href="list.html">目次</a></li>
        <li><a href="codeSample.html">コード例</a></li>
        <li><a href="tagTransform.html">エスケープ変換</a></li>
    </ul>
    </nav>
    `;
  
    // メニュー要素に内容を挿入
    if (headerElement) {
      headerElement.innerHTML = headerContent;
    }
  });
 
  document.addEventListener("DOMContentLoaded", () => {
    // フッター要素を取得
    const footerElement = document.getElementById("footerDefault");

    // フッターの内容をHTML文字列として定義
    const footerContent = `
        <p id="footerContent">&copy; 2024 JavaScript解説</p>
        <button id="toTopBtn" style="display: none;"><img id="pagetop" src="img/pagetop.png"></button>
    `;

    // フッター要素に内容を挿入
    if (footerElement) {
        footerElement.innerHTML = footerContent; // innerHTMLで中身だけを更新
    }

    // スクロールボタンの取得（挿入後に取得可能）
    const toTopBtn = document.getElementById('toTopBtn');

    // スクロールイベントを監視
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) { // 100px以上スクロールしたら表示
            toTopBtn.style.display = 'block';
        } else { // ページのトップ付近では非表示
            toTopBtn.style.display = 'none';
        }
    });

    // ボタンをクリックしたらページトップに戻る
    toTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // スムーズにスクロール
        });
    });
});
