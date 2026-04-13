import type { Locator, Page } from '@playwright/test';

export class CookieBanner {
    readonly page: Page;
    readonly bannerText = 'We use cookies to personalize content, run ads, and analyze traffic.';

    constructor(page: Page) {
        this.page = page;
    }

    get banner(): Locator {
        return this.page.getByText(this.bannerText);
    }

    get rejectAll(): Locator {
        return this.page.getByRole('button', { name: 'Reject all' });
    }

    get customize(): Locator {
        return this.page.getByRole('button', { name: 'Customize' });
    }

    get acceptAll(): Locator {
        return this.page.getByRole('button', { name: /accept/i });
    }

    async reject() {
        await this.rejectAll.click();
    }

    async openCustomize() {
        await this.customize.click();
    }

    async accept() {
        await this.acceptAll.first().click();
    }

    async clearStorage() {
        await this.page.context().clearCookies();
        await this.page.evaluate(() => {
            localStorage.clear();
            sessionStorage.clear();
        });
    }
}
