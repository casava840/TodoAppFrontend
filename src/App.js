import './App.css';
import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '프론트엔드 기초 배우기',
      checked: true,
    },
    {
      id: 2,
      text: '리액트 기초 다지기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들기',
      checked: false,
    }

  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    }
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },[todos]); //todos의 변화가 있을때만 리렌더링ㅇ

  return (
    
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos}/>
    </TodoTemplate>
  );
}

export default App;