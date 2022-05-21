//비동기를 돕는 promise
function isPositive(number, resolve, reject) {
  setTimeout(()=>{
    if(typeof number === 'number'){
      //성공 -> resolve
      resolve(number >= 0 ? "양수":"음수");
    }
    else{
      //실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    }
  },2000)
}

isPositive(10,(res)=>{
  console.log("성공적으로 수행됨: ", res);
},(err)=>{
  console.log("실패하였음: ", res);
});


function isPositiveP(number) {
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if(typeof number === 'number'){
        //성공 -> resolve
        resolve(number >= 0 ? "양수":"음수");
      }
      else{
        //실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다");
      }
    },2000)
  };
    const asyncTask = new Promise(executor);
    return asyncTask;
  }


const res = isPositiveP(101);
res
.then(() => {
  console.log("작업 성공: ", res);
})
.catch((err)=>{
  console.log("작업 실패: ", err);
})
