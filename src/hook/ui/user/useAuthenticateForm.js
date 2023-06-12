import useInput from '../../common/useInput'

export const useAuthenticateForm = () => {
  const [id, onChangeId] = useInput('')
  const [pw, onChangePw] = useInput('')
  const [pwCheck, onChangePwCheck] = useInput('')

  const [idMsg, , setIdMsg] = useInput('')
  const [pwMsg, , setPwMsg] = useInput('')
  const [pwCheckMsg, , setPwCheckMsg] = useInput('')

  const idRegex = /^[a-z0-9_-]{5,20}$/
  const pwRegex = /^[a-zA-Z0-9]{8,16}$/

  const isEmptyValue = (value) => value === ''
  const isValidateId = (userInputValue) => idRegex.test(userInputValue)
  const isValidatePw = (userInputValue) => pwRegex.test(userInputValue)
  const isPasswordEqual = () => pw === pwCheck

  const targetValue = {
    inputValue: {
      id,
      pw,
      'pw-check': pwCheck,
    },
    setMsgValue: {
      id: setIdMsg,
      pw: setPwMsg,
      'pw-check': setPwCheckMsg,
    },
  }

  const ERROR_MSG = {
    required: '필수 정보입니다.',
    invalidId: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
    invalidPw: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
    invalidPwCheck: '비밀번호가 일치하지 않습니다.',
  }

  const isValidate = (identifier) => {
    const usetInputValue = targetValue.inputValue[identifier]

    if (isEmptyValue(usetInputValue)) return 'required'

    switch (identifier) {
      case 'id':
        return isValidateId(usetInputValue) ? true : 'invalidId'
      case 'pw':
        return isValidatePw(usetInputValue) ? true : 'invalidPw'
      case 'pw-check':
        return isPasswordEqual() ? true : 'invalidPwCheck'
      default:
        return
    }
  }

  const validationHandler = (identifier) => {
    const isValid = isValidate(identifier)

    if (isValid !== true) targetValue.setMsgValue[identifier](ERROR_MSG[isValid])

    if (isValid === true) targetValue.setMsgValue[identifier]('')

    // 비밀번호 확인을 입력한 후 비밀 번호를 수정했을 때, 비밀번호 확인의 유효성 검사를 다시 해줘야 한다.
    if (identifier === 'pw' && pw !== '') validationHandler('pw-check')

    return isValid
  }

  const onSubmit = (event, callback) => {
    event.preventDefault()
    callback()
  }

  return {
    state: {
      id,
      pw,
      pwCheck,
      idMsg,
      pwMsg,
      pwCheckMsg,
    },
    changeHandler: {
      onChangeId,
      onChangePw,
      onChangePwCheck,
      validationHandler,
    },
    onSubmit,
  }
}
