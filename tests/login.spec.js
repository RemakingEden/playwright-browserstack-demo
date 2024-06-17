const { test, expect } = require('@playwright/test');
const { getTestDataElement } = require('../helpers/selectors');
const { LoginPage } = require('../pages/loginPage');

let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
});

test('has title', async ({ page }) => {
  await loginPage.goToBaseUrl();
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('login success', async ({ page }) => {
  await loginPage.goToBaseUrl();
  await getTestDataElement(page, loginPage.username).fill('standard_user');
  await getTestDataElement(page, loginPage.password).fill('secret_sauce');
  await getTestDataElement(page, loginPage.loginButton).click();
  await expect(getTestDataElement(page, loginPage.title)).toHaveText("Products");
});
