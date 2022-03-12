import { TODO } from "../constants/todos"

export let addTodo = (todoItem) => {
  return {
    type: TODO.ADD_TODO,
    payload: {
      ...todoItem
    }
  }
}

export let removeTodo = (id) => {
  return {
    type: TODO.REMOVE_TODO,
    payload: {
      id,
    }
  }
}

export let markTodoDone = (todoItem) => {
  return {
    type: TODO.MARK_TODO_DONE,
    payload: {
          ...todoItem
    }


  }
}

export let initializeTodos = (todos)  => {
  return {
    type: TODO.INITIALIZE_TODOS,
    payload: todos || [],
  }
}
