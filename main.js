var express=require('express');
var app=new  express();
var parser=require('body-parser');
require('./database.js');

var port=7777;
app.get('/',function(req,res){
res.render('./../app/index.ejs',{});
})
.use(express.static(__dirname + '/../tmp'))
.listen(port);


app.use(parser.json());
app.use(parser.urlencoded({extended:false})); //handle post request
require('./routes/items.js')(app);
console.log('server is running on port:'+port);


