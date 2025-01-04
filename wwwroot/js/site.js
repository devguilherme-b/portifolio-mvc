// Script para a rolagem de serviços funcionar com swiper
new Swiper(".card-wrapper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

//   // Centraliza os serviços dentro do container:
//   slidesPerView: 3,
//   // Responsividade
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 2,
//     },
//   },

//   centeredSlides: true,
//   spaceBetween: 0,

  // Rolagem automática
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Seção de projetos
new Swiper(".card-list", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

 // Centraliza os serviços dentro do container:
 slidesPerView: 1,
 // Responsividade
 breakpoints: {
   // when window width is >= 320px
   320: {
     slidesPerView: 1,
   },
   // when window width is >= 640px
   640: {
     slidesPerView: 1,
   },
 },
  centeredSlides: true,
  spaceBetween: 1,

  // Rolagem automática
  autoplay: {
    delay: 11000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
