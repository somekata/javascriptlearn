// question.js
document.addEventListener("DOMContentLoaded", () => {
    // HTML内で問題ごとのデータを指定
    const correctAnswer = document.getElementById("quizForm").dataset.correctAnswer;
    const explanationText = document.getElementById("explanation");
  
    // ボタンイベント
    document.getElementById("submitAnswer").addEventListener("click", () => {
      const selectedAnswer = document.querySelector('input[name="answer"]:checked');
      const resultElement = document.getElementById("result");
  
      // 回答が未選択の場合
      if (!selectedAnswer) {
        resultElement.textContent = "回答を選択してください。";
        resultElement.style.color = "red";
        explanationText.classList.add("hidden");
        return;
      }
  
      // 正解・不正解の判定
      if (selectedAnswer.value === correctAnswer) {
        resultElement.textContent = "正解です！";
        resultElement.style.color = "green";
      } else {
        resultElement.textContent = `不正解です。正解は ${correctAnswer} です。`;
        resultElement.style.color = "red";
      }
  
      // 解説を表示
      explanationText.classList.remove("hidden");
    });
  });

  // 戻るボタンの動作
document.getElementById('backButton').addEventListener('click', () => {
  window.history.back();
});

// 問題選択ジャンプ機能
document.addEventListener("DOMContentLoaded", () => {
  // 現在のファイル名を取得
  const fileName = window.location.pathname.split("/").pop();

  // ファイル名の中から数字を抽出
  const match = fileName.match(/\d+/);

  if (match) {
    const currentNumber = parseInt(match[0], 10); // 現在の番号
    const nextNumber = currentNumber + 1; // +1した番号

    // input 要素を取得してデフォルト値を設定
    const inputElement = document.getElementById("questionNumber");
    if (inputElement) {
      inputElement.value = nextNumber; // デフォルト値を設定
    }
  }
});

document.getElementById("jumpButton").addEventListener("click", function () {
  // 入力された問題番号を取得
  const questionNumber = document.getElementById("questionNumber").value;

  // 問題番号が有効かどうかチェック
  if (questionNumber && Number(questionNumber) > 0) {
    // ファイル名を生成
    const targetFile = `jsquestion${questionNumber}.html`;

    // ページを遷移
    window.location.href = targetFile;
  } else {
    // エラーメッセージを表示
    alert("有効な問題番号を入力してください！");
  }
});
  
document.addEventListener("DOMContentLoaded", () => {
  // メニュー要素を取得
  const menuElement = document.getElementById("menu");

  // ヘッダーの内容をHTML文字列として定義
  const headerContent = `
    <nav id="navigation">
      <ul>
        <li><a href="../list.html">目次</a></li>
        <li><a href="../append8questionpool.html">問題一覧</a></li>
      </ul>
    </nav>
  `;

  // メニュー要素に内容を挿入
  if (menuElement) {
    menuElement.innerHTML = headerContent;
  }
});
