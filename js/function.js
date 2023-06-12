document.addEventListener('DOMContentLoaded', function () {
  // Btn menu
  document.querySelector(".js-open").addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(".nav").classList.toggle("nav--is-open");
    document.querySelector("body").classList.toggle("menu-is-open");
  });

  document.querySelector(".js-close").addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(".nav").classList.toggle("nav--is-open");
    document.querySelector("body").classList.toggle("menu-is-open");
  });

  // Search menu
  document.querySelector(".js-search-open").addEventListener('click', function () {
    document.querySelector(".search").classList.add("search--is-open");
  });

  document.querySelector(".js-search-close").addEventListener('click', function () {
    document.querySelector(".search").classList.toggle("search--is-open");
  });

  // menu
  const els = document.querySelectorAll(".nav__link");
  els.forEach((el, i) => {
    el.addEventListener("click", function () {

      [].forEach.call(els, function (el) {
        if (el !== this) {
          el.classList.remove("is-active");
        } else {
          el.classList.add("is-active");
        }
      }, this);
      if ($(window).width() < 1000) {
        document.querySelector(".nav").classList.toggle("nav--is-open");
        document.querySelector("body").classList.toggle("menu-is-open");
      }
    });

  });

  // scroll
  Array.prototype.forEach.call(
    document.querySelectorAll('.js-scroll'),
    (el) => new SimpleBar(el), {
    autoHide: false
  }
  );

  // catalog
  document.querySelectorAll("[data-target]").forEach((el, i) => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const link = document.querySelectorAll('.catalog-list__link');

      link.forEach((link) => {
        link.classList.remove('is-active');
      });
      this.classList.add("is-active");

      const target = this.getAttribute("data-target");
      document.querySelectorAll(".catalog-post").forEach((post, idx) => {
        if (post.getAttribute("data-tab") == target) {

          $(post).fadeIn(300);
        } else {
          $(post).fadeOut(300);
        }
      })
      const scrollTo = $(".js-scroll-to").offset().top;
      if ($(window).width() < 1000) {
        $("html").animate({ scrollTop: scrollTo - 100 }, 300);
      }
      if ($(window).width() < 767) {
        console.log('d')
        $("html").animate({ scrollTop: scrollTo - 40 }, 300);
      }
      // console.log(target);
    });
  });

  // sliders
  var swiperEvents = new Swiper(".slider-events", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    focusableElements: 'a',
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 27
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  });

  var swiperPartners = new Swiper(".slider-partners", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    focusableElements: 'a',
    roundLengths: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  });

  var swiperGallery = new Swiper(".slider-gallery", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    focusableElements: 'a',
    roundLengths: true,
    navigation: {
      nextEl: '.slider-gallery-next',
      prevEl: '.slider-gallery-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    }
  });

  var swiperHero = new Swiper(".slider-hero", {
    effect: 'fade',
    fadeEffect: {
      crossFade: false,
    },
    autoplay: {
      delay: 2000,
    }
  });

  tippy('.js-tooltip', {
    content: document.querySelector('.template').innerHTML,
    animation: 'scale',
    theme: 'light',
    trigger: 'click',
  });

  document.querySelector("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.name.value;
    const tel = this.tel.value;
    const send = `mailto:blog@test.ru?body=Имя: ${name}%0D%0AТелефон: ${tel}`;
    window.location.href = send;
  })

  const validator = new JustValidate(document.querySelector('#contactForm'));

  validator
    .addField(document.querySelector('#nameInput'), [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: 'Недопустимый формат',
      },
    ])
    .addField(document.querySelector('#phoneInput'), [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',
      },
      {
        rule: 'number',
        value: 10,
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'minLength',
        value: 11,
        errorMessage: 'Некорректный номер',
      },
      {
        rule: 'maxLength',
        value: 11,
        errorMessage: 'Некорректный номер',
      },
    ]);

  const element = document.querySelector('.js-select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
  });

  $(function () {
    $("#accordion").accordion({
      heightStyle: "content"
    });
  });

  $(function () {
    $("#tabs").tabs();
  });

  Fancybox.bind("[data-fancybox]", {
    buttons: [
      'slideShow',
      'share',
      'zoom',
      'fullScreen',
      'download',
      'close'
    ],
  })
});
