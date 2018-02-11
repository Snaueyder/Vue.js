const express = require('express'); 
const bodyParser = require('body-parser'); 
const fs = require('fs'); 
const app = express(); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded()); 
app.use('/dist/build.js', express.static('dist/build.js')) 

app.route('/')
     .get(function (req, res) 
     	{         
     		res.writeHead(200, {'Content-Type': 'text/html'});         
     		fs.readFile('index.html', function (err, data) {             
     			res.end(data);         
     		})     
     	}); 
app.listen(3000, () => console.log('Example app listening on port 3000!'));

