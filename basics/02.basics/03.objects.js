 const mySym = Symbol("key1")
 
 const JsUser = {
    name:"Abhinav",
    "full name" : "Abhinav Bahadur Singh",
    age : 18,
    [mySym] : "This is symbol type",
    location : "Ghaziabad",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monaday" , "Saturday"]

 }


//  console.log(JsUser["full name"]);
//  console.log(typeof JsUser[mySym]);
 
//  JsUser.email = "abhinav@ija.com"
//  console.log(JsUser.email);

// Object.freeze(JsUser)
JsUser.greeting = function(){
    console.log("hello JS User");
}

JsUser.greeting2 = function(){
    console.log(`hello js user :: ${this.name}`);
    
}
console.log(JsUser.greeting2());
