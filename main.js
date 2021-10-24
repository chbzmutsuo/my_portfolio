//スムーススクロール

//クリックイベントを追加するボタン
let nav_items = ["top", "works", "skills", "history", "contact"];

//nav_itemsに対して繰り返し構文
nav_items.forEach((item) => {
  //process
  let nav_menu = document.querySelector(`#nav_${item}`);
  // console.log(nav_menu);
  // let nav_menu = document.querySelector(`#nav_${nav_items[item]}`);
  let target = document.querySelector(`#${item}_pos`);
  let target_position = target.getBoundingClientRect().top;
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

//スクロールオブザーバー

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

let modal_close =document.querySelector("#modal_close");
let modal_open = document.querySelector("#modal_open");
let container = document.querySelector("#global-container");

modal_open.addEventListener("click",()=>{
  modal.classList.toggle("appear")
  container.style = "opacity:0.3";
  // container.style = "opacity:0.7";
})

modal_close.addEventListener("click",()=>{
  modal.classList.toggle("appear");
  container.style = "opacity:1";
})



// document.addEventListener("DOMContentLoaded", function () {
//   const el = document.querySelector("#works");
//   const str = el.innerHTML.trim().split("");

//   let concatStr = str.reduce(function (acc, curr) {
//     curr = curr.replace(/\s+/, "&nbsp");
//     return `${acc}<span class="char">${curr}</span>`;
//   }, "");

//   console.log(concatStr);
//   el.innerHTML = concatStr;
// });


