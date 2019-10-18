const express = require('express')
const app = express()
const mc = require('./controllers/messages_controller.js')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))


const BaseUrl = "/api/messages"
app.get(BaseUrl, mc.read)
app.post(BaseUrl, mc.create)
app.put(`${BaseUrl}/:id`, mc.update)
app.delete(`${BaseUrl}/:id`, mc.delete)



const port = 3001
app.listen(port, () => console.log(`Listening on port ${port}`))
