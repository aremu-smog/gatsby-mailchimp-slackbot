import { noOfMailchimpSubscribers } from "../mailchimp/no-of-subscribers"
import { sendSlackMessage } from "../slack/send-message"

const slackbot = async (req, res) => {
  const requestMethod = req.method

  if (requestMethod === "POST") {
    try {
      const { event } = req.body
      const { text, user, channel } = event
      const message = `<@${user}> coming straight up!`
      sendSlackMessage(channel, message)

      // const mailChimp =
      noOfMailchimpSubscribers(channel)

      // if (mailChimp.status === 200) {
      //   sendSlackMessage(channel, mailChimp.message)
      // }
    } catch (error) {
      res.status(500).json({ message: error.message })
      console.log(error.message)
    }
  }

  if (requestMethod === "GET") {
    res.status(200).json({
      message: "Got that! Make a post request",
    })
  }
}

export default slackbot
