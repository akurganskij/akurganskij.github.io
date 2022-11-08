let first_ticks = true;
let first_tickm = true;
let first_tickh = true;
$(document).ready(function(){    
    if(document.getElementById("descr").offsetHeight >= $(window).height()/2){
      alert(String(document.getElementById("descr").offsetHeight));
      $('.header').height(document.getElementById("descr").offsetHeight * 1.4);
    }
    else $('.header').height($(window).height());
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

async function page_loaded(){
  let nowh = new Date().getHours();
  let nowm = new Date().getMinutes();
  let nows = new Date().getSeconds();
  let clock = document.getElementById("clock");
  let mainctx = clock.getContext("2d");
  let secs = document.createElement("canvas");
  let mins = document.createElement("canvas");
  let hs = document.createElement("canvas");
  let img = new Image();
  let imgm = new Image();
  let imgh = new Image();  
  img.src = "images/hand.png";
  imgm.src = "images/handm.png";
  imgh.src = "images/handh.png";
  draw(secs, img, 1);
  draw(mins, imgm, 2);
  draw(hs, imgh, 3);
  mainctx.clearRect(0, 0, 225, 225);
  document.getElementById("time").textContent = String(nowh) + ":" + String(nowm) + ":" + String(nows);
  mainctx.drawImage(mins, 0, 0, 225, 225);
  mainctx.drawImage(hs, 0, 0, 225, 225);
  mainctx.drawImage(secs, 0, 0, 225, 225);
  setTimeout(page_loaded, 1);
}
function draw(cv, img, a){
  let nowh = new Date().getHours();
  let nowm = new Date().getMinutes();
  let nows = new Date().getSeconds();
  cv.height = 225;
  cv.width = 225;
  let ctx = cv.getContext("2d");
  let ang =0;
  if(a == 1) ang = nows * 6;
  else if(a == 2) ang = nowm * 6 + nows/60;
  else ang = nowh * 30 + nowm / 2 + nows/120
  ctx.clearRect(0, 0, 225, 225);
  ctx.rotate(Math.PI / 180 * ang);
  let x = 112.5 - 112.5 * (Math.cos(Math.PI / 180 * ang ) + Math.sin(Math.PI / 180 * ang ));
  let y = 112.5 - 112.5 * (Math.cos(Math.PI / 180 * ang ) - Math.sin(Math.PI / 180 * ang ));
  ctx.translate(-x, -y); 
  ctx.drawImage(img, 0, 0, 225, 225); 
}