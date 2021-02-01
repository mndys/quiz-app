import getAllByDataJs from './getAllByDataJs'
import getByDataName from './getByDataName'

export default function bookmark() {
  const bookmarks = getAllByDataJs('bookmark')

  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('card__bookmark--marked')
      // ! Investigate: The following doesn't work as expected
      if (bookmark.classList.contains('card__bookmark--marked')) {
        if (
          (getByDataName('bookmarks').innerHTML =
            '<div class="lonely">What lonely life one must lead who has no favourites in this World...<br />Get some!</div>')
        ) {
          getByDataName('bookmarks').innerHTML = bookmark.parentNode.outerHTML
        } else {
          getByDataName('bookmarks').innerHTML += bookmark.parentNode.outerHTML
        }
      } else if (!bookmark.classList.contains('card__bookmark--marked')) {
        getByDataName('bookmarks').innerHTML -= bookmark.parentNode.outerHTML
        if (getByDataName('bookmarks').innerHTML === 'NaN') {
          getByDataName('bookmarks').innerHTML =
            '<div class="lonely">What lonely life one must lead who has no favourites in this World...<br />Get some!</div>'
        }
      }
    })
  })
}
