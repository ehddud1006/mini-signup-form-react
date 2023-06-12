import SignUpForm from '../../components/ui/user/SignUpForm'
import Footer from '../../components/shared/Footer'
import { useAuthenticateForm } from '../../hook/ui/user/useAuthenticateForm'
import Modal from '../../components/shared/Modal'
import { useModal } from '../../hook/common/useModal'

const SignUpPage = () => {
  const { state, changeHandler, onSubmit } = useAuthenticateForm()
  const { ref, modalHandler } = useModal()

  return (
    <>
      <section className="form-wrapper">
        <SignUpForm state={state} changeHandler={changeHandler} modalHandler={modalHandler} onSubmit={onSubmit} />
        <Footer />
      </section>
      <aside id="font-control-box" className="flex fixed bottom-0 right-0">
        <button
          id="increase-font-btn"
          className="bg-white text-gray-500 border border-gray-300 hover:bg-red-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full"
        >
          +
        </button>
        <button
          id="decrease-font-btn"
          className="bg-white text-gray-500 border border-gray-300 hover:bg-blue-50 focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:text-white rounded-full"
        >
          -
        </button>
      </aside>
      <Modal state={state} modalHandler={modalHandler} ref={ref} />
    </>
  )
}

export default SignUpPage
