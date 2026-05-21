import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {

  if (!Array.isArray(todos) || todos.length === 0) {
    return <p>No todos yet (or connection failed whoops)</p>
  }

  return (
    <>
      {todos.map(todo => {
        return <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
