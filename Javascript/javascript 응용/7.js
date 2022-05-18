const cookie = {
  base: "cookie",
  madeIn: "korea"
};
const chococookie = {
  ...cookie,    //스프레드 연산자 -> 쿠키의 요소를 포함
  toping: "chocochip"
}
const blueberrycookie = {
  ...cookie,
  toping: "blueberry"
}

const 123 = ["1", "2"];
const 456 = ["4", "5"];
const 123456 = [...123, ...456];
console.log(123456);  //[1,2,4,5]
