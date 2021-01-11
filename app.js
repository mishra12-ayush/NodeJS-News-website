const express= require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

//using static files(css, js, img files)
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// templating engine to ejs
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))

//setting the routes
const newsRouter= require('./src/routes/news')
const businessRouter= require('./src/routes/business')
const appleRouter= require('./src/routes/apple')
const techcrunchRouter= require('./src/routes/techcrunch')
const bitcoinRouter= require('./src/routes/bitcoin')
app.use('/', newsRouter)
app.use('/business', businessRouter)
app.use('/bitcoin', bitcoinRouter)
app.use('/apple', appleRouter)
app.use('/techcrunch', techcrunchRouter)

app.listen(port, ()=> { console.log(`Listening on ${port}`) })