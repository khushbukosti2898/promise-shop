/* var first= function(){
    return new Promise((resolve,reject)=>{
        resolve("first");
    })
}
var second= function(value){
    return new Promise((resolve,reject)=>{
        resolve(value);
    })
}
*/
var fp=first().then(function resolve(value){
    return second(value);
});
fp.then(console.log);
