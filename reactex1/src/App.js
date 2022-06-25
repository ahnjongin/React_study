import React from 'react';
import './App.css';
import Myheader from './Myheader'
import Counter from "./Counter";
import Container from "./Container";
function App() {
  const func = () => {
      return "fuck"
  }
  const number = 5;
  const counterProps = {
      initialValue: 5
  };
  return (
      <Container>
    <div className="App">
        <Myheader />
        <h2>hi react {func()}</h2>
        <b id="bold_text">
            {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
        </b>
        <Counter {...counterProps} />
    </div>
          </Container>
  );
}

export default App; //es모듈 시스템(다른 파일에서 주소로 import 가능)
