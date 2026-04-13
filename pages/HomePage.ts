import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get navigation(): Locator {
        return this.page.getByRole('navigation').first();
    }

    get navRequestDemo(): Locator {
        return this.navigation.getByRole('button', { name: 'Request Demo' });
    }

    getNavLink(name: string): Locator {
        return this.navigation.getByRole('link', { name });
    }

    async clickNavLink(name: string) {
        await this.getNavLink(name).first().click();
    }

    get logo(): Locator {
        return this.page.getByRole('link', { name: 'Company Logo' });
    }

    get heroHeading(): Locator {
        return this.page.getByRole('heading', { name: 'Protect. Authenticate. Engage.' });
    }

    get heroCopy(): Locator {
        return this.page.getByText(
            "The world's most valuable brands trust our patented invisible technology to turn every product into intelligent proof of authenticity."
        );
    }

    get primaryRequestDemo(): Locator {
        return this.page.getByRole('button', { name: 'Request Demo' }).first();
    }

    get ctaRequestDemoButtons(): Locator {
        return this.page.getByRole('button', { name: 'Request Demo' });
    }

    get roiCalculatorButton(): Locator {
        return this.page.getByRole('button', { name: 'Open the ROI Calculator' });
    }

    get faqSection(): Locator {
        return this.page.getByRole('heading', { name: 'Answers to Your Top Questions' });
    }

    getFaqQuestion(question: string): Locator {
        return this.page.getByText(question);
    }

    getFooter(): Locator {
        return this.page.getByRole('contentinfo');
    }

    getFooterLink(name: string): Locator {
        return this.getFooter().getByRole('link', { name });
    }

    socialLink(name: string): Locator {
        return this.getFooter().getByRole('link', { name });
    }
}

