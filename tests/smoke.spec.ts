import { test, expect } from '@playwright/test';

test.describe('Smoke UI Tests', () => {
  test('SMK-001 [SMOKE]: Home page opens successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Automation Exercise/i);
    await expect(page.locator('header a[href="/"]').first()).toBeVisible();
  });

  test('SMK-002 [SMOKE]: Header navigation is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header a[href="/products"]')).toBeVisible();
    await expect(page.locator('header a[href="/view_cart"]')).toBeVisible();
    await expect(page.locator('header a[href="/contact_us"]')).toBeVisible();
    await expect(page.locator('header a[href="/test_cases"]').first()).toBeVisible();
  });

  test('SMK-003 [SMOKE]: Products page is reachable', async ({ page }) => {
    await page.goto('/products');
    await expect(page.getByRole('heading', { name: /all products/i })).toBeVisible();
    await expect(page.locator('.features_items .product-image-wrapper').first()).toBeVisible();
  });

  test('SMK-004 [SMOKE]: Contact Us page is reachable', async ({ page }) => {
    await page.goto('/contact_us');
    await expect(page.getByRole('heading', { name: /get in touch/i })).toBeVisible();
    await expect(page.getByPlaceholder('Name')).toBeVisible();
  });

  test('SMK-005 [SMOKE]: Cart page is reachable', async ({ page }) => {
    await page.goto('/view_cart');
    await expect(page).toHaveURL(/view_cart/);
    await expect(page.locator('#cart_items')).toBeVisible();
  });

  test('SMK-006 [SMOKE]: Login page is reachable', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('heading', { name: /login to your account/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /new user signup/i })).toBeVisible();
  });
});
