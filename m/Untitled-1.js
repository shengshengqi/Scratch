var express = require('express'); //调用模块
var app = express();
var bodyParser=require('body-parser');
const querystring = require("querystring");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var fs = require("fs");         // 异步打开文件
console.log("准备打开文件！");
fs.open('myData.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("文件打开成功！");     
});

var tem = 0;
var sum = 0;
app.get('/', function (req, res) {  //get请求

    var input = req.url;
    if(input ==='/?a=-2')
    {
     	return res.send('link');
    }
    else if(input !== '/?a=-1')
    {
        fs.readFile('price.json', function (err, data) {
            if (err) {
                return console.error(err);
            }
            sum = tem + (price.input-'0');                                    //新菜价+原有菜价和
            console.log("异步读取: " + data.toString());
            console.log(sum);
        });
        console.log("异步读取: " + data.toString());
        console.log(sum);

       
        fs.writeFile('myData.txt',sum,function(err){
            if(err) throw err;
            console.log("has written:"+sum);
        });
        tem = 0;
        fs.writeFileSync('myData.txt',sum);

    }
    else{
        fs.readFile('myData.txt', function (err, data) {
            if (err) {
                return console.error(err);                  //显示最后结果
            }
            console.log("Final Price: " + data.toString());
         });
            return res.send(String(sum));
            console.log(showData);
 
    }
    res.send('GET REQUEST SUCCESS');
})



var server = app.listen(8020, function () { //监听端口8020
  var host = server.address().address
  var port = server.address().port

  console.log(`Server listening at http://${host}:${port}`);
});