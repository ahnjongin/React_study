//객체
let person = new Object();
let person = [];

let person = [
  key: "value"  //프로퍼티
  name: "안종인"
  key2: [1,2];
  key3: function(){}
] //모든자료형을 프로퍼티로 사용가능
console.log(person.key1);  //key: "value"
console.log(person["key"]); //key: "value"

console.log(getPropertyValue("name"));  //안종인

function getPropertyValue(key){
  return person[key];
}

let person1 = [
  name:"안종인"
  age: 25
  say: function(){
    console.log(`안녕 나는 ${this["name"]}`);
  } //메서드
]
person1.location = "천국";
person1["gender"] = "남성"; //프로퍼티 추가
person1.name = "안종인A"   //수정
person1.age = null; //삭제
person1.say();  //안녕

console.log(`name: ${"name" in person1}`);  //true property 확인
