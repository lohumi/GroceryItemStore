var express=require('express');

var app=new  express();
var port=7777;
app.get('/',function(req,res){
res.render('./../app/index.ejs',{});
}).use(express.static(__dirname + '/../tmp'))
.listen(port);
console.log('server is running on port:'+port);


