const axios = require("axios")

export const slackAxiosInstance = axios.create({
  baseURL: `https://slack.com/api/`,
  headers: { Authorization: `Bearer ${process.env.SLACK_AUTHORIZATION_CODE}` },
})
