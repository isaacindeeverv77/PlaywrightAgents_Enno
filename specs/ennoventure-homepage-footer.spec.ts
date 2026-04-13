import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Ennoventure homepage footer', () => {
    let home: HomePage;

    test.beforeEach(async ({ page }) => {
        home = new HomePage(page);
        await home.goto();
    });

    test('footer links navigate to expected pages', async () => {
        const footer = home.getFooter();
        await footer.scrollIntoViewIfNeeded();

        await Promise.all([
            home.page.waitForNavigation({ url: /policies\/privacy-and-policy/ }),
            home.getFooterLink('Privacy Policy').click(),
        ]);

        await home.page.goBack();
        await footer.scrollIntoViewIfNeeded();

        await Promise.all([
            home.page.waitForNavigation({ url: /policies\/terms-and-conditions/ }),
            home.getFooterLink('Terms & Conditions').click(),
        ]);

        await home.page.goBack();
        await footer.scrollIntoViewIfNeeded();

        await Promise.all([
            home.page.waitForNavigation({ url: /contact/ }),
            home.getFooterLink('Contact Us').click(),
        ]);
    });

    test('social links open external profiles (LinkedIn)', async ({ context }) => {
        await home.getFooter().scrollIntoViewIfNeeded();

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            home.socialLink('LinkedIn').click(),
        ]);

        await newPage.waitForLoadState('domcontentloaded');
        await expect(newPage).toHaveURL(/linkedin\.com/);
    });
});
