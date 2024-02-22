// $('nav a').on('click', function(event) {
//     event.preventDefault();

//     var target = $(this.hash);
//     $('html, body').animate({
//         scrollTop: target.offset().top
//     }, 1000);
// });

setTimeout(function() {
    var element = document.getElementById('welcome');
    element.parentNode.removeChild(element);
}, 5000); // Adjust this value to match the duration of your animation

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('navMenu').scrollIntoView({behavior: "smooth"});
    });
});

var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

function showNextSlide() {
    slides[slideIndex].style.display = "none";
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
}

setInterval(showNextSlide, 2000); // Change slide every 2 seconds


var cyberslideIndex = 0;
var cyberslides = document.getElementsByClassName("cyber-slide");

function showNextCyberSlide() {
    cyberslides[cyberslideIndex].style.display = "none";
    cyberslideIndex = (cyberslideIndex + 1) % cyberslides.length;
    cyberslides[cyberslideIndex].style.display = "block";
}

setInterval(showNextCyberSlide, 2000); // Change slide every 2 seconds