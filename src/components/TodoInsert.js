import React, { useCallback, useState } from "react";
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []); //컴포넌트 리렌더링시 재사용을 통한 성능향상을 위해 onChange를 정의해줌

    return (
        <form className="TodoInsert">
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