// Get all bookmarks
const bookmarks = getByAllDataJs('bookmark')

// Get all cards
const cards = getByAllDataJs('card')

//Get navigation
const navItems = getAllByClass('.nav__entry')

// Get Navigation items
const navHome = getByDataJs('navHome')
const navBookmark = getByDataJs('navBookmark')
const navCreate = getByDataJs('navCreate')
const navSettings = getByDataJs('navSettings')

// Get main sections (^= pages)
const pages = getAllByClass('.page')

// Get each main section (^= page)
const createPage = getByClass('.create-page')
const homePage = getByClass('.app-grid')

// Get Header Heading
const headerHeading = getByElement('h1')

// Get form
const form = getByElement('form')

// Get textareas
const questionArea = getByClass('.create-page__form__add-question')
const answerArea = getByClass('.create-page__form__add-answer')
const tagsArea = getByClass('.create-page__form__add-tags')

// Get character counters
const questionCounter = getByClass('.create-page__form__add-question__counter')
const answerCounter = getByClass('.create-page__form__add-answer__counter')
const tagCounter = getByClass('.create-page__form__add-tags__counter')

// Get button in form
const formButton = getByClass('.create-page__form__button')

// Get all answer buttons
const answerButtons = getAllByClass('.card__show-answer')

// Get all answers
const answers = getAllByClass('.card__show-answer__answer')

// Helper functions
function getByDataJs(dataJsName, target = document) {
  return target.querySelector(`[data-js="${dataJsName}"]`)
}

function getByClass(className, target = document) {
  return target.querySelector(`${className}`)
}

function getByElement(elementName, target = document) {
  return target.querySelector(`${elementName}`)
}

function getAllByClass(className, target = document) {
  return target.querySelectorAll(`${className}`)
}

function getByAllDataJs(dataJsName, target = document) {
  return target.querySelectorAll(`[data-js="${dataJsName}"]`)
}

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
