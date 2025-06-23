document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-button');

    galleryItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the link from navigating away
            const imageUrl = this.getAttribute('href');
            lightboxImg.setAttribute('src', imageUrl);
            lightbox.style.display = 'flex'; // Use flex to center the content
        });
    });

    // Function to close the lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    // Close lightbox when clicking the close button or the background
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
});