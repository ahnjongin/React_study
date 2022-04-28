const arr = [1,2,3,4];
const newArr = [];
arr.forEach((elm) => console.log(elm));   //1234

arr.forEach(function (elm){   //1234
    console.log(elm);
});

arr.forEach(function (elm){   //2468
    newArr.push(elm*2);
});

const arr = [1,2,3,4];
const newArr = arr.map((elm) => {   //2468
  return elm * 2;
});

const arr = [1,2,3,4];
let number = 3;
let number1 = "3";
console.log(arr.includes(number));    //true
console.log(arr.includes(number1));    //false
console.log(arr.indexOf(number1));    //false


const arr =[
  {color: "red"},
  {color: "black"},
  {color: "blue"},
  {color: "green"}
];
console.log(arr.findIndex((elm) => elm.color === "green"));   //3

const element = arr.find((elm) => {
  return elm.color === "blue";
});
console.log(element); //color: blue


const arr =[
  {num: 1, color: "red"},
  {num: 2, color: "black"},
  {num: 3, color: "blue"},
  {num: 4, color: "green"},
  {num: 5, color: "blue"}
];
const arr1 = [
  {num: 1, color: "red"}
]
console.log(arr.filter((elm) => elm.color === "blue"));   //2개의 blue 요소 출력

console.log(arr.slice(0,2)); //배열 자르기-0번부터 1번까지 반환

console.log(arr.concat(arr1));  //배열 붙히기






let chars = ["나", "다", "가"];
chars.sort();   //sort는 문자열 기준으로 정렬을 함
console.log(chars); //원본배열의 순서를 정렬

let numbers = [0,1,3,2,10,30,20];
const compare = (a,b) => {
  if(a>b){
      //크다
      return 1;  //큰 값이 뒤에 있어야  함
  }
  if(a<b){
    //작다
    return -1; //작은값을 앞으로 보냄
  }
  return 0;  // 내비둠
};
numbers.sort(compare);
console.log(numbers); //숫자정렬


const arr = ["안종인", "짱"];
console.log(arr.join(" ")); //안종인 짱
