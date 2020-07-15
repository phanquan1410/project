// slider

$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    $('.navbar-collapse').slideToggle();
  });



  $("#owl-demo").owlCarousel({
    nav: true, // Show next and prev buttons
    items: 1,
    autoplay: true,
    autoplaySpeed: 300,
    loop: true
  });
  $("#testimonal").owlCarousel({
    navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    items: 1,
    autoPlay: 3000,
    loop: true,

  });


});



