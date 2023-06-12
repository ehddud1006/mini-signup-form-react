import { forwardRef } from 'react'
import Button from '../Button'

const Modal = forwardRef((props, ref) => {
  const {
    state: { id, pw },
    modalHandler: { closeModal },
  } = props

  return (
    <dialog id="modal" className="rounded-lg shadow-xl text-left" ref={ref}>
      <div className="w-full rounded-lg">
        <div className="p-6 mt-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900">입력하신 내용을 확인해주세요.</h3>
          <div className="text-left">
            <div className="mt-2">
              아이디
              <p id="confirm-id" className="text-sm text-blue-500 bold">
                {id}
              </p>
            </div>
            <div className="mt-2">
              비밀번호
              <p id="confirm-pw" className="text-sm text-blue-500 bold">
                {pw}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 flex justify-center rounded-lg">
          <Button color="gray" onClick={() => closeModal()}>
            취소하기
          </Button>
          <Button
            color="blue"
            onClick={() => {
              alert('가입되었습니다 🥳 ')
              closeModal()
            }}
          >
            가입하기
          </Button>
        </div>
      </div>
    </dialog>
  )
})

export default Modal
