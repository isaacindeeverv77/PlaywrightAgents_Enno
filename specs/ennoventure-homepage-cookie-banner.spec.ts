import { test, expect } from '@playwright/test';
import { CookieBanner } from '../components/CookieBanner';

test.describe('Ennoventure cookie banner', () => {
    let banner: CookieBanner;

    test.beforeEach(async ({ page }) => {
        banner = new CookieBanner(page);
        await page.goto('https://ennoventure.com');
    });

    test('banner appears and allows reject, customize, and accept flows', async () => {
        await expect(banner.banner).toBeVisible();

        await banner.reject();
        await expect(banner.banner).toHaveCount(0);

        await banner.page.reload();
        await expect(banner.page.locator(`text=${banner.bannerText}`)).toHaveCount(0);

        // Clear storage to reset state
        await banner.clearStorage();
        await banner.page.reload();

        await banner.page.waitForSelector(`text=${banner.bannerText}`, { state: 'visible', timeout: 10000 });
        await banner.openCustomize();
        await expect(banner.page.locator('p', { hasText: 'Cookie Settings' })).toBeVisible();
    });
});
