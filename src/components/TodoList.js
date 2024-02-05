import React, { useCallback } from "react";
import { List } from 'react-virtualized';
import './TodoList.scss'
import TodoListItem from "./TodoListItem";

const TodoList = ({todos, onRemove, onToggle}) => {
    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
                />
            );
        },
        [onRemove, onToggle, todos],
    );

    return (
        <List
            className="TodoList"
            width={512} // 전체 너비
            height={513} // 전체 높이
            rowCount={todos.length} // 항목 개수
            rowHeight={57} // 항목 당 높이
            rowRenderer={rowRenderer} //rowRenderer함수 지정
            list={todos} //배열을 todos로 지정
            style={{outline: 'none'}} //List의 기본 outline 스타일 제거 
        />
    );
};

export default React.memo(TodoList);