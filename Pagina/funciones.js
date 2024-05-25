document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.gif-button');
    const gifTitle = document.getElementById('gif-title');
    const gifImage = document.getElementById('gif-image');
    const gifDescription = document.getElementById('gif-description');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const gif = button.getAttribute('data-gif');
            const title = button.getAttribute('data-title');
            const description = button.getAttribute('data-description');

            gifTitle.textContent = title;
            gifImage.src = gif;
            gifDescription.textContent = description;

            gifTitle.style.display = 'block';
            gifImage.style.display = 'block';
            gifDescription.style.display = 'block';
        });
    });
});