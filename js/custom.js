const texts = ["Aung Min Hein.","a FrontEnd Developer.","17 years old."];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type(){
    if(count === texts.length){
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, index++);
    
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
      count++;
      index=0;
    }
    setTimeout(type, 300);
  }());
  var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
      //cube for phones
      var swiper = new Swiper(".myPhoneSwiper", {
        effect: "cube",
        grabCursor: true,
        loop: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
    
    window.addEventListener("load", function() {
        var loader = document.querySelector(".center")
        loader.className += " dissapear";
    })