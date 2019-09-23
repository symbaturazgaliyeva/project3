var swiper = new Swiper ('.swiper-container', {
	  slidesPerView: 2,
      spaceBetween: 30,
      //slidesPerGroup: 2,
      //responsive: false,
      loop: true,
      loopFillGroupWithBlank: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
 });