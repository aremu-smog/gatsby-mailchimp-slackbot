const axios = require("axios")

export const botAxiosInstance = axios.create({
  baseURL: `https://slack.com/api/`,
  headers: { Authorization: `apiKey ${process.env.SLACK_AUTHORIZATION_CODE}` },
})
