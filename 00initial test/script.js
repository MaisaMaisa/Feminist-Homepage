window.addEventListener('scroll', function() {
    const parallaxBackground = document.querySelector('.parallax-background');
    const scrollPosition = window.scrollY;
    parallaxBackground.style.transform = `translate3d(0, ${scrollPosition}px, 0)`;
  });

