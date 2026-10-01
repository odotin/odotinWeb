const menuButton = document.getElementById("menuButton");

const sideMenu = document.getElementById("sideMenu");

const closeButton = document.getElementById("closeButton");

const menuOverlay = document.getElementById("menuOverlay");


// ==============================
// メニューを開く
// ==============================

menuButton.addEventListener("click", () => {

    sideMenu.classList.add("active");

    menuOverlay.classList.add("active");

    // 背景をスクロールできなくする
    document.body.style.overflow = "hidden";

});


// ==============================
// メニューを閉じる
// ==============================

function closeMenu() {

    sideMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


// ×ボタン
closeButton.addEventListener("click", closeMenu);


// 暗い背景
menuOverlay.addEventListener("click", closeMenu);


// ==============================
// メニュー項目を押したら閉じる
// ==============================

const menuLinks = document.querySelectorAll(".side-menu a");


menuLinks.forEach((link) => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});