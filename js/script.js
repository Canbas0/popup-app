const submitBtn = document.querySelector('.submit');
const popupDiv = document.querySelector('.popup');
const okeyBtn = document.querySelector('.okey');

submitBtn.addEventListener('click', () => {
    popupDiv.style.display = 'flex';
    submitBtn.style.display = 'none';
    popupDiv.classList.add('active');
});

okeyBtn.addEventListener('click', () => {
    popupDiv.style.display = 'none';
    submitBtn.style.display = 'block';
    popupDiv.classList.remove('active');
});