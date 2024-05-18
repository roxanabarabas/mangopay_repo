# How to install
* install Node JS: https://nodejs.org/en/download/
* from inside the repository folder run the `npm install` command
* install extension Playwright test for VS code
* ctr+Shift+P opens the command panel and type: Install Playwright (or `npx playwright install`)
* install Node JS: https://nodejs.org/en/download/

## How to run tests on different env
* there are 2 ways to run the test in the desired environment: 
1: run from test explorer using .env file (in the root folder create a new file `.env`), update each time in which env to run (ex env = prod or env = qa )
2: run from terminal - use the following commands:
Git Bash:
```
env=prod npx playwright test .\tests\*
env=qa npx playwright test .\tests\*

### How to see reports with the executed tests
npx playwright show-report

