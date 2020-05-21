import React from 'react';

const Todos =({todos,deleteTodo})=>{
    const todoList =todos.length ? (todos.map(todo =>{
        return(
            <div className="collection-item" key={todo.id}>
                <span className="center todo-content">{todo.content}</span>
                <button className="waves-effect waves-light btn-small right del-button #f44336 red" onClick={()=>deleteTodo(todo.id)}>Delete Todo</button>
            </div>
        )
    })):(<p className="collection-item #1de9b6 teal accent-3">You have todos left</p>);
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;