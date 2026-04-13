import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Ennoventure homepage navigation', () => {
    let home: HomePage;

    test.beforeEach(async ({ page }) => {
        home = new HomePage(page);
        await home.goto();
    });

    test('should have main navigation links and logo', async () => {
        await expect(home.getNavLink('Home')).toBeVisible();
        await expect(home.getNavLink('Technology')).toBeVisible();
        await expect(home.getNavLink('Solutions')).toBeVisible();
        await expect(home.getNavLink('Resources')).toBeVisible();
        await expect(home.getNavLink('About')).toBeVisible();
        await expect(home.navRequestDemo).toBeVisible();
    });

    test('logo navigates to the homepage', async () => {
        await home.logo.click();
        await expect(home.page).toHaveURL(/https:\/\/ennoventure\.com\/?$/);
    });

    test('each primary link navigates to the expected page', async () => {
        const navMap = [
            { name: 'Home', url: /\/$/ },
            { name: 'Technology', url: /brand-protection-technology/ },
            { name: 'Solutions', url: /solutions/ },
            { name: 'Resources', url: /resources/ },
            { name: 'About', url: /about/ },
        ];

        for (const item of navMap) {
            await home.goto();
            await home.clickNavLink(item.name);
            await expect(home.page).toHaveURL(item.url);
        }
    });
});
