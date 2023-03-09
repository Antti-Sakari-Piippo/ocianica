const navLinks = document.getElementById('nav-links')
const menuButton = document.getElementById('menu-button')

menuButton.addEventListener('click', function () {
  navLinks.classList.toggle('open')
})
