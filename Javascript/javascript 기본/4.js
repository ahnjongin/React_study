let width1 = 10;
let height1 = 20;
let area1 = width1 * height1;
console.log(area1);

function getArea(width, height){
  let area = width * height;
  console.log(area);
}
getArea(100, 200);

let hello = function(){
  return "안녕하세요 여러분"
} //함수 표현식, 함수를 변수에 담음
const helloText = hello();
console.log(helloText); //안녕하세요 여러분


console.log(helloB());  //안녕하세요
console.log(helloA());  //error
let helloA = function(){
  return "안녕하세요"
} //함수 표현식
function helloB(){
  return "안녕하세요"
} //함수 선언식(호이스팅으로 인해 가장 위로감)



let helloA = () => "안녕하세요"  //안녕하세요(화살표함수)
