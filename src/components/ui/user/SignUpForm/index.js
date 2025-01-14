import React from 'react'
import Input from '../../../shared/Input'

const SignUpForm = (props) => {
  const {
    state: { id, pw, pwCheck, idMsg, pwMsg, pwCheckMsg },
    changeHandler: { onChangeId, onChangePw, onChangePwCheck, validationHandler },
    modalHandler: { openModal },
    onSubmit,
  } = props

  return (
    <form
      id="form"
      className="w-full max-w-md m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      autoComplete="off"
      onSubmit={(event) => onSubmit(event, openModal)}
    >
      <Input
        data-testid="signup-id"
        label="아이디"
        id="id"
        type="text"
        placeholder="아이디를 입력해주세요."
        autoFocus
        value={id}
        onChange={onChangeId}
        onBlur={() => validationHandler('id')}
        message={idMsg}
      />
      <Input
        data-testid="signup-pw"
        label="비밀번호"
        id="pw"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        autoComplete="off"
        value={pw}
        onChange={onChangePw}
        onBlur={() => validationHandler('pw')}
        message={pwMsg}
      />
      <Input
        data-testid="signup-pw-check"
        label="비밀번호 확인"
        id="pw-check"
        type="password"
        placeholder="비밀번호 확인을 입력해주세요."
        autoComplete="off"
        value={pwCheck}
        onChange={onChangePwCheck}
        onBlur={() => validationHandler('pw-check')}
        message={pwCheckMsg}
      />

      <div className="flex items-center justify-center">
        <input
          data-testid="signup-sumbit"
          id="submit"
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
          value="가입하기"
        />
      </div>
    </form>
  )
}

export default SignUpForm
