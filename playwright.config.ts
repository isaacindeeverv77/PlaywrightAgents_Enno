import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './specs',
    timeout: 30_000,
    expect: {
        timeout: 5_000,
    },
    reporter: [['list'], ['html', { open: 'never' }]],
    use: {
        actionTimeout: 10_000,
        navigationTimeout: 30_000,
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                headless: false,
            },
        },
    ],
});
