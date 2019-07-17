var app = require('express')();
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('/etc/letsencrypt/live/zx.mcfhq.com/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/zx.mcfhq.com/cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var bodyParser=require('body-parser');
const querystring = require("querystring");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);


// Welcome
app.get('/', function(req, res) {
    if(req.protocol === 'https') {
        res.status(200).send('Welcome to Safety Land!');
    }
    else {
        res.status(200).send('Welcome!');
    }
});

app.post('/',function(req,res){
    var input = req.body;
    fs.open('medicine.json', 'a+',function(err){
        if(err){
            return console.error(err);
        }
    });
    fs.appendFileSync('medicine.json',input,function(err){
        if(err){
            return console.error(err);
        }
    });
    var output = fs.readFileSync('medicine.json',function(err){
        if(err) throw err;
    })
    output = JSON.parse(output);
    return res.send(String(output));
})

httpServer.listen(80, function() {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
httpsServer.listen(433, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});