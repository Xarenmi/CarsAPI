import express from 'express'

const PORT = process.env.PORT || 3000

const api = express()
api.use(express.json())

api.listen(PORT, () => {
  console.log(`Sever is running on http://localhost:${PORT}`)
})
