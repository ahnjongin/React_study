let a = 3;
if (a>0){
  console.log("양");
}else{
  console.log("음");
}

let a = -3;
a>=0 ? console.log(양) : console.log(음);


let a = [];
a.length === 0 ? console.log("빈") : console.log("안 빈");


let a = [1, 23];
const arrayStatus = a.length === 0 ? "빈" : "안 빈";
console.log(arrayStatus);


let a;
const result = a ? true : false;
console.log(result);    //undefined 이기 때문에 false

//학점계산 - 가독성을 헤침
let score = 100;
score >= 90
  ? console.log("A")
  :score >= 50
  ?console.log("B")
  :console.log("F");
