document.addEventListener('DOMContentLoaded', function() {
    // Optional: Preload GIFs for smoother transition
    // This creates hidden image objects in memory to load the GIFs before they are displayed
    const gifPaths = ['imgs/icon-01.gif', 'imgs/icon-02.gif', 'imgs/icon-03.gif'];
    gifPaths.forEach(path => {
        const img = new Image();
        img.src = path;
    });

    // Get all image elements within the "QUE ES UVACLUB" section by their IDs
    const imagesToHover = document.querySelectorAll('#icon-01, #icon-02, #icon-03');

    // Loop through each selected image to add event listeners
    imagesToHover.forEach(img => {
        const originalSrc = img.src; // Store the original .png source
        const gifSrc = originalSrc.replace('.png', '.gif'); // Create the .gif source by replacing .png with .gif

        // Add event listener for when the mouse pointer enters the image
        img.addEventListener('mouseover', function() {
            img.src = gifSrc; // Change the image source to the GIF version
        });

        // Add event listener for when the mouse pointer leaves the image
        img.addEventListener('mouseout', function() {
            img.src = originalSrc; // Change the image source back to the original PNG version
        });
    });

    // Script personalizado para cambiar el navbar al hacer scroll (existing code from index.html)
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
});