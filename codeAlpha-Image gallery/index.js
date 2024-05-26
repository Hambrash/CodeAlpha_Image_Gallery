let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-image');

function showImage(index) {
    images.forEach((image, i) => {
        image.style.transform = `translateX(-${index * 100}%)`;
    });
}

function prevImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    showImage(currentImageIndex);
}

function nextImage() {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    showImage(currentImageIndex);
}

// Initial display
showImage(currentImageIndex);
