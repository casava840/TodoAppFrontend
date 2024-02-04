import './App.css';
import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const createBulkTodos = () => {
  const arr = [];
  for (let i = 1; i <= 2500; i++) {
    arr.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    });
  };

  return arr;
};

function App() {
  const [todos, setTodos] = useState(createBulkTodos);
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '프론트엔드 기초 배우기',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '리액트 기초 다지기',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '일정 관리 앱 만들기',
  //     checked: false,
  //   }

  // ]);

  const nextId = useRef(4);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    }
    setTodos(todos => todos.concat(todo));
    nextId.current += 1;
  },[]); //todos의 변화가 있을때만 리렌더링

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [],
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos =>
        todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked } : todo) //checked를 제외한 객체는 그대로 유지
      );
    },
    [],
  );

  return (
    
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;