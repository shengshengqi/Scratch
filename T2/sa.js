var express = require('express'); //调用模块
var app = express();
var bodyParser=require('body-parser');
const querystring = require("querystring");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var c = {
    m:'money',
    n:0
};

app.get('/', function (req, res) {  //get请求
    var b=0;
    var d = req.url;
    var e = d.substring(2);
    var f;
    if(d!=='/?a=-1')
    {
        f = querystring.parse(e);
        b = f.a-'0';
        console.log(b);
        c.n = c.n + b;
        //console.log(c.n);
        b = 0;
    }
    else console.log(c.n);
    res.send('GET REQUEST SUCCESS');
})

var server = app.listen(3000, function () { //监听端口8040
  var host = server.address().address
  var port = server.address().port

  console.log(`Server listening at http://${host}:${port}`);
});