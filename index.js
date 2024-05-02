const sharePanel = document.querySelector('.share-options');
const shareButton = document.querySelector('.share-button');
const shareButtonFiller = document.querySelector('.share-button-filler');

shareButton.addEventListener('click' , () => {
    sharePanel.classList.toggle('active');
    shareButton.classList.toggle('active');
    shareButtonFiller.classList.toggle('active');
});