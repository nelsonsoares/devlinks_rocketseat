function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img  = document.querySelector("#profile img")

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.jpg')
    img.setAttribute('alt', 'Foto de Nelson Soares sério e barba light mode')
  } else {
    img.setAttribute('src','./assets/avatar.png')
    img.setAttribute('alt', 'Foto de Nelson Soares sério e barba dark mode')
  }
}
