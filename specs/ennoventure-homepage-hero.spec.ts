import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Ennoventure homepage hero', () => {
    let home: HomePage;

    test.beforeEach(async ({ page }) => {
        home = new HomePage(page);
        await home.goto();
    });

    test('hero headline and copy are visible', async () => {
        await expect(home.heroHeading).toBeVisible();
        await expect(home.heroCopy).toBeVisible();
    });

    test('primary CTA is clickable', async () => {
        await expect(home.primaryRequestDemo).toBeVisible();
        await home.primaryRequestDemo.click();
    });
});
