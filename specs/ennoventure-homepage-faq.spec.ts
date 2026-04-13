import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Ennoventure homepage FAQ accordion', () => {
    let home: HomePage;

    test.beforeEach(async ({ page }) => {
        home = new HomePage(page);
        await home.goto();
    });

    test('FAQ section expands and interacts', async () => {
        await home.faqSection.scrollIntoViewIfNeeded();

        const question = home.getFaqQuestion('Do we need new printing hardware or special inks?');
        await question.click();
        await expect(home.page.getByText('No. Ennoventure\'s technology works with standard printing equipment')).toBeVisible();

        // Click again to ensure interaction works (some accordions remain open by design)
        await question.click();
        await expect(home.page.getByText('No. Ennoventure\'s technology works with standard printing equipment')).toBeVisible();
    });
});
