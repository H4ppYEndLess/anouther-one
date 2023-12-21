const swiper = new Swiper('.products', {
  navigation:{
    nextEl:'.products__next',
    prevEl:'.products__prev'
  },
      loop:true,
      spaceBetween: 19,
      slideToClickedSlide:true,
      breakpoints: {
        // when window width is >= 320px
        1024:{
          slidesPerView:4
        },
        650:{
          slidesPerView:2,
        },
        0:{
          slidesPerView:1,
        },
      }
});

const slider = new Swiper('.stroke__slider', {
  // navigation:{
  //   nextEl:'.slider__next',
  //   prevEl:'.slider__prev'
  // },
      speed:1000,
      centeredSlides:true,
      loop:true,
      slidesPerView:1,
      spaceBetween: 40,
      slideToClickedSlide:true,
      allowTouchMove:false,
      autoplay:{
        delay:1000
      },
      breakpoints: {
        // when window width is >= 320px
      }
});