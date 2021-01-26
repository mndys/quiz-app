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

const card1 = document.querySelector('[data-js=card1]')
const card2 = document.querySelector('[data-js=card2]')
const card3 = document.querySelector('[data-js=card3]')
const card4 = document.querySelector('[data-js=card4]')
const card5 = document.querySelector('[data-js=card5]')
const card6 = document.querySelector('[data-js=card6]')

const markedCards = document.querySelectorAll('.card__bookmark--marked')

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

  card1.classList.remove('hidden')
  card2.classList.remove('hidden')
  card3.classList.remove('hidden')
  card4.classList.remove('hidden')
  card5.classList.remove('hidden')
  card6.classList.remove('hidden')
})
navBookmark.addEventListener('click', () => {
  navHome.classList.remove('nav__entry--active')
  navBookmark.classList.add('nav__entry--active')
  navCreate.classList.remove('nav__entry--active')
  navSettings.classList.remove('nav__entry--active')

  card1.classList.add('hidden')
  card2.classList.add('hidden')
  card3.classList.add('hidden')
  card4.classList.add('hidden')
  card5.classList.add('hidden')
  card6.classList.add('hidden')

  markedCards.forEach(card => {
    card.classList.remove('hidden')
    console.log(card)
  })
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
