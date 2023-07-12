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
  // breakpoints: {
  //   716: {
  //     slidesPerView: 2,
  //     spaceBetween: 40,
  //   },
  //   1240: {
  //     slidesPerView: 3,
  //     spaceBetween: 50,
  //   },
  // },
});
