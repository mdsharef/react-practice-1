import React, { useState } from 'react';
import shortid from 'shortid';
import Buttons from '../components/tasks/button-todo/Buttons';
import Layout from '../components/layout/Layout';
import CreateTask from '../components/tasks/CreateTask';
import ShowTasks from '../components/tasks/ShowTasks';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [visibility, setVisibility] = useState('all');

    const addNewTask = (text) => {
        const task = {
            id: shortid.generate(),
            text,
            isCompleted: false,
            createdAt: new Date().toDateString(),
        }
        setTasks([task,...tasks]);
    }

    const selectVisibility = (e) => {
        setVisibility(e.target.value);
    }

    const performFilter = (tasks) => {
        if(visibility === 'completed') {
            return tasks = tasks.filter(task => task.isCompleted)
        } else if (visibility === 'incompleted') {
            return tasks = tasks.filter(task => !task.isCompleted)
        } else if (visibility === 'all') {
            return tasks;
        }
    }

    const handleCheck = (todoId) => {
        const todos = [...tasks]
        const todo = todos.find(t => t.id === todoId);
        todo.isCompleted = !todo.isCompleted;
        setTasks([...todos]);
    }

  return (
     <Layout>
        <h3>Todo Application</h3>
        <CreateTask addNewTask={addNewTask} />
        <br />
        <br />
        <Buttons handleClick={selectVisibility} />
        <br />
        <br />
        <ShowTasks tasks={tasks} performFilter={performFilter} handleCheck={handleCheck} />
     </Layout>
  )
}

export default Tasks;