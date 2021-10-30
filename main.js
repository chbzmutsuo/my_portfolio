// click to gif-------------
let gif_switchers = document.querySelectorAll(".gif_switcher");
console.log(gif_switchers);

const obj = {};

gif_switchers.forEach((gif) => {
  gif.addEventListener("mouseenter", function () {
    const height = this.height;
    // alert(height)
    const file_name = String(this.src).slice(0, -3);
    const png = `${file_name}png`;
    const gif = `${file_name}gif`;
    this.src = gif;
    this.height = height + 8;
  });

  gif.addEventListener("mouseout", function () {
    const file_name = String(this.src).slice(0, -3);
    const png = `${file_name}png`;
    const gif = `${file_name}gif`;
    this.src = png;
  });
});

//スムーススクロール----------------------------
//クリックイベントを追加するボタン
// document.addEventListener("DOMContentLoaded", () => {
let nav_items = ["top", "works", "skills", "history", "contact"];

//nav_itemsに対して繰り返し構文
nav_items.forEach((item) => {
  //process
  let nav_menu = document.querySelector(`#nav_${item}`);
  // console.log(nav_menu);
  // let nav_menu = document.querySelector(`#nav_${nav_items[item]}`);
  let target = document.querySelector(`#${item}_pos`);

  let target_position = target.getBoundingClientRect().top  + window.scrollY;
  console.log(window.scrollY);
  console.log(target_position);

  nav_menu.addEventListener("click", () => {
    // window.scroll({ top: target_position, behavior: "smooth" });
    scroll();
  });

  // スクロール処理
  let scroll = () => {
    window.scroll({
      top: target_position,
      behavior: "smooth",
    });
  };
});

// });

//スムーススクロール----------------------------

//スクロールアニメーション--------------
/**
 *
 * scroll animation
 * .io_animationクラスのものにinviewがつく
 */

//実行関数
const cb = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview");
    } else {
      // entry.target.classList.remove("inview");
    }
  });
};

let io = new IntersectionObserver(cb);

let io_animations = document.querySelectorAll(".io_animation");

io_animations.forEach((element) => {
  io.observe(element);
});

//モーダルopen/close
let modal = document.querySelector("#example");

let modal_close = document.querySelector("#modal_close");
let modal_open = document.querySelector("#modal_open");
let container = document.querySelector("#global-container");

modal_open.addEventListener("click", () => {
  modal.classList.toggle("appear");
  container.style = "opacity:0.3";
  // container.style = "opacity:0.7";
});

modal_close.addEventListener("click", () => {
  modal.classList.toggle("appear");
  container.style = "opacity:1";
});

//スクロールアニメーション--------------
