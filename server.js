//Install express server
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors({
  credentials: true,
}));

// Create link to Angular build directory
var distDir = __dirname + "/dist/republica-frontend"
app.use(express.static(distDir))

app.get('/*', (req, res) => {
  res.sendFile(path.join(distDir + '/index.html'))
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080)
