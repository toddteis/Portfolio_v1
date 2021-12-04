const toggleBackToTopText = document.querySelector('.page-top-chevron');
const pageTopText = document.querySelector('.page-top-text');

toggleBackToTopText.addEventListener('mouseover', () => {
    pageTopText.style.opacity = '1';
});

toggleBackToTopText.addEventListener('mouseout', () => {
    pageTopText.style.opacity = '0';
});

