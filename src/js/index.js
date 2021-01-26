const bookmark1 = document.querySelector('[data-js=bookmark1]')
const bookmark2 = document.querySelector('[data-js=bookmark2]')
const bookmark3 = document.querySelector('[data-js=bookmark3]')
const bookmark4 = document.querySelector('[data-js=bookmark4]')
const bookmark5 = document.querySelector('[data-js=bookmark5]')
const bookmark6 = document.querySelector('[data-js=bookmark6]')

const navHome = document.querySelector('[data-js=navHome]')
const navBookmark = document.querySelector('[data-js=navBookmark]')
const navCreate = document.querySelector('[data-js=navCreate]')
const navSettings = document.querySelector('[data-js=navSettings]')

// Toggle bookmark
bookmark1.addEventListener('click', () => {
  bookmark1.classList.toggle('card__bookmark--marked')
})
bookmark2.addEventListener('click', () => {
  bookmark2.classList.toggle('card__bookmark--marked')
})
bookmark3.addEventListener('click', () => {
  bookmark3.classList.toggle('card__bookmark--marked')
})
bookmark4.addEventListener('click', () => {
  bookmark4.classList.toggle('card__bookmark--marked')
})
bookmark5.addEventListener('click', () => {
  bookmark5.classList.toggle('card__bookmark--marked')
})
bookmark6.addEventListener('click', () => {
  bookmark6.classList.toggle('card__bookmark--marked')
})

navHome.addEventListener('click', () => {
  navHome.classList.add('nav__entry--active')
  navBookmark.classList.remove('nav__entry--active')
  navCreate.classList.remove('nav__entry--active')
  navSettings.classList.remove('nav__entry--active')
})
navBookmark.addEventListener('click', () => {
  navHome.classList.remove('nav__entry--active')
  navBookmark.classList.add('nav__entry--active')
  navCreate.classList.remove('nav__entry--active')
  navSettings.classList.remove('nav__entry--active')
})
navCreate.addEventListener('click', () => {
  navHome.classList.remove('nav__entry--active')
  navBookmark.classList.remove('nav__entry--active')
  navCreate.classList.add('nav__entry--active')
  navSettings.classList.remove('nav__entry--active')
})
navSettings.addEventListener('click', () => {
  navHome.classList.remove('nav__entry--active')
  navBookmark.classList.remove('nav__entry--active')
  navCreate.classList.remove('nav__entry--active')
  navSettings.classList.add('nav__entry--active')
})
