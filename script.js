document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.section-top__2--img1 img, .section-top__2--img2 img, .section-bottom__1 img, .section-bottom__4 img');
    
    const scrollElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

    function handleScrollAnimation() {
        scrollElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight * 0.8 && elementBottom > 0) {
                element.classList.add('active');
            }
        });
    }

    handleScrollAnimation();

    window.addEventListener('scroll', handleScrollAnimation);

    function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    window.addEventListener('scroll', debounce(handleScrollAnimation));
});