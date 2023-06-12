import SignUpForm from '../../components/ui/user/SignUpForm'
import Footer from '../../components/shared/Footer'
import { useAuthenticateForm } from '../../hook/ui/user/useAuthenticateForm'
import Modal from '../../components/shared/Modal'
import { useModal } from '../../hook/common/useModal'
import FontSizeHandler from '../../components/ui/user/FontSizeHandler'
import { useFontSize } from '../../hook/ui/user/useFontSize'

const SignUpPage = () => {
  const { state, changeHandler, onSubmit } = useAuthenticateForm()
  const { ref, modalHandler } = useModal()
  const { fontSize, fontSizeHandler } = useFontSize()
  return (
    <>
      <section className="form-wrapper" style={fontSize ? { fontSize: `${fontSize}px` } : {}}>
        <SignUpForm state={state} changeHandler={changeHandler} modalHandler={modalHandler} onSubmit={onSubmit} />
        <Footer />
      </section>
      <FontSizeHandler fontSize={fontSize} fontSizeHandler={fontSizeHandler} />
      <Modal state={state} modalHandler={modalHandler} ref={ref} />
    </>
  )
}

export default SignUpPage
