var io=require('fs');
var readLine=require('readline-sync')
var line="";
var cnt=0;
console.log("enter a line");
while(cnt<3)
{
    line=readLine.question();
    //io.writeFile('doc.txt',line,displayStatus);
    line+='\n'
    io.appendFileSync('doc.txt',line,displayStatus);
    cnt++;
}

function displayStatus()
{
    console.log('write'+ cnt+'to a file')
}