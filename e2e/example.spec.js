// @ts-check
const { test, expect } = require('@playwright/test')

test('요구사항1 포커스', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('signup-id')).toBeFocused()
})
