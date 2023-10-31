const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');

    let currentIndex = 0;

    function showImage(index) {
      images.forEach((image, i) => {
        image.style.transform = `translateX(-${index * 100}%)`;
      });
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    setInterval(nextImage, 3000); // Automatically advance to the next image every 3 seconds

    showImage(currentIndex);