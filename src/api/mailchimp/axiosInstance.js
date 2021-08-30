const axios = require("axios")

const API_KEY = process.env.MAILCHIMP_API_KEY
const LIST_ID = process.env.MAILCHIMP_LIST_ID

const API_KEY_ARRAY = API_KEY.split("-")

const MAILCHIMP_DC = API_KEY_ARRAY[1]

export const mailchimpAxiosInstance = axios.create({
  baseURL: `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/`,
  timeout: 60000,
  headers: { Authorization: `apiKey ${API_KEY}` },
})
