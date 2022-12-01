import React, { useState } from 'react';

const CreateTask = ({addNewTask}) => {
    const [text, setText] = useState('');
    
  return (
    <div>
        <input type="text" placeholder="type your task" value={text} onChange={(e)=> setText(e.target.value)} />
        <button 
            onClick={() => {
                if(text) {
                    addNewTask(text);
                    setText('');
                } else {
                    alert('Input cann\'t be empty!');
                }
                
            }}>Create Task</button>
    </div>
  )
}

export default CreateTask;