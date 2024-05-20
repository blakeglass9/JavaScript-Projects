document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const close = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.lightbox-img').forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxContent.src = image.src;
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (event) => {
        if (event.target == lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
