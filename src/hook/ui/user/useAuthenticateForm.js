import useInput from '../../common/useInput'

export const useAuthenticateForm = () => {
  const [id, onChangeId] = useInput('')
  const [pw, onChangePw] = useInput('')
  const [pwCheck, onChangePwCheck] = useInput('')

  const idRegex = /^[a-z0-9_-]{5,20}$/
  const pwRegex = /^[a-zA-Z0-9]{8,16}$/

  const isEmptyValue = (value) => value === ''
  const isValidateId = (userInputValue) => idRegex.test(userInputValue)
  const isValidatePw = (userInputValue) => pwRegex.test(userInputValue)
  const isPasswordEqual = () => pw === pwCheck

  const targetValue = {
    id,
    pw,
    'pw-check': pwCheck,
  }

  const isValidate = (identifier) => {
    const usetInputValue = targetValue[identifier]

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

    // if (isValid !== true) printErrorMessage(msgTarget, target, isValid)

    // if (isValid === true) resetMessage(msgTarget, target)
    return isValid
  }

  return {
    state: {
      id,
      pw,
      pwCheck,
    },
    changeHandler: {
      onChangeId,
      onChangePw,
      onChangePwCheck,
      validationHandler,
    },
  }
}
