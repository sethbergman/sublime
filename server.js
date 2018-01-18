const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.engine('html', require('ejs').renderFile)
app.set('/views', express.static(__dirname + '/views'))
app.set('view engine', 'html')
app.use('/assets', express.static(__dirname + '/assets'))

app.use(bodyParser.urlencoded({
	extended: false
}))

app.get('/', function (request, response) {
	response.render('index');
})

app.get('/2', function (request, response) {
	response.render('index2');
})

const server = app.listen(process.env.PORT || 5000, function () {
	console.log('Server running at http://0.0.0.0:' + server.address().port)
})