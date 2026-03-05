import { test, expect } from '@playwright/test';


test.beforeEach('Base login test', async ({page}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})


test('Login test', async ({page}) => {
  const username = page.getByRole('textbox', {name: 'Username'})
  const password = page.getByRole('textbox', {name: 'Password'})
  await username.click()
  await username.fill('Admin')

  await password.click()
  await password.fill('admin123')

  await page.getByRole('button', {name: 'Login'}).click()

})