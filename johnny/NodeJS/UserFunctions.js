readinput=require('readline-sync')
function validate(empname,empage)
{
    if(empname.length<5)
        console.log("Length of name must be a minimum of 5 characters")
    if(empage<18)
        console.log('Age should not less than 18')
}
console.log('Enter your name')
ename=readinput.question();
console.log('Enter your Age');
empage=Number(readinput.question());

validate(ename,empage);