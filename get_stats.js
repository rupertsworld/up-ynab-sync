import fetch from 'node-fetch'

const up_key = process.env.UP_KEY
const ynab_key = process.env.YNAB_KEY
const up_account_id = process.env.UP_ACCOUNT_ID
const budget_id = process.env.BUDGET_ID
const ynab_account_id = process.env.YNAB_ACCOUNT_ID

const up_url = "https://api.up.com.au/api/v1"
const ynab_url = "https://api.youneedabudget.com/v1"

const up_headers = {
  'Authorization': `Bearer ${up_key}`,
}

const ynab_headers = {
  'Authorization': `Bearer ${ynab_key}`,
}

async function get_ynab_budgets() {
  const res = await fetch(`${ynab_url}/budgets`, {
    headers: ynab_headers
  })
  const json = await res.json()
  console.log(JSON.stringify(json, null, 2))
}

async function get_ynab_accounts() {
  const res = await fetch(`${ynab_url}/budgets/${budget_id}/accounts`, {
    headers: ynab_headers
  })
  const json = await res.json()
  console.log(JSON.stringify(json, null, 2))
}

async function get_up_accounts() {
  const res = await fetch(`${up_url}/accounts`, {
    headers: up_headers
  })
  const json = await res.json()
  console.log(JSON.stringify(json, null, 2))
}

// get_ynab_budgets()
// get_ynab_accounts()
// get_up_accounts()