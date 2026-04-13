import type { Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    /**
     * The base URL for the application under test.
     * Derived pages can override this if they need a different base.
     */
    protected readonly baseUrl = 'https://ennoventure.com';

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigate to a given path on the application.
     *
     * @param path Optional path to append to the base URL (e.g., '/about').
     */
    async goto(path = '') {
        await this.page.goto(`${this.baseUrl}${path}`);
    }
}
