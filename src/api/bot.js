const slackbot = async (req, res) => {
  const requestMethod = req.method

  const { challenge } = req.body
  if (requestMethod === "POST") {
    res.status(200).json({
      //   message: "Welcome my friend🤖",
      challenge,
    })
  }

  if (requestMethod === "GET") {
    res.status(200).json({
      message: "Got that! Make a post request",
    })
  }
}

export default slackbot
