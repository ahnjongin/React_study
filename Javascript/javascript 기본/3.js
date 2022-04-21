let a = 1;
let b = 2;
console.log(a+b); //3
console.log(a*b); //2

let c = "1";
let d = "2";
console.log(a+b);  //12

let c = "1";
let d = 2;
console.log(a+b);  //12

 let compareA = 1 == "1";   //true(타입 안봄)

 let compareA = 1 === "1";   //false(타입까지 봄)

 let compareB = 1;
 console.log(typeof compareB);  //number

 let a;
 a = a ?? 10;   //a가 undefine이면 10 아니면 그 값
 console.log(a);    //10
