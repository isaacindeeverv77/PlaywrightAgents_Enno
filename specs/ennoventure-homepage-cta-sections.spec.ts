import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Ennoventure homepage CTA sections', () => {
    let home: HomePage;

    test.beforeEach(async ({ page }) => {
        home = new HomePage(page);
        await home.goto();
    });

    test('one invisible standard section has a Request Demo button', async () => {
        await home.page.getByRole('heading', { name: 'One invisible standard, every market' }).scrollIntoViewIfNeeded();
        const cta = home.ctaRequestDemoButtons.nth(1);
        await expect(cta).toBeVisible();
        await cta.click();
    });

    test('ROI calculator CTA navigates to the calculator page', async () => {
        await home.roiCalculatorButton.scrollIntoViewIfNeeded();
        await Promise.all([
            home.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
            home.roiCalculatorButton.click(),
        ]);
        await expect(home.page).toHaveURL(/resources\/roi-calculator/);
    });

    test('Immediate Next Steps demo button is clickable', async () => {
        const cta = home.ctaRequestDemoButtons.nth(2);
        await cta.scrollIntoViewIfNeeded();
        await expect(cta).toBeVisible();
        await cta.click();
    });
});
