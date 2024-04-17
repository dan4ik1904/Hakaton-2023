function reveal() {
    const about = document.querySelectorAll(".about-main");
    const price = document.querySelectorAll(".price_section");

    const ot1 =  document.querySelectorAll(".ot1"),
          ot2 = document.querySelectorAll(".ot2"),
          ot3 = document.querySelectorAll(".ot3");
  
    for (var i = 0; i < about.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = about[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          about[i].classList.add("active");
        } else {
          about[i].classList.remove("active");
        }
    }
    for (var i = 0; i < price.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = price[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          ot1[i].classList.add('active')
          ot2[i].classList.add('active')
          ot3[i].classList.add('active')
        } else {
            ot1[i].classList.remove('active')
            ot2[i].classList.remove('active')
            ot3[i].classList.remove('active')
        }
    }
  }
  
  window.addEventListener("scroll", reveal);