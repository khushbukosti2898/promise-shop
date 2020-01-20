function attachTitle(value){
    return 'DR. '+value;
}

/* new Promise((resolve,reject)=>{
    resolve("MANHATTAN");
}).then((value)=>attachTitle(value)).then(console.log); */


new Promise((resolve,reject)=>{
    resolve("MANHATTAN");
}).then(attachTitle).then(console.log);
