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
// メニュー要素を取得
const footerElement = document.getElementById("footerDefault");

// ヘッダーの内容をHTML文字列として定義
const footerContent = `
        <p id="footerContent">&copy; 2024 JavaScript解説</p>
`;

// メニュー要素に内容を挿入
if (footerElement) {
    footerElement.innerHTML = footerContent;
}
});
    