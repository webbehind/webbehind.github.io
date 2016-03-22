var express = require('express')
var app = express()
var episodes = require('./episodes/index')

// Static assets go in resources folder
app.use(express.static('resources'))

// Use JSX and React Views
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', function(req, res) {
  res.render('index', { episodes: episodes })
})

app.listen(3000, function() {
  console.log('Example app listening on http://localhost:3000')
})
