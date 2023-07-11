// 타이핑 효과
const content = "성실함과 끈기로 포기하지 않는 \n 웹 퍼블리셔가 되겠습니다.";
const text = document.querySelector(".text");
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}
setInterval(typing, 200);

// 슬라이드
const mySwiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: "2.6",
  //   slidesOffsetBefore: 0,
  //   slidesOffsetAfter: -500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
