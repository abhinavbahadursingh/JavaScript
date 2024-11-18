const user = {
    username : "abhinav",
    loginCount : 8,
    signedIn: true,

    getUserDetails : function(){
        // console.log("got user details");
        console.log(`Username :: ${this.username}`);
    }
}


console.log(user.getUserDetails());


const promiseOne = new Promise() 
const date = new Date()//new keyword is known as constructor function which is used to make a new contex every time 