document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('.navbar');
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 20) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  });
  