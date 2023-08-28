const navLinks = document.getElementById('nav-links')
const menuButton = document.getElementById('menu-button')
const body = document.body

menuButton.addEventListener('click', function () {
  const isExpanded = this.getAttribute('aria-expanded') === 'true'
  this.setAttribute('aria-expanded', !isExpanded)
  navLinks.classList.toggle('open')
})

// Close the menu when a link is clicked
const navLinksList = document.querySelectorAll('#nav-links a')
navLinksList.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 76em)').matches) {
      menuButton.setAttribute('aria-expanded', 'false')
      navLinks.classList.remove('open')
    }
  })
})
