import { test, expect } from '@playwright/test'

test.describe('Homepage tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/')
  })

  test('Page should contain title', async ({ page }) => {
    await expect(page).toHaveTitle('Home | RTV')
  })

  test('Page should contain heading', async ({ page }) => {
    // eslint-disable-next-line
    const title = page.getByRole('heading', { name: 'React Template RR' })
    await expect(title).toBeVisible()
  })
})
