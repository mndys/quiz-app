import getByDataJs from './getByDataJs'
import getByDataName from './getByDataName'

export default function counters() {
  const questionArea = getByDataJs('questionArea')
  const questionCounter = getByDataName('questionCounter')
  const answerArea = getByDataJs('answerArea')
  const answerCounter = getByDataName('answerCounter')

  questionArea.addEventListener('input', () => {
    questionCounter.textContent =
      questionArea.maxLength - questionArea.value.length
  })

  answerArea.addEventListener('input', () => {
    answerCounter.textContent = answerArea.maxLength - answerArea.value.length
  })
}
