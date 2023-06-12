import { useRef } from 'react'

export const useModal = () => {
  const ref = useRef(null)

  const openModal = () => {
    ref.current.showModal()
  }

  const closeModal = () => {
    ref.current.close()
  }

  return { ref, modalHandler: { openModal, closeModal } }
}
