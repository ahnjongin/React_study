import React,{useState} from "react";
import OddEvenResult from "./OddEvenResult";



const Counter = (props) => {



    const [count, setCount] = useState(props.initialValue);  //usestate라는 상태를 만들면 count로 상태의 값, setcount로 상태 업데이트

    const onIncrease =() => {
        setCount(count + 1);
    }
    const onDecrease = () => {
        setCount(count -1);
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick = {onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count = {count} />
        </div>
    );

};
export default Counter;