let a = ""; //FALSE
let a = "undefined"; //FALSE
let a = []; //TRUE
let a = "string"  //TRUE
//-0, NaN, 0, null - FALSE

if (a){
  console.log("TRUE");
}
else {
  console.log("FALSE");
}

const getName = (person) => {
  if(!person){  //underined 이나 null 일때의 예외처리
    return "객체가 아닙니다";
  }
  return person.name;
};
let person = {name: "이정환"};
const name = getName(person);
console.log(name);
