// This is the code for the backend server
const PORT = 3000
const express = require('express')  // for endpoint
const app = express()
const cors = require('cors')
app.use(cors())

app.get('/results', (req, res) => {
    // return test results for the endpoint (http://0.0.0.0:3000/results)
    res.json('Here is the backend DATA string (Could be webscraper data)')
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
