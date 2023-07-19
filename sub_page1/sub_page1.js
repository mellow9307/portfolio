// $(window).scroll(function () {
//   $(".project").each(function (i) {
//     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//     var bottom_of_window = $(window).scrollTop() + $(window).height();
//     /* 3 */
//     if (bottom_of_window > bottom_of_object / 2) {
//       $(this).animate({ opacity: "1" }, 2000);
//     }
//   });
// });
// $(".project")
//   .offsetTop()
//   .scroll(function () {
//     $(".style").each(function (i) {
//       var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//       var bottom_of_window = $(window).scrollTop() + $(window).height();
//       /* 3 */
//       if (bottom_of_window > bottom_of_object / 2) {
//         $(this).animate({ opacity: "1" }, 2000);
//       }
//     });
//   });

$(window).scroll(function () {
  const infoTop = document.querySelector(".main_intro").offsetTop;
  console.log(infoTop);
  if (scrollY >= infoTop) {
    $(".project").css({
      transform: `translateY(${scrollY - infoTop})px`,
      opacity: 1,
    });
  }
});
