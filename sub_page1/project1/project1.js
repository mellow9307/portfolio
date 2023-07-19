const mySwiper = new Swiper(".mySwiper", {
  spaceBetween: 50,
  slidesPerView: "1.8",
  slidesOffsetBefore: 200,
  slidesOffsetAfter: 100,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
