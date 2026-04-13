# Ennoventure Homepage Test Plan

## Application Overview

A comprehensive test plan for Ennoventure's public homepage (https://ennoventure.com). Covers navigation, content verification, call-to-action flows, FAQ interactions, footer links, and cookie consent behavior.

## Test Scenarios

### 1. Homepage Functional Tests

**Seed:** `seed.spec.ts`

#### 1.1. Primary Navigation and Logo

**File:** `specs/ennoventure-homepage-navigation.spec.ts`

**Steps:**
  1. Open the Ennoventure homepage (https://ennoventure.com).
    - expect: The page loads successfully with a visible navigation bar containing: Home, Technology, Solutions, Resources, About, and a Request Demo button.
  2. Click the Company Logo in the header.
    - expect: The browser navigates to the homepage and the URL is https://ennoventure.com/ (or equivalent with trailing slash).
  3. Click each main navigation link (Home, Technology, Solutions, Resources, About).
    - expect: Each link navigates to the correct section/page (e.g., /brand-protection-technology, /solutions, /resources, /about) and the page loads without errors.

#### 1.2. Hero Section and Primary CTA

**File:** `specs/ennoventure-homepage-hero.spec.ts`

**Steps:**
  1. Scroll to the hero section containing "Protect. Authenticate. Engage."
    - expect: The hero heading and supporting copy are visible.
  2. Click the "Request Demo" button in the hero section.
    - expect: New page loads (likely a demo request page or modal) and URL changes (e.g., contains /contact or /demo).

#### 1.3. Key Sections and Secondary CTAs

**File:** `specs/ennoventure-homepage-cta-sections.spec.ts`

**Steps:**
  1. Scroll to the "One invisible standard, every market" section.
    - expect: The section heading is visible along with a "Request Demo" button.
  2. Click the "Request Demo" button in that section.
    - expect: Navigation occurs to the demo request destination (same as primary CTA or another expected URL).
  3. Scroll to "Immediate Next Steps" and click "Open the ROI Calculator."
    - expect: The page navigates to /resources/roi-calculator and the ROI calculator content is visible.
  4. Click "Request Demo" in the "Immediate Next Steps" section.
    - expect: The demo request destination loads successfully.

#### 1.4. FAQ Accordion Behavior

**File:** `specs/ennoventure-homepage-faq.spec.ts`

**Steps:**
  1. Scroll to the "Answers to Your Top Questions" section.
    - expect: The FAQ section title is visible.
  2. Click the first FAQ question (e.g., "Do we need new printing hardware or special inks?").
    - expect: The answer content expands and is visible.
  3. Click the same FAQ question again (or click another question).
    - expect: The previously expanded answer collapses (if accordion behavior exists) or the new answer expands correctly.

#### 1.5. Footer Links and External Social Links

**File:** `specs/ennoventure-homepage-footer.spec.ts`

**Steps:**
  1. Scroll to the footer.
    - expect: Footer contains Navigation, Resource Center, Company links, and social media links.
  2. Click "Privacy Policy" in the footer.
    - expect: The browser navigates to /policies/privacy-and-policy.
  3. Click "Terms & Conditions" in the footer.
    - expect: The browser navigates to /policies/terms-and-conditions.
  4. Click "Contact Us" in the footer.
    - expect: The browser navigates to /contact.
  5. Click the LinkedIn social icon.
    - expect: A new tab (or the current tab depending on behavior) opens to https://www.linkedin.com/company/ennoventure.

#### 1.6. Cookie Consent Banner Behavior

**File:** `specs/ennoventure-homepage-cookie-banner.spec.ts`

**Steps:**
  1. Reload the homepage to ensure the cookie banner appears.
    - expect: The cookie banner displays with "Cookie Settings", text about cookies, and buttons: Reject all, Customize, Accept all.
  2. Click "Reject all".
    - expect: The banner disappears and cookie preferences are set (banner does not reappear on reload if cookies persisted).
  3. Reload the page and ensure the banner does not display (unless cookies are cleared).
    - expect: The banner is not visible after reload, indicating preferences were stored.
  4. Clear cookies/storage and reload the page, then click "Customize."
    - expect: A customization interface appears (or additional options display) and user can select preferences.
  5. Click "Accept all" and verify the banner disappears.
    - expect: Banner disappears and settings persist across reloads.

### 2. Additional Page Coverage

The test plan repository now includes a dedicated solutions page plan:

- `specs/ennoventure-solutions.testplan.md`

This file covers the solutions page at https://ennoventure.com/solutions, including hero content verification, card link navigation, footer contact flow, negative link checks, and responsive corner-case coverage.
