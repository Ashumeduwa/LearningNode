let WaitData = new Promise((resolve,reject)=>{

setTimeout(() => {
    resolve("I'm working fine");
}, 2000);
})

WaitData.then(()=>{
    console.log(WaitData)
})

