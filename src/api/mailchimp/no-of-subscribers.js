import { mailchimpAxiosInstance } from "./axiosInstance"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const noOfMailchimpSubscribers = () => {
  mailchimpAxiosInstance
    .get("/lists")
    .then(response => {
      const { lists } = response

      const list = lists[0]

      const { name, stats } = list

      const { member_count, last_sub_date } = stats

      const date_updated = new Date(last_sub_date)
      const date_updated_parsed = `${
        months[date_updated.getMonth()]
      } ${date_updated.getDate()}, ${date_updated.getFullYear()}`

      const message = `${name} has *${member_count}* subscribers as at ${date_updated_parsed}`

      return {
        status: 200,
        message: message,
      }
    })
    .catch(error => {
      return {
        status: 500,
        message: error.message,
      }
    })
}
