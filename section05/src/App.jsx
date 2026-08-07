import './App.css';
import { useState } from 'react';
import Bulb from "./components/Bulb"
import Counter from './components/Counter';
import Register from './components/Register';
import HookExam from './components/HookExam';


function App() { //작성한 요소는 App내부에 넣어서 출력가능 (부모컴포넌트)
  return (
    <>
      <HookExam />
    </>
  );
};

export default App

