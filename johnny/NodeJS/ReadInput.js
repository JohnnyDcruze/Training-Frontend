//For reading user-inputs from console
readinput=require('readline-sync');
arrfunc=require('./arrayFunction')

console.log('Enter your name')
fullName=readinput.question();
console.log('Enter your age');
age=Number(readinput.question());
console.log("Enter your country");
country=readinput.question()

console.log('Capital of '+country+"is "+arrfunc.getCapCity(country));

if(age>=18 && age<=45)
    console.log('you are eligible for gratuity')
else
    console.log('not eligible - please apply')