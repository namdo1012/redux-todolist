export const rootReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('ADD_TODO_ACTION');
      return [];
  }
}