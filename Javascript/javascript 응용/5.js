function isKoreanfood(food) {
  if(food === "불고기" || food === "비빔밥" || food ==="떡볶이"){
    return true;
  }
  return false;
}
const food1 = isKoreanfood("불고기");
console.log(food1);   //true



function isKoreanfood(food) {
  if( ["불고기", "비빔밥", "떡볶이"].includes(food)){
    return true;
  }
  return false;
}
const food1 = isKoreanfood("불고기");
console.log(food1);   //true


const meal = {
  한식: "불고기"
  중식: "멘보샤"
  일식: "초밥"
  양식: "스테이크"
};
const getMeal = (mealType) => {
  return meal[mealType] || "굶기";
};
console.log(getMeal("한식"));   //불고기
console.log(getMeal());       //굶기
