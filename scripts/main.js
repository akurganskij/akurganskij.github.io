$(document).ready(function(){
    $('.header').height($(window).height());
});
$(document).ready(function(){
  let navigationHeight = $(".navbar").innerHeight();
  $('.about').height($(window).height() - navigationHeight);
});
$(document).ready(function(){
    $('a.nav-link').click(function() {
      let navigationHeight = $(".navbar").innerHeight();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - navigationHeight
          }, 1000);
        return false;
      });
});
$(document).ready(function(){
    $('a.navbar-brand').click(function() {
        $('html, body').animate({
            scrollTop: "0"
          }, 1000);
        return false;
      });
});

$(document).ready(function(){
    $('#toabout').click(function() {
      let navigationHeight = $(".navbar").innerHeight();  
      $('html, body').animate({
            scrollTop: $($("#about")).offset().top - navigationHeight
          }, 1000);
        return false;
      });
});

function rnd_btn_click(e){
  let min = Number(document.getElementById("min-rnd").value);
  let max = Number(document.getElementById("max-rnd").value);
  let h = document.getElementById("rndtext");
  let a = Math.floor(Math.random()*(max - min + 1) + min);
  h.textContent = "You've got " + a;
  return false;
}
function clr_btn_click(e){
  document.getElementById("max-rnd").value = 100;
  document.getElementById("min-rnd").value = 1;
  let h = document.getElementById("rndtext");
  h.textContent = "Get a number";
  return false;
}