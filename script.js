let index = 0;

function showSlide() {
    const slides = document.querySelectorAll('.slider img');
    if (index >= slides.length) {
        index = 0;
    }
    document.querySelector('.slider').style.transform = `translateX(-${index * 100}%)`;
    index++;
}

setInterval(showSlide, 3000);  // Change slide every 3 seconds
