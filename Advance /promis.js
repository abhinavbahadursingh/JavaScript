
new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task two");
        resolve()
    } , 1000)
}).then(function(){
    console.log("async 2 resolved");
    
})

