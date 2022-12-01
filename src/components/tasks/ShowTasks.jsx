const ShowTasks = ({tasks, performFilter, isChecked, handleCheck}) => {
    const todos = performFilter(tasks);
    

  return (
    <div>
        {todos.length > 0 ? (
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" id='checkTodo' name='checkTodo' checked={todo.isCompleted} value={todo.id} onChange={()=>handleCheck(todo.id)} />
                        <label htmlFor='checkTodo'>{todo.text} - {todo.createdAt}</label>
                    </li>
                ))}
            </ul>
        ) : (
            <h4>There is no Task</h4>
        )}
    </div>
  )
}

export default ShowTasks;