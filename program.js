



//reject promise
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("FILFILLED!");
    },300);
    

});
p1.then(function(value){
    console.log(value);
}).catch(function(e){
    console.log(e)
})
/* function onReject(e){
    console.log(e.message);
} */