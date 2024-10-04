        /* index */

document.addEventListener('DOMContentLoaded', function () {
    // Set the timeout duration (in milliseconds)
    const timeoutDuration = 10000; // 10 seconds

    // Select the overlay element
    const overlay = document.getElementById('overlay');

    // Function to fade out the overlay and redirect
    function handleOverlay() {
        overlay.style.opacity = 0;
        setTimeout(function() {
            window.location.href = 'first.html' // Replace with your new page URL
        }, 10); // Match this delay with the CSS transition duration
    }

    // Set the timeout to trigger the overlay change
    setTimeout(handleOverlay, timeoutDuration);
});


/* Testimonal home.. */

$('.testimonial_owlCarousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    autoplay:false,   
    smartSpeed: 3000, 
    autoplayTimeout:4000,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
    }
    })
