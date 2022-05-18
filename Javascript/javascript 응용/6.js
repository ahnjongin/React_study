let arr = ["one", "two", "three"];
let one = arr[0];
let two = arr[1];
let three = arr[2];
console.log(one, two, three); //one two three



let arr = ["one", "two", "three"];
let [one, two, three] = arr;
console.log(one, two, three); //one two three


let a = 10;
let b = 20;
let tmp = 0;
tmp = a;
a = b;
b = tmp;
console.log(a,b);


let a = 10;
let b = 20;
[a,b] = [b,a];
console.log(a,b);  //20 10


let object = { one: "one", two: "two", three: "three"};
let {one, two, three} = object;
console.log(one, two, three);   //key 값을 기준으로 할당하기 때문에 순서 상관 x
