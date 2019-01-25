var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var ingredients=[
{"id":"23kht",
"text":"milk"},
{
	"id":"ty56467",
	"text":"krishna"
},
{
	"id":"yyhjkyg56",
	"text":"mahadev"
},
{
	"id":"56vchgscb",
	"text":"bajrangbali"//this is an array of javascript objects
}];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',function(req,res){
	res.send(ingredients);//we always have to send a response back or else our server will crash!!
});
app.listen(3000,function(){
	console.log("First API running on port 3000!!");
})