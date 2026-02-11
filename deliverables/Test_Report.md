# Assignment 8 - Full Web Application Testing Report

## 1) Selected Website
- URL: `https://automationexercise.com`
- Application type: E-commerce demo web application with catalog, search, cart, login/signup, and contact form.

## 2) Test Strategy and Risk-Based Reasoning
### Strategy
- Perform a manual Smoke cycle first (quick health check) to verify critical entry paths.
- Perform a manual Regression cycle covering positive, negative, boundary, cross-browser, and responsive scenarios.
- Implement UI automation in Playwright to continuously validate core smoke/regression/negative checks.

### Risk-Based Prioritization
- High risk: navigation failure, product discovery failure, cart flow breakage, login validation regressions.
- Medium risk: contact/subscription validation, test cases/documentation pages, mobile layout defects.
- Lower risk: informational pages (API/Video tutorials) with lower business impact.

## 3) Environment
- Base URL: `https://automationexercise.com`
- Date of execution: February 11, 2026
- Browsers: Chromium 145, Firefox 146
- Viewports: Desktop (1440x900, 1366x768), Mobile (390x844)
- Automation tool: Playwright

## 4) Smoke Testing Results (Manual)
- Suite file: `deliverables/manual/Smoke_Test_Suite.csv`
- Total checks: 12
- Passed: 12
- Failed: 0
- Blocked: 0
- Result: Smoke status **PASS**, application is stable for deeper testing.

## 5) Regression Testing Results (Manual)
- Suite file: `deliverables/manual/Regression_Test_Suite.csv`
- Total test cases: 30
- Passed: 30
- Failed: 0
- Blocked: 0

### Mandatory coverage confirmation
- Positive scenarios: covered
- Negative scenarios: covered
- Boundary value checks: covered
- Cross-browser sanity (2 browsers): covered (Chromium + Firefox)
- Responsive checks (desktop + mobile): covered

## 6) Automation Approach and Coverage
### Implementation
- Framework: Playwright Test (`@playwright/test`)
- Config: `playwright.config.ts`
- Specs:
  - `tests/smoke.spec.ts` (6 smoke UI tests)
  - `tests/regression.spec.ts` (7 regression UI tests)
  - `tests/negative.spec.ts` (4 negative/validation tests)

### Requirement mapping
- Automated tests total: 17 (per browser project execution; 34 executed across 2 browsers)
- Smoke UI tests: 6 (requirement: >4)
- Regression UI tests: 7 (requirement: >4)
- Negative/validation tests: 4 (requirement: >2)

## 7) Execution Logs and HTML Report
- Execution log: `artifacts/execution.log`
- Machine-readable result: `artifacts/results.json`
- HTML report: `artifacts/html-report/index.html`
- Latest automated execution summary: **34 passed, 0 failed** (Chromium + Firefox projects)

## 8) Bug Report Status
- File: `deliverables/bugs/Bug_Report.md`
- Status: **No bugs found** during this cycle.
- Note: Minor dynamic-content variability (e.g., test-case list count changes over time) was observed and handled in automation with stable assertions.

## 9) Conclusions and Quality Assessment
- The tested scope is functionally stable for core user journeys: browse, search, cart interactions, and key input validations.
- Cross-browser sanity checks passed in Chromium and Firefox.
- Responsive sanity checks passed on desktop and mobile viewport.
- Current quality assessment: **Good for demo/evaluation scope**, with recommendation to continue monitoring dynamic-content areas in future regressions.
