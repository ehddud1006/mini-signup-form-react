import React from 'react'
import Input from '../../shared/Input'

const SignUpForm = () => {
  return (
    <form
      id="form"
      className="w-full max-w-md m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      autoComplete="off"
    >
      <Input label="아이디" id="id" type="text" placeholder="아이디를 입력해주세요." />
      <Input label="비밀번호" id="pw" type="password" placeholder="비밀번호를 입력해주세요." autoComplete="off" />
      <Input
        label="비밀번호 확인"
        id="pw-check"
        type="password"
        placeholder="비밀번호 확인을 입력해주세요."
        autoComplete="off"
      />

      <div className="flex items-center justify-center">
        <input
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