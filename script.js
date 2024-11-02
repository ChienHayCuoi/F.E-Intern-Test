document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.section-top__2--img1 img, .section-top__2--img2 img, .section-bottom__1 img, .section-bottom__4 img');

    images.forEach(img => {
        img.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
        });

        img.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
});