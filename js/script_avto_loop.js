var galleryTop = new Swiper('.image-slider', {
      // spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
    el: '.swiper-pagination',
    // type: 'bullets',
    // clickable: true,
    // dynamicBullets: true,
    // renderBullet: function (index, className) {
    //return '<span class="' + className + '">' + (index + 1) + '</span>';},
    type: 'fraction',
    //type: 'progressbar'
  },
            loop: true,
            loopedSlides: 4
    });
    var galleryThumbs = new Swiper('.image-mini-slider', {
      // spaceBetween: 10,
      // centeredSlides: true,
      slidesPerView: 4,
      touchRatio: 0.2,
      slideToClickedSlide: true,
            loop: true,
            loopedSlides: 4
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;