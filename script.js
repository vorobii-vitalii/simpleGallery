const currentImage = document.querySelector('#current');
const allImages = document.querySelectorAll('.imgs img');
let lastClickedImage = allImages[0];
const opacity = 0.5;

lastClickedImage.style.opacity = opacity;

allImages.forEach( image => {
    image.addEventListener('click',imgClick);
});

function imgClick(e) {
    // Fade-in effect
    currentImage.className = 'fade-in';

    // Get rid of fade later
    setTimeout(() => {
        currentImage.className = '';
    }, 500);

    // Change current image to source of clicked image
    currentImage.src = e.target.src;

    // Disable opacity of previous images
    if(lastClickedImage) 
        lastClickedImage.style.opacity = '1';
    
    // Change the opacity to var
    e.target.style.opacity = opacity;

    // Save the image in order to get rid of opacity later
    lastClickedImage = e.target;
}