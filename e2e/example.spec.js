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
