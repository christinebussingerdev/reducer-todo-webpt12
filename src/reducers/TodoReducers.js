
export const initialState = { 
  tasks: [{
    name: 'feed dogs',
    id: 1,
    completed: false
  }]
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TASK' :
      return {...state, tasks: [...state.tasks, {
        name: action.payload,
        id: Date.now(),
        completed: false
      }]}
    case 'TOGGLE_TASK' : 
      return {...state, tasks: state.tasks.map(task => {
        if (task.id === action.payload) {
          return {...task, completed: !task.completed}
        }
      }) }
    case 'CLEAR_COMPLETED' : 
      return {...state, tasks: state.tasks.filter(task => {
        if (task.completed === true) {
          return false;
        }
        else return true;
      })}
    default : return state;
  }
}