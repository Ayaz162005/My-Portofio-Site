document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 20) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
});
const arr = ["Youtuber", "Developer", "Programmer"];
let t = 1;
setInterval(function () {
  document.querySelector(".sss").textContent = `${arr[t]}`;
  t++;
  if (t == 3) t = 0;
}, 2000);
console.log(document.querySelector(".sss"));
const c1 = document.querySelector(".color-4");
const c2 = document.querySelector(".color-3");
const c3 = document.querySelector(".color-2");
const c4 = document.querySelector(".color-1");
const c5 = document.querySelector(".color-0");
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 2120) {
      c1.style.animationName = "ani";
      c2.style.animationName = "ani2";
      c3.style.animationName = "ani3";
      c4.style.animationName = "ani4";
      c5.style.animationName = "ani5";
      c1.style.animationDuration = "5s";
      c2.style.animationDuration = "5s";
      c3.style.animationDuration = "5s";
      c4.style.animationDuration = "5s";
      c5.style.animationDuration = "5s";
      c1.style.width = "90%";
      c2.style.width = "75%";
      c3.style.width = "70%";
      c4.style.width = "75%";
      c5.style.width = "85%";
    }
  });
});
