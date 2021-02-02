import getAllByDataJs from './getAllByDataJs'

export default function clickAnswerButton() {
  const answerButtons = getAllByDataJs('answerButton')

  answerButtons.forEach(answerButton => {
    answerButton.addEventListener('click', () => {
      answerButton.textContent == 'hide answer'
        ? (answerButton.textContent = 'show answer')
        : (answerButton.textContent = 'hide answer')
      answerButton.parentNode.querySelector('p').classList.toggle('hidden')
    })
  })
}
