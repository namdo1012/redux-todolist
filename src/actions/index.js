let nextId = 0;

export const addTodoAction = (text, nextId) => {
  return {
    type: 'ADD_TODO',
    payload: {
      task: text,
      id: nextId++,
      completed: false
    }
  }
}