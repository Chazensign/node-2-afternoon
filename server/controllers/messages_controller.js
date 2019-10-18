let messages = []
let id = 0
 
module.exports = {
  create: (req, res) => {
    const {text, time} = req.body
    messages.push({ id, text, time })
    id++
    res.status(200).send(messages)
  }, 
  read: (req, res) => {
    res.status(200).send(messages)
  },
  update: (req, res) => {
    const { text } = req.body
    const updateID = req.params.id
    const messagesIndex = messages.findIndex(message => message.id === Number(updateID))
    let message = messages[messagesIndex]

    messages[messagesIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    }
    res.status(200).send(messages)
  },
  delete: (req, res) => {
    let id = req.params.id
    messages.forEach((message, i) => {
      if (message.id === +id) {
        messages.splice(i, 1)
      }
    })
    res.status(200).send(messages)
  }

}
