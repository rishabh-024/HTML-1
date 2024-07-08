document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.createElement('div');
    toggleButton.classList.add('toggle-button');
    toggleButton.innerHTML = '&#9776;'; // Hamburger menu icon
    document.querySelector('.navbar').insertBefore(toggleButton, navLinks);

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
