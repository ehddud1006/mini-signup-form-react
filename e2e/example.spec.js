// @ts-check
const { test, expect } = require('@playwright/test')

// 요구사항 1
test('포커스', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('signup-id')).toBeFocused()
})

// 요구사항 2,3
test('id 입력 에러', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('signup-id').type('asdf')
  await page.getByTestId('signup-id').blur()
  await expect(page.getByTestId('signup-id-message')).toHaveText(
    '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.'
  )
})

test('pw 입력 에러', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('signup-pw').type('asdf')
  await page.getByTestId('signup-pw').blur()
  await expect(page.getByTestId('signup-pw-message')).toHaveText('8~16자 영문 대 소문자, 숫자를 사용하세요.')
})

test('pw-check 입력 에러', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('signup-pw-check').type('asdf')
  await page.getByTestId('signup-pw-check').blur()
  await expect(page.getByTestId('signup-pw-check-message')).toHaveText('비밀번호가 일치하지 않습니다.')
})

test('pw-check 입력 후 pw 변경 에러', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('signup-pw-check').type('asdf')
  await page.getByTestId('signup-pw-check').type('asdf11')
  await page.getByTestId('signup-pw-check').blur()
  await expect(page.getByTestId('signup-pw-check-message')).toHaveText('비밀번호가 일치하지 않습니다.')
})

// 요구사항 4
test('모달 클릭', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('signup-id').type('ehddud1006')
  await page.getByTestId('signup-pw').type('ehddud1006')
  await page.getByTestId('signup-pw-check').type('ehddud1006')
  await page.getByTestId('signup-sumbit').click()
  await page.getByTestId('signup-modal-confirm').click()
})

// 요구사항 5
test('글자 크기 증가 버튼', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('increase-font-btn').click()
  await page.getByTestId('increase-font-btn').click()
  await page.getByTestId('increase-font-btn').click()
  await page.getByTestId('increase-font-btn').click()
  await expect(page.getByTestId('form-wrapper')).toHaveCSS('font-size', '20px')
  await expect(page.getByTestId('increase-font-btn')).toBeDisabled()
})

// 요구사항 5
test('글자 크기 감소 버튼', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('decrease-font-btn').click()
  await page.getByTestId('decrease-font-btn').click()
  await page.getByTestId('decrease-font-btn').click()
  await page.getByTestId('decrease-font-btn').click()
  await expect(page.getByTestId('form-wrapper')).toHaveCSS('font-size', '12px')
  await expect(page.getByTestId('decrease-font-btn')).toBeDisabled()
})
