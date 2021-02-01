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

// Get Header Heading
const headerHeading = document.querySelector('h1')

// Get form
const form = document.querySelector('form')

// Get textareas
const questionArea = document.querySelector('.create-page__form__add-question')
const answerArea = document.querySelector('.create-page__form__add-answer')
const tagsArea = document.querySelector('.create-page__form__add-tags')

// Get character counters
const questionCounter = document.querySelector(
  '.create-page__form__add-question__counter'
)
const answerCounter = document.querySelector(
  '.create-page__form__add-answer__counter'
)
const tagCounter = document.querySelector(
  '.create-page__form__add-tags__counter'
)

// Get button in form
const formButton = document.querySelector('.create-page__form__button')

// Get all answer buttons
const answerButtons = document.querySelectorAll('.card__show-answer')

// Get all answers
const answers = document.querySelectorAll('.card__show-answer__answer')

/* ALPHA TESTING 
tagsArea.addEventListener('input', () => {
  return tagCounter.textContent.match(/,/g)
  ? (tagCounter.textContent = tagCounter.textContent.match(/,/g).length - 5)
  : (tagCounter.textContent = 5)
})*/

/* Functions */
let clickAnswerButton = answerButtons.forEach(answerButton => {
  answerButton.addEventListener('click', () => {
    answerButton.textContent == 'hide answer'
      ? (answerButton.textContent = 'show answer')
      : (answerButton.textContent = 'hide answer')
    answerButton.parentNode.querySelector('p').classList.toggle('hidden')
  })
})

// Prevent form from submitting & delete all input
form.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    formButton.click()
  }
})

form.addEventListener('submit', event => {
  event.preventDefault()

  // ! add lines that return form input and make new card

  form.reset()
  questionCounter.textContent = questionArea.maxLength
  answerCounter.textContent = answerArea.maxLength
  questionArea.focus()
})

// Add counters to textareas
questionArea.addEventListener('input', () => {
  questionCounter.textContent =
    questionArea.maxLength - questionArea.value.length
})

answerArea.addEventListener('input', () => {
  answerCounter.textContent = answerArea.maxLength - answerArea.value.length
})

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
    markedCard.parentNode
      .querySelector('.card__show-answer__answer')
      .classList.add('hidden')
    markedCard.parentNode.querySelector('.card__show-answer').textContent =
      'show answer'
  })
})

navHome.addEventListener('click', () => {
  navItems.forEach(navItem => {
    navItem.classList.remove('nav__entry--active')
  })

  navHome.classList.add('nav__entry--active')

  headerHeading.textContent = 'Riddle me this...'
  headerHeading.style.fontSize = '20px'
})

navBookmark.addEventListener('click', () => {
  navItems.forEach(navItem => {
    navItem.classList.remove('nav__entry--active')
  })

  navBookmark.classList.add('nav__entry--active')

  headerHeading.textContent = 'favourites'
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

  headerHeading.textContent = 'create'

  questionArea.focus()
})

navSettings.addEventListener('click', () => {
  navItems.forEach(navItem => {
    navItem.classList.remove('nav__entry--active')
  })

  navSettings.classList.add('nav__entry--active')
})
