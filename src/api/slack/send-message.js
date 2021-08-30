import { slackAxiosInstance } from "./axiosInstance"

export const sendSlackMessage = async (channel, message) => {
  await slackAxiosInstance
    .post(`chat.postMessage`, {
      channel,
      text: message,
    })
    .then(() => {
      console.log("Message sent")

      return {
        status: 200,
        message: "Message sent",
      }
    })
    .catch(error => {
      console.log(error.message)

      return {
        status: 500,
        message: error.message,
      }
    })
}
