//동기 비동기

//동기적
function taskA() {
  console.log("A 작업 끝");
}
taskA();
console.log("코드 끝");



//비동기적
function taskA() {
  setTimeout(()=>{
    console.log("A TASK END");
  }, 2000)  //2초뒤에 콜백함수 실행
}
taskA();
console.log("코드 끝");  //먼저 실행된 taskA를 기다리지 않고 그냥 실행하는 방식



function taskA(a, b, cb ) {
  setTimeout(()=>{
    const res = a + b;
    cb(res);
  }, 3000)
}
taskA(3,4, (res) => {
  console.log("A TASK RESULT: ", res);
});
console.log("코드 끝");




//Js Engine은 Heap 과 Call Stack 으로 구성
