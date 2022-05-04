const getName = (person) => {
  if(!person){
    return "객체가 아님"
  }
  return person.name;
};

let person;
const name = getName(person);
console.log(name);    //객체가 아님




const getName = (person) => {

  const name = person && person.name;  //name = truety 하기 때문에 person.name을 확인
  return name || "객체가 아닙니다";
};

let person = {name: "안종인"};
const name = getName(person);
console.log(name);    //안종인



const getName = (person) => {

  const name = person && person.name;  //null
  return name || "객체가 아닙니다";  //객체가 아닙니다
};

let person = null;
const name = getName(person);
console.log(name);    //객체가 아닙니다
