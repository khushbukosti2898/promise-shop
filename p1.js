const p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("TIMED OUT!");
    },300)
})