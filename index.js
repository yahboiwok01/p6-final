var express = require("express")
var logger = require("morgan")
var bodyParser = require("body-parser")

var server = express()

server.set('view engine', 'ejs')
server.use(express.static('views'))
server.set('views', __dirname+ '/views')

server.get('/', function(request, response){
    response.render('home.ejs')
})
server.get('/about-me', function(request, response){
    response.send('<h1>About me</h1>')
})


var port = process.env.PORT

server.listen(port, () =>{
    console.log(' Server on port ' + port)
})
