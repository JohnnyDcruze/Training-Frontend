var fs=require('fs')

fs.open('data.txt','r',function(err,fd)
{
    console.log("file opened successfully")
}
)

fs.readFile('data.txt','utf8',function(err,data){
    console.log("Contents of data.txt\n"+data)
    //console.log('there are'+lines.length+" Characters in the file")
});