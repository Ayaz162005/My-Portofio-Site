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
const nanan = document.querySelector(".nav-part2");
const arrr = ["Youtuber", "Developer", "Programmer"];
let ttt = 1;
setInterval(function () {
  document
    .querySelectorAll(".sssss")
    .forEach((itrr) => (itrr.textContent = `${arrr[ttt]}`));
  ttt++;

  if (ttt == 3) ttt = 0;
}, 2000);
console.log(document.querySelector(".sss"));
const c1 = document.querySelector(".color-4");
const c2 = document.querySelector(".color-3");
const c3 = document.querySelector(".color-2");
const c4 = document.querySelector(".color-1");
const c5 = document.querySelector(".color-0");
const check = document.querySelector(".part-2");
console.log(check);

const initial = document.querySelector(".part-2");
const fuunc = function (entries, observe) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
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
  } else {
    c1.style.animationName = "";
    c2.style.animationName = "";
    c3.style.animationName = "";
    c4.style.animationName = "";
    c5.style.animationName = "";
    c1.style.animationDuration = "";
    c2.style.animationDuration = "";
    c3.style.animationDuration = "";
    c4.style.animationDuration = "";
    c5.style.animationDuration = "";
    c1.style.width = "";
    c2.style.width = "";
    c3.style.width = "";
    c4.style.width = "";
    c5.style.width = "";
  }
};

const initiaObserve = new IntersectionObserver(fuunc, {
  root: null,
  threshold: 0.1,
});
initiaObserve.observe(initial);

//sdsds
const containers = document.querySelectorAll(".containe--item");
console.log(containers);
const nextbtn = document.querySelector(".left-btn");
const leftbtn = document.querySelector(".next-btn");
console.log(leftbtn);
containers.forEach(function (item, i) {
  item.style.transform = `translateX(${i * 100}%)`;
});
let count = 0;
function gotoslide(count) {
  containers.forEach(function (item, i) {
    item.style.transform = `translateX(${(i - count) * 100}%)`;
  });
}
nextbtn.addEventListener("click", function () {
  if (count == 5) count = -1;
  count++;
  gotoslide(count);
  dotactive(count);
});
let correct = true;
const container = document.querySelector(".container");

leftbtn.addEventListener("click", function () {
  if (count == 0) count = 6;
  count--;
  gotoslide(count);
  dotactive(count);
});
window.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key == "ArrowRight") {
    if (count == 5) count = -1;
    count++;
    gotoslide(count);
    dotactive(count);
  } else if (e.key == "ArrowLeft") {
    if (count == 0) count = 6;
    count--;
    gotoslide(count);
    dotactive(count);
  }
});
const dotContain = document.querySelector(".dots");
const dots = document.querySelectorAll(".dot");
dots.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const turn = e.target.getAttribute("data-set");
    count = turn;
    gotoslide(count);
    dotactive(count);
  });
});
function dotactive(current) {
  dots.forEach((item) => item.classList.remove("dot--active"));

  dots[current].classList.add("dot--active");
}
//change nav opacty
const navLinks = document.querySelectorAll(".nav-link");
const navlink = document.querySelector(".nav-part2");
navlink.addEventListener("mouseover", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    navLinks.forEach((otem) => (otem.style.opacity = 0.3));
  }
  e.target.style.opacity = 1;
});
navlink.addEventListener("mouseout", function (e) {
  e.preventDefault();

  navLinks.forEach((otem) => (otem.style.opacity = 1));
});
container.addEventListener("mouseover", function () {
  correct = false;
});
container.addEventListener("mouseout", function () {
  correct = true;
});
dotContain.addEventListener("mouseover", function () {
  correct = false;
});
dotContain.addEventListener("mouseout", function () {
  correct = true;
});
setInterval(function () {
  if (correct) {
    if (count == 5) count = -1;
    count++;
    gotoslide(count);
    dotactive(count);
  }
}, 2000);
//button
const button = document.querySelector("#buut");
const special = document.querySelector(".special");
const win = document.querySelector("#win");
button.addEventListener("click", function () {
  special.classList.toggle("special-hidden");
  win.classList.toggle("overlay");
});

win.addEventListener("click", function () {
  special.classList.toggle("special-hidden");
  win.classList.toggle("overlay");
});
navLinks.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("dfd");
    nanan.style.left = "-1800px";
    tttt = 1;
    const element = e.target.getAttribute("href");

    document.querySelector(`${element}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});
//change up-btn
const ser = document.querySelector("#about");
const it = document.querySelector(".up-btn");
const fo = function (entrience, obsrever) {
  const [entry] = entrience;
  if (!entry.isIntersecting) {
    it.classList.remove("b-hidden");
  } else {
    it.classList.add("b-hidden");
  }
};

const obs = new IntersectionObserver(fo, {
  root: null,

  threshold: 0,
});
obs.observe(ser);
it.addEventListener("click", function () {
  document.querySelector("#Home").scrollIntoView({
    behavior: "smooth",
  });
});
//button icon
const iconbtn = document.querySelector("#btn-icon");
let tttt = 1;
iconbtn.addEventListener("click", function () {
  if (tttt == 0) {
    tttt = 1;
    nanan.style.left = "-1800px";
  } else if (tttt == 1) {
    tttt = 0;
    nanan.style.left = "0";
  }
});
