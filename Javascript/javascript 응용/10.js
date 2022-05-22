function hello() {
  return 'hello';
}

async function helloAsync() {   //Promise를 return하는 비동기 함수
  return "hello Async";
}

console.log(hello());   //hello
console.log(helloAsync());    //Promise{<Pending>}

helloAsync().then((res)=>{//async function에서 가져옴
  console.log(res);     //hello Async
})




function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function helloAsync() {
    await delay(3000);
    return "hello Async";
  };
async function main() {
  const res = await helloAsync();
  console.log(res);
}
main();
