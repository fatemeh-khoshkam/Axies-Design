// Set the date we're counting down to
function setTimer(enddate, elem){
   (function tick() {
      var now = new Date().getTime();
      var distance = enddate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);


     elem.innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;

    if(distance < 0){
     elem.innerHTML = "EXPIRED";
    }else{
     setTimeout(tick,1000);
   }
  })()
}

///// preloader
let overlay = document.getElementById("preloader");
window.addEventListener('load', function () {
    overlay.style.display = 'none';
})