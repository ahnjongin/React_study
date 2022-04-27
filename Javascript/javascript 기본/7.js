for(let i = 1; i <= 100; i++){
    console.log("안종인");
}
let person = {
  name = "안";
  age = 25;
}
const personKeys = Object.keys(person);
for(let i =0; i<personKeys.length; i++){
  const curKey = personKeys[i];
  const curValue = person[curKey];

  console.log(`${curKey} : ${curValue}`);
}
