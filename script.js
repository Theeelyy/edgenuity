// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const isOpen = navLinks.classList.contains('active');
        mobileMenuBtn.innerHTML = isOpen ? 
          '<i class="fas fa-times"></i>' : 
          '<i class="fas fa-bars"></i>';
      });
    }
    
    // Close menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
});

// Slideshow functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slideshow-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    function showSlide(n) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[n].classList.add('active');
      dots[n].classList.add('active');
      currentSlide = n;
    }
    
    // Initialize the slideshow
    if (slides.length > 0) {
      showSlide(0);
      
      // Set up dot navigation
      dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
          showSlide(index);
        });
      });
      
      // Auto advance slides
      setInterval(function() {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        showSlide(next);
      }, 5000);
    }
});