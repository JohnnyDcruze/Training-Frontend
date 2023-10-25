var exp=require('express');//import express.js into the application
var expen=exp();//intialize the environment for Express JS app
var path=require('path');

var visitorCount=0;

expen.get('/',welcome)//when then client sends the get request with the url ending with slash/ the welcome function is called

function welcome(request,response)
{
    var str="<html><body>";
    str+="<h1>Welcome to my website</h1>"
    visitorCount++;
    str+="<b> You are Visitor # </b>"+visitorCount;
    var today=new Date();
    str+=" <br/> Today is "+today+"<hr />";
    str+="<br><a href='/login'> click to login</a>";
    str+= "</body></html>";
    response.send(str);//sends the response back to the called function
}

expen.get('/login',logInfo)

function logInfo(request,response){
    console.log("User Logged in");
    response.sendFile(path.join(__dirname,'./logInfo.html'))
}

expen.get('/signin',authenicate)
function authenicate(request,response)
{
    console.log("Authenticating...")
    if (request.query['userName']=='johnny' && request.query["password"]=='abcdef')  
    response.send("<b>you are authenticated</b>")
    
    else
    response.send("<b>invalid</b><br><a href='/login'>retry login </a>")
}
expen.listen(2609,"localhost");