import "./TodoItem.css";
import { useState } from "react";

const TodoItem = ({id,isDone,content,date,onUpdate,onDelete}) => {
    // const [checked,setChecked] = useState(false);
    const onChangeCheckBox = () => {
        onUpdate(id); //App.jsx에 id를 targetId로 전달
    }
    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckBox} checked={isDone} type="checkbox"/> 
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
}

export default TodoItem;