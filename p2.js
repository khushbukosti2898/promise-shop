const p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("FULFILLED!");
    },300)
});
p1.then(function(value){
    console.log(value);
})