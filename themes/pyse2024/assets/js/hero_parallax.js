const parallaxElement = document.querySelector('.hero-parallax');

document.addEventListener('mousemove', function (e) {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    const moveX = x * 10;
    const moveY = y * 10;

    parallaxElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
});