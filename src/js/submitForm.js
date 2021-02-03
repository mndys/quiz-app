import getByDataJs from './getByDataJs'
import getByDataName from './getByDataName'

export default function submitForm() {
  const form = getByDataJs('form')
  const questionArea = getByDataJs('questionArea')

  form.addEventListener('submit', event => {
    event.preventDefault()
    // ! add lines that return form input and make new card
    form.reset()
    Array.from(document.querySelectorAll('.form__counter')).map(
      counter => (counter.textContent = '')
    )
    questionArea.focus()
  })
}
