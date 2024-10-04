const myArr = [1,2,3,4,5,6,7]
console.log(myArr.includes(6));


//slice , splice


console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)//manuplates the original array.
console.log(myn2);

console.log("C" , myArr);


