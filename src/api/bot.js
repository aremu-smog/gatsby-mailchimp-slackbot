const { botAxiosInstance } = require("./axiosInstance")

const slackbot = async (req, res) => {
  const requestMethod = req.method

  const body = req.body

  //   const message = JSON.stringify(body)

  if (requestMethod === "POST") {
    try {
      await botAxiosInstance
        .post(`chat.postMessage`, {
          channel: `C02CQNV6HNW`,
          text: `Coming straight up bro`,
        })
        .then(() => {
          console.log("Got that bro")
          res.status(200).json({ message: "Message sent" })
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
