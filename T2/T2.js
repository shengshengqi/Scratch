var express = require('express'); //调用模块
var app = express();
var bodyParser=require('body-parser');
const querystring = require("querystring");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {  //get请求
    var b=0;
    var c=1;
    var d = req.url;
    if(d!=='/?a=-1')
    {
        b = querystring.parse(d) + '0';
        console.log(b-'0');
        c = c+b;
        b = 0;
    }
    else console.log(c-'0');
    res.send('GET REQUEST SUCCESS');
})

var server = app.listen(3000, function () { //监听端口8040
  var host = server.address().address
  var port = server.address().port

  console.log(`Server listening at http://${host}:${port}`);
});