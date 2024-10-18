//function me aagar value store krni h to return lagana padhega

function loginUserMess(username) {
    if (!undefined) {
        console.log("Please enter a username")
    }

    return `${username} just logged in `
}

// console.log(loginUserMess("abhinav"));

// When you dont know who many input values will be there


function calculateCartPrice(...num1) {//rest operator
    return num1
}


const user = {
    userName : "Abhinav",
    price: 199
}


function handleObject(anyObject) {
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user)


const myNewArr  = [200,233,234,234]

function returnSecondValkue(getArr) {
    return getArr[1]
}

console.log(returnSecondValkue(myNewArr));
