import { test, expect } from '@playwright/test';

const uniqueEmail = () => `qa8_${Date.now()}_${Math.floor(Math.random() * 1000)}@mailinator.com`;

test.describe('Regression UI Tests', () => {
  test('REG-001 [REG]: Search product returns matching results', async ({ page }) => {
    await page.goto('/products');
    await page.locator('#search_product').fill('Blue Top');
    await page.locator('#submit_search').click();

    await expect(page.getByRole('heading', { name: /searched products/i })).toBeVisible();
    await expect(page.locator('.features_items .productinfo p').first()).toContainText(/blue top/i);
  });

  test('REG-002 [REG]: Product details page shows essential fields', async ({ page }) => {
    await page.goto('/product_details/1');

    await expect(page).toHaveURL(/product_details\/1/);
    await expect(page.locator('.product-information h2')).toBeVisible();
    await expect(page.locator('.product-information')).toContainText(/category/i);
    await expect(page.locator('.product-information')).toContainText(/availability/i);
  });

  test('REG-003 [REG]: Add product to cart from details page', async ({ page }) => {
    await page.goto('/product_details/1');
    await page.locator('#quantity').fill('2');
    await page.locator('button.cart').click();
    await page.getByRole('link', { name: /view cart/i }).click();

    await expect(page).toHaveURL(/view_cart/);
    await expect(page.locator('#product-1')).toBeVisible();
    await expect(page.locator('#product-1 .cart_quantity button')).toContainText('2');
  });

  test('REG-004 [REG]: Footer subscription works on home page', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await page.locator('#susbscribe_email').fill(uniqueEmail());
    await page.locator('#subscribe').click();

    await expect(page.locator('#success-subscribe')).toContainText(/successfully subscribed/i);
  });

  test('REG-005 [REG]: Test Cases page loads test case list', async ({ page }) => {
    await page.goto('/test_cases');
    await expect(page.locator('h2.title.text-center')).toContainText(/test cases/i);
    await expect(page.locator('.panel-group .panel').first()).toContainText(/test case 1/i);
    const panelCount = await page.locator('.panel-group .panel').count();
    expect(panelCount).toBeGreaterThanOrEqual(26);
  });

  test('REG-006 [REG]: Remove product from cart', async ({ page }) => {
    await page.goto('/product_details/1');
    await page.locator('button.cart').click();
    await page.getByRole('link', { name: /view cart/i }).click();

    await expect(page.locator('#product-1')).toBeVisible();
    await page.locator('#product-1 .cart_delete a').click();
    await expect(page.locator('#product-1')).toHaveCount(0);
  });

  test('REG-007 [REG]: API Testing page opens from header', async ({ page }) => {
    await page.goto('/');
    await page.locator('header a[href="/api_list"]').click();

    await expect(page).toHaveURL(/api_list/);
    await expect(page.locator('body')).toContainText(/api/i);
  });
});
