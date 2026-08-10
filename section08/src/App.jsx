import './App.css'
import {useState,useRef} from 'react';
import Header from './components/Header.jsx'
import Editor from './components/Editor'
import List from './components/List'

const mokData = [ //임시 데이터 배열 생성
    {
      id:0,
      isDone : false,
      content : "React 공부하기",
      date : new Date().getTime(),
    },
    {
      id:1,
      isDone : false,
      content : "책읽기",
      date : new Date().getTime(),
    },
    {
      id:2,
      isDone : false,
      content : "빨래하기",
      date : new Date().getTime(),
    }
  ]

function App() {
  const [todos,setTodos] =useState(mokData);
  const idRef = useRef(3);


  const onCreate = (content) => { 
    const newTodo = {//새로운 Todo아이템을 객체형태로 제작
        id :idRef.current++,
        isDone : false,
        content : content,
        date : new Date().getTime(),
      }
    setTodos([newTodo,...todos]);
  };

    const onUpdate = (targetId) => {
    //_todos State의 값들 중에 targetId와 일치하는 id를 갖는 투두 아이템의 isDone을 변경

    //인수 : todos배열에서 targetId와 일치라는 id를 갖는 요소 데이터만 딱 바꾼 새로운 배열을 반환
    setTodos(todos.map((todo) => {
      //삼항 연산자로 아래와 같이 작성 가능
      return todo.id===targetId ? 
        {...todo,isDone: !todo.isDone}:todo;
      // if(todo.id===targetId.id) {
      //   return {
      //     ...todo, //_todo의 내용을 펼치기 (스프레드 연산자)
      //     isDone :!todo.isDone, //checkbox의 상태를 반대로 변경
      //   }
      // }
      //return todo //일치하지않는 경우 변형되지않은 todo 아이템을 반환
    }))
  }
  
  const onDelete = (targetId) => {
    //인수 : todos배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열 반환
    setTodos(todos.filter((todo) => todo.id !=targetId));

  }
  return (
    <div>
      <Header/>
      <Editor onCreate = {onCreate}/>
      <List todos = {todos} onUpdate = {onUpdate} onDelete={onDelete}/>
    </div>
);
}

export default App
