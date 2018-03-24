/*Fade in background*/
$(function(){
    var bgimage = new Image();
    bgimage.src="img/tc_3.jpg";
    $(".hero-image").hide();
    $(bgimage).on('load', function(){
        $(".hero-image").css("background-image","url("+$(this).attr("src")+")").fadeIn(2000);
    });
});
/*/Fade in background*/

/*Add NAV transitioning when scrolled*/
$(window).scroll(function () {
  if ($(window).scrollTop() >= 350) {
    $('.navBar ul').css('background','white');
    $('.navBar a').css('color','black');

  } else {
    $('.navBar ul').css('background','transparent');
    $('.navBar a').css('color','white');
  }
});
/*/Add NAV transitioning when scrolled*/

/*nav menu icon onclick*/
function navClick() {
    var x = document.getElementById("topNav");
    if (x.className === ".navBar") {
        x.className += " responsive";
    } else {
        x.className = ".navBar";
    }
}
/*/nav menu icon onclick*/
