
const p1=new Promise(function(resolve,reject){
    resolve("I FIRED");
    reject(new Error("I DID NOT FIRED"));
    
    
}).then(resolve= value => console.log(value)
    ,reject = e => console.log(e.message)
);