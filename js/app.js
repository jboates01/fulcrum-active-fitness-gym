

$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});

// Initialize EmailJS
(function() {
    emailjs.init('yp-9Zevn1QToT0AVJ'); 
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    var formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Send form data using EmailJS
    emailjs.send('service_x7cp0wm', 'template_zggdxa6', formData) 
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('formMessage').innerHTML = '<div class="alert alert-success">Form has been sent successfully.</div>';
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('formMessage').innerHTML = '<div class="alert alert-danger">Failed to send the form. Please try again.</div>';
        });
});
