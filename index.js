const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v0/user', require('./routes/user_api_v0.js'))

app.listen(PORT, () => {
	console.log(`Server listening to port ${PORT}`)
})

