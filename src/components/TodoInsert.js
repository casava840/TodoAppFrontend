import React, { useCallback, useState } from "react";
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []); //컴포넌트 리렌더링시 재사용을 통한 성능향상을 위해 onChange를 정의해줌

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue(''); // value 초기화

        e.preventDefault();
    },
    [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
            placeholder="할 일을 입력하세요"
            value={value}
            onChange={onChange} />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;