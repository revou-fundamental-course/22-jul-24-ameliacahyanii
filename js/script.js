// Shrink Navbar Scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").style.padding = "10px 15px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.padding = "15px 18px";
        document.getElementById("logo").style.fontSize = "30px";
    }
}

// Get the navbar-right and toggle button
const navbarRight = document.getElementById('navbar-right');
const toggleButton = document.getElementById('toggle-menu');

// Add event listener to toggle button
toggleButton.addEventListener('click', () => {
    // Toggle the navbar-right
    navbarRight.classList.toggle('show');
});

// Slider Image
// Get the elements
const slides = document.querySelectorAll('.mySlides');
const dots = document.querySelectorAll('.dot');

// Set the initial slide index
let slideIndex = 0;

// Function to show the next slide
function showSlide() {
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Show the current slide
    slides[slideIndex].style.display = 'block';

    // Update the dots
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === slideIndex) {
            dot.classList.add('active');
        }
    });
}

// Function to change the slide
function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide();
}

// Add event listeners to the dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        showSlide();
    });
});


// Show the first slide
showSlide();

// Set the interval to change the slide every 5 seconds (optional)
setInterval(() => changeSlide(1), 5000);


// Button Package Card
function bookNow(destination) {
    alert('You have selected ' + destination + ' package!');
};

// Form Validation
function validateForm() {
    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Validation flag
    let isValid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }

    // Subject validation
    if (subject === '') {
        document.getElementById('subjectError').textContent = 'Subject is required';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    }

    // If form is valid, show popup
    if (isValid) {
        showPopup("Thank you! Your message has been sent successfully.");
    }

    // Return validation status
    return isValid;
}

function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = message;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}


