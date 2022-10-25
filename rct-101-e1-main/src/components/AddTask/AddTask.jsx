import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {

    const [value,setValue] = useState("")
    const [todos,setTodos] = useState([])
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={value}
        onChange={(e) => setValue(e.target.value)}
        />
      <button data-cy="add-task-button" onClick={(e) => {setTodos([...todos,{value:value , id:Date.now()}])
      
      setValue("") 
        
    }}>Add</button>



    {todos.map((todo) => (
         <div>
           <input type="checkbox" />
         <div key="todo.id">{todo.value}</div>
         </div>
      ))}
    </div>
  );
};

export default AddTask;
