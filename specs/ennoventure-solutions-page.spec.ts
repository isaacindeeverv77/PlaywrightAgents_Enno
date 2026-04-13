import { test, expect } from '@playwright/test';

test.describe('Ennoventure solutions page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://ennoventure.com/solutions');
  });

  test('hero heading and primary CTA are visible and clickable', async ({ page }) => {
    const heroHeading = page.getByRole('heading', { name: 'Next-Generation Brand Protection Solutions' });
    const requestDemoButton = page.getByRole('button', { name: 'Request Demo' });

    await expect(heroHeading).toBeVisible();
    await expect(requestDemoButton).toBeVisible();
    await expect(requestDemoButton).toBeEnabled();

    await requestDemoButton.click();
  });

  test('solution card navigation and footer contact link work', async ({ page }) => {
    const specialtyCard = page.locator('a', { hasText: 'Specialty Chemicals' }).first();
    await expect(specialtyCard).toBeVisible();

    await specialtyCard.click();
    await expect(page).toHaveURL(/\/solutions\/specialty-chemicals/);

    await page.goto('https://ennoventure.com/solutions');
    await page.getByRole('link', { name: 'Contact Us' }).click();
    await expect(page).toHaveURL('https://ennoventure.com/contact');
  });
});
