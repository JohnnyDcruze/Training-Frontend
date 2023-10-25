var exp = require("express"); //import express.js into the application
var bparser = require("body-parser");
var expen = exp(); //intialize the environment for Express JS app
expen.use(bparser.urlencoded({ extended: false })); //parse url encoded data from request body and make it available in req.body

var proc = require("process");

var path = require("path");
var visitorCount = 0;

expen.get("/", welcome); //when then client sends the get request with the url ending with slash/ the welcome function is called

function welcome(request, response) {
  var str = "<html><body>";
  str += "<h1>Welcome to my website</h1>";
  visitorCount++;
  str += "<b> You are Visitor # </b>" + visitorCount;
  var today = new Date();
  str += " <br/> Today is " + today + "<hr />";
  str += "<br><a href='/login'> click to login</a>";
  str += "</body></html>";
  response.send(str); //sends the response back to the called function
}

expen.get("/login", logInfo);

function logInfo(request, response) {
  console.log("User Logged in");
  response.sendFile(path.join(__dirname, "./logInfo.html"));
}

expen.post("/signin", authenicate);
function authenicate(request, response) {
  var users = [
    { userName: "janakiraman", password: "12345" },
    { userName: "rajesh", password: "23456" },
    { userName: "prasad", password: "34567" },
  ];

 
  for (i = 0; i <= users.length - 1; i++) {
    if (
      request.body["userName"] == users[i].userName &&
      request.body["password"] == users[i].password
    ) {
      found = true;
      break;
    }
  }

if (found) {
  console.log("user loggedin successfully");
  response.send("<b>Welcome</b>");
} else response.send("<b>invalid</b><br><a href='/login'>retry login </a>");
}
//var port=0;
//console.log("Enter a port number");
//port = parseInt(f.question()); //read input from user and convert it to integer type
expen.listen(proc.argv[2], proc.argv[3]);
console.log("Started the port at server number : " + proc.argv[2]);
for (i in proc.argv) {
  console.log(proc.argv[i]);
}
