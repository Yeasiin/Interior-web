var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});



let nav = document.querySelectorAll('.responsive');

nav.forEach(oc =>{
  oc.addEventListener('click',function(){
    let menu = document.querySelector('.navigation__list');
    let nav = document.querySelector('.responsive-icon');

    menu.classList.toggle('active');
    nav.classList.toggle('active');


  })
})
