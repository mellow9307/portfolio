var span = document.querySelectorAll(".main_img span");
console.log(span);

function opacity() {
  span.forEach((element, idx) => {
    function txt() {
      element.classList.add("txt");
    }
    setTimeout(txt, `${idx}000`);
  });
}
opacity();

// a를 클릭했을때

var a = document.querySelectorAll(".black_box .list ul li a");
var box = document.querySelectorAll(".story_box");
console.log(box);

a.forEach((element, idx) => {
  console.log(element);
  $(element).on("click", (e) => {
    e.preventDefault();
    box[idx].classList.add("look");
    $(box[idx]).siblings().removeClass("look");
  });
});

// header 스크롤
let now = 0;
const headerth = document.querySelector("header").clientHeight;
function scrollF() {
  if (scrollY > 600 || document.documentElement.scrollTop > 600) {
    document.querySelector("header").style.top = `${-headerth - 1}px`;
    if (now < scrollY) {
      document.querySelector("header").style.top = `${-headerth - 1}px`;
    } else {
      document.querySelector("header").style.top = "0px";
    }
    now = scrollY;
  } else {
    document.querySelector("header").style.top = "0px";
  }
}
$(window).on("scroll", () => {
  scrollF();
});

// final_img 움직임
const movingImg = (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  $(".final_img").css({
    transform: `translate(${x / 60}px, ${y / -100}px)`,
  });

  requestAnimationFrame(movingImg);
};
$(".final").on("mousemove", movingImg);
