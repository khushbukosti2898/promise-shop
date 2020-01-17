/* const p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject(new Error("REJECTED!"));
    },300);
})

p1.then(function resolve(value){
    console.log(value);
})
p1.catch(function reject(e){
    console.log(e.message);
}) 
 */
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject(new Error("REJECTED!"));
    },300);
})

p1.then(resolve= value => console.log(value)
    ,reject = e => console.log(e.message)
);
