//function (関数を作る)　関数の名前・自由につけれる　(引数(関数に引き渡す値）){処理内容（何がしたいのか）}
function drawerButton() {
  const dButton = document.querySelector(".drawerButton");
  const dMenu = document.querySelector(".drawerMenu");
  //連れてきた要素にクラスのつけ外しをする。
  dButton.classList.toggle("active");
  dMenu.classList.toggle("active");
}

// メニューリンクをクリックしたら閉じる処理
document.querySelectorAll(".drawerMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".drawerButton").classList.remove("active");
    document.querySelector(".drawerMenu").classList.remove("active");
  });
});
