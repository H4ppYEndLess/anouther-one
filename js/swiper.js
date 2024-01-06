const swiper = new Swiper('.hero__slider', {
      loop:true,
      pagination:{
        el: '.hero__pagination',
        clickable: true,
      },
      autoplay:{
        delay:5000
      },
});

const nature = new Swiper('.nature__slider', {
      speed:1000,
      slidesPerView:'auto',
      spaceBetween:20,
      centeredSlides:true,
      slideToClickedSlide:true,
      loop:true,
      768:{
        slidesPerView:2,
      },
      480:{
        slidesPerView:2,
      },
      0:{
        slidesPerView:1,
      },
      autoplay:{
        delay:3000
      },
});

const explore = new Swiper('.explore__slider', {
  loop:true,
  speed:1000,
  pagination:{
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay:{
    delay:3000
  },
});
