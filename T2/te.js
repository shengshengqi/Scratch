const querystring = require("querystring");
d='a=1&b=2';
b=querystring.parse(d);
console.log(b);