function all(a1,a2){
    new Promise((resolve,reject) => {
        counter=0;
        arr=[];
        a1.then((counter)=>{
            arr[0]=counter;
            counter++;
            
            if(counter>2)
            resolve(arr);
            
        });
        a2.then((counter)=>{
            arr[1]=counter;
            counter++;
            
            if(counter>2)
            resolve(arr);
           
        });
    })
}
all(getPromise1(), getPromise2())
  .then(console.log);            
