document.addEventListener('DOMContentLoaded', function () {
  // Initialize Bootstrap Carousel for the testimonial slider
  var testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
    interval: 5000, // Set the interval for automatic sliding (in milliseconds)
    pause: 'hover' // Pause the slider on hover
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Gallery modal image view
  var galleryImages = document.querySelectorAll('.gallery-item img');
  galleryImages.forEach(img => {
    img.addEventListener('click', function () {
      // Display the clicked image in a modal
      // Example: showModalImage(this.src);
    });
  });

  // Custom slider controls (if needed)
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  prevBtn.addEventListener('click', function() {
    testimonialCarousel.prev();
  });
  nextBtn.addEventListener('click', function() {
    testimonialCarousel.next();
  });

  // Function to show image in modal
  function showModalImage(src) {
    // Code to display image in a modal goes here
  }
});