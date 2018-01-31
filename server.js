const express = require('express');
const app = express();

app.listen(3000, function() {
	console.log('listening on port 3000.')
})

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

// RESUME TUTORIAL AT INSTALLING NODEMON 