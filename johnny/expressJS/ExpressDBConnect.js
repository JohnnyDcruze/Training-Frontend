var exp = require("express"); //import express.js into the application
var my_sql=require('mysql');
var proc=require('process');
var cors=require('cors');
var bparser = require("body-parser");
var expen = exp(); //intialize the environment for Express JS app
expen.use(bparser.json());
expen.use(cors());
expen.use(bparser.urlencoded({ extended: true })); //parse url encoded data from request body and make it available in req.body

var path = require("path");
const { hostname } = require("os");
var visitorCount = 0;

var my_sqlconn=my_sql.createConnection({host:"localhost",port:3306,user:'root',password:'Sakthi@130901',database:'world'})
my_sqlconn.connect();


console.log("created successfully........")
console.log(my_sqlconn.state);
console.log(my_sqlconn.statistics)

function processResults(error,results)
{
    //console.log(results);
    for(i in results)
    console.log(JSON.stringify(results[i]));
   // usersList(JSON.stringify(results[i]));

}


expen.post("/signin", authenicate);
function authenicate(request, response) {
    my_sqlconn.query('select * from users',processResults);

 
//   for (i = 0; i <= users.length - 1; i++) {
//     if (
//       request.body["userName"] == users[i].userName &&
//       request.body["password"] == users[i].password
//     ) {
//       found = true;
//       break;
//     }
//   }

// if (found) {
//   console.log("user loggedin successfully");
//   response.send("<b>Welcome</b>");
// } else response.send("<b>invalid</b><br><a href='/login'>retry login </a>");
}
//var port=0;
//console.log("Enter a port number");
//port = parseInt(f.question()); //read input from user and convert it to integer type

expen.post('/addUser',addNewUser)
function addNewUser(request,response)
{ 
    var uid=request.body.userid;
    var pwd=request.body.password;
    var email=request.body.emailid;//request .body is for post command , request.query is for get method
    console.log("********"+uid+"\t\t"+pwd+"\t\t"+email)
    var ins="insert into users values('"+uid+"', '"+pwd+"' ,'"+email+"')";
    console.log("Executing" +ins);//to check whether the data has been inserted or not
    my_sqlconn.query(ins)
    console.log("inserted 1 record successfully")
}

expen.post('/deleteUser',deleteUser)
function deleteUser(request,response)
{ 
    var uid=request.body.userid;
    var del="delete from users where userid='"+uid+"'";
    console.log("Executing" +del);//to check whether the data has been inserted or not
    my_sqlconn.query(del)
    console.log("deleted 1 record successfully")
}

expen.post('/updateUser',updateUser)
function updateUser(request,response)
{ 
    var uid=request.body.userid;
    var pwd=request.body.password;
    var upd="update users  set password ='"+pwd+"' where userid='"+uid+"'";
    console.log("updating" +upd);//to check whether the data has been inserted or not
    my_sqlconn.query(upd)
    console.log("updated 1 record successfully")
}
 
expen.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
               "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


expen.listen(proc.argv[2], proc.argv[3]);
console.log("Started the port at server number : " + proc.argv[2]);
