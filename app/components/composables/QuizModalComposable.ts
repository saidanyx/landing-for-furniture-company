export const UseQuizModal = () => {
  const isOpen = useState('quiz-modal-open', () => false)

  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return {
    isOpen,
    open,
    close
  }
}