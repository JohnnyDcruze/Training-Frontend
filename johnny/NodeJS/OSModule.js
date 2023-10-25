var osmod=require('os');
console.log(osmod.arch());
console.log("Free memory in bytes"+osmod.freemem());
var info=osmod.cpus();
for (let i = 0; i <info.length ;i++) {
    console.log("CPU "+i+1);
    console.log(info[i].model);
    console.log(info[i].speed);
    console.log(info[i].times);
}
console.log("your machine name :"+osmod.hostname());
console.log("Machine architechture : "+osmod.machine());
console.log("platform : "+osmod.platform())
console.log("version  : "+osmod.version()+" and release : "+osmod.release());
console.log("Total Memory : "+osmod.totalmem());
user=osmod.userInfo();
console.log("\nUser Information"+ user);