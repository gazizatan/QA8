# QA8 - Full Web Application Testing (Automation Exercise)

## Target
- Base URL: `https://automationexercise.com`

## Setup
```bash
npm install
npx playwright install chromium firefox
```

## Run Tests
```bash
npm test
```

## Run By Category
```bash
npm run test:smoke:grep
npm run test:reg:grep
npm run test:neg:grep
```

## Reports and Evidence
- Execution log: `artifacts/execution.log`
- HTML report: `artifacts/html-report/index.html`
- JSON report: `artifacts/results.json`
- Manual smoke suite: `deliverables/manual/Smoke_Test_Suite.csv`
- Manual regression suite: `deliverables/manual/Regression_Test_Suite.csv`
- Final test report: `deliverables/Test_Report.md`
- Bug report: `deliverables/bugs/Bug_Report.md`
# QA8
