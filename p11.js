function all(a1,a2){
    var p=new Promise((resolve,reject) => {
        counter=0;
        arr=[];
        a1.then((count)=>{
            arr[0]=count;
            counter++;
            
            if(counter>=2){
            resolve(arr);
            }
            
        });
        a2.then((count)=>{
            arr[1]=count;
            counter++;
            
            if(counter>=2){
            resolve(arr);
        }
           
        });
    })
    return p; 
}
all(getPromise1(), getPromise2())
  .then(console.log);            
