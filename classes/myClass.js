class User {
    constructor(username , email , password){
        this.username = username
        this.email = email
        this.password = password
    }


    encryptPassword(){
        return `${this.password}abc`
    }
}


const chai  = new User("Abhinav" , "abhinav@gamail.com", "123");

console.log(chai);
console.log(chai.encryptPassword());
// console.log(chai); 
