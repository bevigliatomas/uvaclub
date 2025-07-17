document.addEventListener('DOMContentLoaded', function() {
    // Optional: Preload GIFs for smoother transition
    const gifPaths = ['imgs/icon-01.gif', 'imgs/icon-02.gif', 'imgs/icon-03.gif'];
    gifPaths.forEach(path => {
        const img = new Image();
        img.src = path;
    });

    const imagesToHover = document.querySelectorAll('#icon-01, #icon-02, #icon-03');
    imagesToHover.forEach(img => {
        const originalSrc = img.src;
        const gifSrc = originalSrc.replace('.png', '.gif');

        img.addEventListener('mouseover', function() {
            img.src = gifSrc;
        });

        img.addEventListener('mouseout', function() {
            img.src = originalSrc;
        });
    });

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
});
