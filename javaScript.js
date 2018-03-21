//Add NAV transitioning when scrolled
$(window).scroll(function () {
  if ($(window).scrollTop() >= 350) {
    $('.navBar ul').css('background','white');
    $('.navBar a').css('color','black');

  } else {
    $('.navbar ul').css('background','transparent');
    $('.navbar a').css('color','white');
  }
});

//nav menu icon onclick
function navClick() {
    var x = document.getElementById("topNav");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}
