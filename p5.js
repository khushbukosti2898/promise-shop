
const p1=new Promise(function(resolve,reject){
    resolve("PROMISE VALUE");    
}).then(console.log);
console.log("MAIN PROGRAM");