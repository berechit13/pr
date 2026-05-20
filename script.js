document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // 1. Scroll Animation with IntersectionObserver
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS animation
                entry.target.classList.add('visible');
                
                // Optional: Stop observing once the animation has played
                // observer.unobserve(entry.target); 
            } else {
                // Optional: Remove class to replay animation when scrolling back up
                // entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});