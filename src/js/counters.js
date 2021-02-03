import getByDataJs from './getByDataJs'
import getByDataName from './getByDataName'

export default function counters() {
  const questionArea = getByDataJs('questionArea')
  const questionCounter = getByDataName('questionCounter')
  const answerArea = getByDataJs('answerArea')
  const answerCounter = getByDataName('answerCounter')
  const tagCounter = getByDataName('tagCounter')
  const tagArea = getByDataJs('tagArea')

  questionArea.addEventListener('input', () => {
    questionCounter.textContent =
      questionArea.maxLength - questionArea.value.length
  })

  answerArea.addEventListener('input', () => {
    answerCounter.textContent = answerArea.maxLength - answerArea.value.length
  })

  tagArea.addEventListener('input', () => {
    const words = tagArea.value
      .split(',')
      .map(word => word.trim()) // trim whitespace from words
      .filter(word => word !== '') // remove empty-string-words
    tagCounter.textContent = 5 - words.length
  })
}
