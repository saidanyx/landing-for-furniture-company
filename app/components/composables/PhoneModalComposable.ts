export const UsePhoneModal = () => {
  const isOpen = useState('phone-modal-open', () => false)
  let text = useState('phone-modal-text', () => '')

  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return {
    isOpen,
    open,
    close,
    text
  }
}