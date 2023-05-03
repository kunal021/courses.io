// Nvbar Start 

const toggleButton = document.getElementsByClassName('toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-link')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

// Navaabar End