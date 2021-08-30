import { noOfMailchimpSubscribers } from "../mailchimp/no-of-subscribers"
import { sendSlackMessage } from "../slack/send-message"

const slackbot = async (req, res) => {
  const requestMethod = req.method

  const { event } = req.body
  const { text, user, channel } = event
  const message = `<@${user}> the total no of subscribers is 10`

  if (requestMethod === "POST") {
    try {
      sendSlackMessage(channel, message)

      const mailChimp = await noOfMailchimpSubscribers()
      mailChimp.then(response => {
        sendSlackMessage(channel, response.message)
      })
    } catch (error) {
      res.status(500).json({ message: error.message })
      console.log("There is an error")
    }
  }

  if (requestMethod === "GET") {
    res.status(200).json({
      message: "Got that! Make a post request",
    })
  }
}

export default slackbot