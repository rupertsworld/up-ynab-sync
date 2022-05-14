# up-ynab-sync

A tiny tool that allows you to sync transactions one-way from Up to YNAB.

## Getting this to run

I recommend setting up a cron job with Render.com (https://render.com/docs/cronjobs). It's easy, inexpensive, and will run this script every hour, or at the interval of your choosing.

You will need to set the following environment variables:

- `UP_KEY`: Your UP API key ([instructions here](https://developer.up.com.au))
- `YNAB_KEY`: Your YNAB API key ([instructions here](https://api.youneedabudget.com))
- `UP_ACCOUNT_ID`: You can get this by running the `get_up_accounts()` function in `get_stats.js`
- `YNAB_ACCOUNT_ID`: You can get this by running the `get_ynab_accounts()` function in `get_stats.js`
- `BUDGET_ID`: You can get this by running the `get_ynab_budgets()` function ini `get_stats.js`

## To-Do

- This doesn't yet understand transactions in YNAB that have been renamed, so may import duplicates if this is the case.
- I haven't put any error handling in this yet, so it may fail with unclear error messages.
- It would be great if this could import both cleared and uncleared transactions, and update any uncleared ones
- No support for savers as yet

## Disclaimer

Be careful with any tool that can access your bank account or budget (I encourage anyone using this to read the source code, no responsibility is taken for any damages). Make sure you keep your API keys safe.
