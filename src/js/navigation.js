import getAllByDataJs from './getAllByDataJs'
import getByDataJs from './getByDataJs'

export default function navigation() {
  const pages = getAllByDataJs('page')
  const navButtons = getAllByDataJs('navButton')
  const headerHeading = getByDataJs('headerHeading')
  const questionArea = getByDataJs('questionArea')

  navButtons.forEach(button => {
    const clickedButtonName = button.dataset.name
    button.addEventListener('click', () => {
      pages.forEach(page => {
        const pageName = page.dataset.name
        page.classList.toggle('hidden', clickedButtonName !== pageName)
      })

      if (clickedButtonName === 'home') {
        headerHeading.innerHTML = `
        riddle me this… <i class="fa fa-question headerHeading"></i>
        `
      } else if (clickedButtonName === 'bookmarks') {
        headerHeading.textContent = 'favourites'
      } else if (clickedButtonName === 'create') {
        headerHeading.textContent = 'create'
        questionArea.focus()
      } else if (clickedButtonName === 'settings') {
        headerHeading.textContent = 'settings'
      }
      navButtons.forEach(button => {
        button.classList.toggle(
          'nav__entry--active',
          clickedButtonName === button.dataset.name
        )
      })
    })
  })
}
