import { test, expect } from '@playwright/test';

test.describe('Negative/Validation Tests', () => {
  test('NEG-001 [NEG]: Invalid login shows error message', async ({ page }) => {
    await page.goto('/login');
    await page.locator('input[data-qa="login-email"]').fill('invalid.user@example.com');
    await page.locator('input[data-qa="login-password"]').fill('wrong_password_123');
    await page.locator('button[data-qa="login-button"]').click();

    await expect(page.getByText(/your email or password is incorrect/i)).toBeVisible();
  });

  test('NEG-002 [NEG]: Contact form blocks submit when required fields are empty', async ({ page }) => {
    await page.goto('/contact_us');
    await page.locator('input[data-qa="name"]').fill('QA User');
    await page.locator('textarea[data-qa="message"]').fill('Missing email should trigger validation');
    await page.getByRole('button', { name: /submit/i }).click();

    const emailField = page.locator('input[data-qa="email"]');
    const isInvalid = await emailField.evaluate((el) => !(el as HTMLInputElement).checkValidity());
    expect(isInvalid).toBeTruthy();
  });

  test('NEG-003 [NEG]: Subscription field rejects invalid email format', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const subInput = page.locator('#susbscribe_email');
    await subInput.fill('not-an-email');
    await page.locator('#subscribe').click();

    const isInvalid = await subInput.evaluate((el) => !(el as HTMLInputElement).checkValidity());
    expect(isInvalid).toBeTruthy();
  });

  test('NEG-004 [NEG]: Login form requires email', async ({ page }) => {
    await page.goto('/login');
    await page.locator('input[data-qa="login-password"]').fill('wrong_password_123');
    await page.locator('button[data-qa="login-button"]').click();

    const emailField = page.locator('input[data-qa="login-email"]');
    const isInvalid = await emailField.evaluate((el) => !(el as HTMLInputElement).checkValidity());
    expect(isInvalid).toBeTruthy();
  });
});
