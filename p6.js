var p1=Promise.resolve("Resolved")
var p1=Promise.reject(new Error("Rejected"))

p1.then(function resolve(value){
    console.log(value);

}).catch(function reject(e){
    console.log(e.message);
}) 

