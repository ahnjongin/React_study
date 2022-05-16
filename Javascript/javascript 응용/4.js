const getName = (person) => {
  if(!person){
    return "객체가 아닙니다";
  }
  return person.name;
};

let person;
const name = getName(person);
console.log(name);      //객체가 아닙니다


//단락회로 평가
const getName = (person) => {
  const name = person && person.name;
  return name || "객체가 아닙니다"
};
let person = {name: "이정환"};
const name = getName(person);
console.log(name);    //이정환


const getName = (person) => {
  const name = person && person.name;   //person = falsy => null
  return name || "객체가 아닙니다"       //falsy||true => 객체가아닙니다
};
let person = null;
const name = getName(person);
console.log(name);  //객체가 아닙니다
