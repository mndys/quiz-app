// Get all bookmarks
const bookmarks = document.querySelectorAll('[data-js=bookmark]')

// Get all cards
const cards = document.querySelectorAll('[data-js=card]')

//Get navigation
const navItems = document.querySelectorAll('.nav__entry')

// Get Navigation items
const navHome = document.querySelector('[data-js=navHome]')
const navBookmark = document.querySelector('[data-js=navBookmark]')
const navCreate = document.querySelector('[data-js=navCreate]')
const navSettings = document.querySelector('[data-js=navSettings]')

// Get main sections (^= pages)
const pages = document.querySelectorAll('.page')

// Get each main section (^= page)
const createPage = document.querySelector('.create-page')
const homePage = document.querySelector('.app-grid')

// Toggle bookmarks on home page
bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('card__bookmark--marked')
  })
})

// Show all cards when navigating to home page
navHome.addEventListener('click', () => {
  pages.forEach(page => {
    page.classList.add('hidden')
  })

  homePage.classList.remove('hidden')

  cards.forEach(card => {
    card.classList.remove('hidden')
  })
})

// Hide all cards when navigating to bookmark page, then show all cards that were bookmarked
navBookmark.addEventListener('click', () => {
  cards.forEach(card => {
    card.classList.add('hidden')
  })

  // Get all cards that are marked; markedCards can only be established now, because we need to wait for user interaction
  const markedCards = document.querySelectorAll('.card__bookmark--marked')

  // Show all marked cards
  markedCards.forEach(markedCard => {
    const parentCard = markedCard.closest('[data-js=card]')
    parentCard.classList.remove('hidden')
  })
})

navHome.addEventListener('click', () => {
  navItems.forEach(navItem => {
    navItem.classList.remove('nav__entry--active')
  })

  navHome.classList.add('nav__entry--active')
})

navBookmark.addEventListener('click', () => {
  navItems.forEach(navItem => {
    navItem.classList.remove('nav__entry--active')
  })
  navBookmark.classList.add('nav__entry--active')
})

navCreate.addEventListener('click', () => {
  navItems.forEach(navItem => {
    navItem.classList.remove('nav__entry--active')
  })

  navCreate.classList.add('nav__entry--active')

  pages.forEach(page => {
    page.classList.add('hidden')
  })

  createPage.classList.remove('hidden')
})

navSettings.addEventListener('click', () => {
  navItems.forEach(navItem => {
    navItem.classList.remove('nav__entry--active')
  })

  navSettings.classList.add('nav__entry--active')
})
