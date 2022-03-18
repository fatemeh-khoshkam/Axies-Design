window.onresize = function () {
   const span = document.getElementById('wallet');
   if (this.innerWidth < 1225) {
       span.innerHTML = '';
   } else {
       span.innerHTML = 'Wallet connect';
   }
};

const menu = document.getElementById('header');
const scroll_btn = document.getElementById("scroll--top");

scroll_btn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
   scroll_btn.classList.add("scroll--top--show");

  let scrollTop = window.pageYOffset;

  if (scrollTop === 0) {
   scroll_btn.classList.remove("scroll--top--show");
  }
});
 
 window.addEventListener("scroll", function () {
    
   let scroll_Y = window.scrollY;
   if (scroll_Y >= 75) {
      menu.classList.add("sticky--header");
   } else {
      menu.classList.remove("sticky--header");
   }
 });


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

setTimer(
   new Date("March 21, 2022 18:17:04"),
   document.getElementById("card__time1")
  );
 setTimer(
   new Date("March 29, 2022 15:37:25"),
   document.getElementById("card__time2")
  );
  setTimer(
   new Date("March 25, 2022 05:30:55"),
   document.getElementById("card__time3")
  );
  setTimer(
   new Date("March 23, 2022 22:19:45"),
   document.getElementById("card__time4")
  );

