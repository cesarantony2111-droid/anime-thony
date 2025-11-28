//scroll-bar

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});


//swiper
document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".coming-container", {
      spaceBetween: 20,
      loop: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
          0: {
              slidesPerView: 2,
          },
          568: {
              slidesPerView: 3,
          },
          768: {
              slidesPerView: 4,
          },
          968: {
              slidesPerView: 5,
          },
      }
  });
});

/* Responsive Navbar Toggle */
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('bx-x');
};

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
    navbar.classList.remove('active');
    menu.classList.remove('bx-x');
});

// Initialize Swiper for home section
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Initialize Swiper for coming section
var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 55000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 5,
        },
    },
});