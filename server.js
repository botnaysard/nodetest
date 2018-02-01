const express = require('express');
const app = express();
const bodyParser = require ('body-parser')
const MongoClient = require('mongodb').MongoClient
var db


/* start the server */

MongoClient.connect("mongodb://test:test@ds221258.mlab.com:21258/nodetest-db", (err, database) => {
  	if (err) return console.log(err)
  	db = database
  	app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())



/* code block written in plain JS

app.get('/', function (request, response){
	res.send('Fuck yeah!')
})

*/

/* same code written with ES6

app.get('/', (req, res) => {
	res.send('Fuck yeah!')
})

*/

/* send a file instead */

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

/* when form is submitted */

app.post('/quotes', (req, res) => {
  	db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

//  RESUME @ SHOWING QUOTES TO USERS //