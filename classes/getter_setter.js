class User {
    constructor(email , password){
        this.email = email
        this.password  = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
    
}


const abhinav = new User("abhi@12" , "123")
console.log(abhinav.password);
