$(document).ready(function(){
// Burger start
function menuBurger(){
  $('.nav').toggleClass('open');
  if ($(window).scrollTop()==0) {
    $('.top-nav').toggleClass('grey');
  }
}
  $('.burger').on('click', menuBurger);
  $('.menu-item').on('click', menuBurger);
//Burger end
//Scrolling efect start
  $(window).on("scroll", function(){
    if ($(window).scrollTop()) {
      $('.top-nav').addClass('grey');
    }else{
      $('.top-nav').removeClass('grey');
    }
  });

  $(".data-scroll").click(function(e) {
      e.preventDefault();
     var $section = $($(this).attr('href'));
     $('html, body').animate({
       scrollTop: $section.offset().top
     }, 1000);
   });

//Scrolling efect end
//slick
  $('.testimonial-slider').slick({
     dots: true,
     arrows: false,
     autoplay: false,
     autoplaySpeed: 1000
   });

});
