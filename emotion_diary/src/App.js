import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import New from "./pages/New";
import React, { useReducer, useRef} from "react";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type){
    case "INIT":{
      return action.data;
    }
    case "CREATE":{
      const newItem = {
        ...action.data,
      }
      newState = [newItem, ...state];
      break;
    }
    case "REMOVE":{
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT" :{
      newState = state.map((it) => it.id === action.data.id? {...action.data}: it)
      break;
    }
    default:
      return state;
  }
  console.log("fuck")
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext()

const dummyData = [
  {
    id: 1,
    emotion:1,
    content: "오늘의 일기 1번",
    date: 1657030375033,
  },
  {
    id: 2,
    emotion:2,
    content: "오늘의 일기 2번",
    date: 1657030375034,
  },
    {
    id: 3,
    emotion:3,
    content: "오늘의 일기 3번",
    date: 1657030375035,
  },
    {
    id: 4,
    emotion:4,
    content: "오늘의 일기 4번",
    date: 1657030375036,
  },
    {
    id: 5,
    emotion:5,
    content: "오늘의 일기 5번",
    date: 1657030375037,
  }
]

function App() {

  const [data, dispatch] = useReducer(reducer, dummyData)
  const dataId = useRef(6)
  //CREATE
  const onCreate = (date,content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,

      }
    })
    dataId.current += 1;
  }
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({type: "REMOVE", targetId})
  }
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      }
    })
  }

  return (

    <DiaryStateContext.Provider value={data}>
    <DiaryDispatchContext.Provider value={{onCreate, onEdit, onRemove}}>
    <BrowserRouter>
    <div className="App">

      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path= "/new" element = {<New />}/>
        <Route path= "/edit/:id" element = {<Edit />}/>
        <Route path= "/diary/:id" element = {<Diary />}/>
      </Routes>
    </div>
    </BrowserRouter>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
