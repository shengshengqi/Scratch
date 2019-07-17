var app = require('express')();
var fs = require('fs');
var http = require('http');
var bodyParser = require('body-parser');
const querystring = require("querystring");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);


// Welcome
app.get('/', function (req, res) {
    res.status(200).send('Welcome!');
    });

app.post('/', function (req, res) {
    let input = JSON.stringify(req.body)
    console.log(input)

    let fileDir = 'medicine.json'
    let promise = new Promise((resolve, reject) => {

        fs.writeFile(fileDir, input, (err) => {
            if (err) {
                reject(`WRITE:${err}`)
            } else {
                resolve()
            }
        })
    }).then(() => {
        fs.readFile(fileDir, (err, data) => {
            if (err)
                console.log(`REDAFILE:\n${err}`)
            else {
                res.end('ok')
            }
        })
    })
    promise.catch((reason) => {
        console.log(reason)
    })
})

httpServer.listen(SSLPORT = 443, function () {
    console.log('HTTPS Server is running on:http://localhost:%s', SSLPORT);
});