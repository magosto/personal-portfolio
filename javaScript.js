//Add NAV transitioning when scrolled
$(window).scroll(function () {
  if ($(window).scrollTop() >= 350) {
    $('.navbar ul').css('background','white');
    $('.navbar a').css('color','black');

  } else {
    $('.navbar ul').css('background','transparent');
    $('.navbar a').css('color','white');
  }
});
