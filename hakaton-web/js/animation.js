function reveal() {
    const type = document.querySelectorAll(".type-class");
    const about = document.querySelectorAll(".about-main");
    const price = document.querySelectorAll(".price_section");

    const ot1 =  document.querySelectorAll(".ot1"),
          ot2 = document.querySelectorAll(".ot2"),
          ot3 = document.querySelectorAll(".ot3");
  
    for (var i = 0; i < type.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = type[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        type[i].classList.add("active");
      } else {
        type[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  