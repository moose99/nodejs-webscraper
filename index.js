const PORT = 8000
const express = require('express')  // for endpoint
const app = express()
const cors = require('cors')
app.use(cors())

app.get('/results', (req, res) => {
    // return test results for the endpoint (http://localhost:8000/results)
    res.json('Here is the backend DATA string (could be from webscaper)')
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
