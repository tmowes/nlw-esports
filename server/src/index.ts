import express, { json } from 'express'

const app = express()
app.use(json())

app.get('/ads', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(3333, () => {
  console.log('Server is running on port 3333')
})
