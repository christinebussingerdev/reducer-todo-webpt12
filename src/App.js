import React, {useState, useReducer} from 'react';
import {reducer, initialState} from './reducers/TodoReducers';
import TodoForm from './components//TodoForm';
import TodoList from './components//TodoList';
import './index.css';



function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  const addTask = (task) => {
    dispatch({ type: 'ADD_TASK', payload: task})
  }

  const toggleItem = id => {
    dispatch({ type: 'TOGGLE_TASK', payload: id})
  };

  const clearCompleted = e => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  };

  return (
    <div>
      <div className="App">
        <div className="header">  
        <h1>Todo List</h1>
          <TodoForm addTask={addTask} />
        </div>
        <TodoList tasks={state.tasks} toggleItem={toggleItem} clearCompleted={clearCompleted} />
      </div>
    </div>
  )
}

export default App;


// import React from 'react';

// import TodoForm from './components/TodoComponents/TodoForm';
// import TodoList from './components/TodoComponents/TodoList';

// const tasks = [
//   {
//     name: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     name: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   }
// ]

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       tasks
//     };
//   }
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state

//   addTask = (e, task) => {
//     e.preventDefault();
//       const newTask = {
//         name: task,
//         id: Date.now(),
//         completed: false,
//       }
//     this.setState({
//       tasks: [...this.state.tasks, newTask]
//     });
//   }

//   toggleItem = taskId => {
//     this.setState({
//       tasks: this.state.tasks.map(task => {
//         console.log(task);
//         if (taskId === task.id) {
//           return {
//             ...task,
//             completed: !task.completed
//           };
//         }

//         return task;
//       })
//     });
//   };

//   clearCompleted = e => {
//     e.preventDefault();
//     this.setState({

//       tasks: this.state.tasks.filter(task => !task.completed)
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <div className="header">
//           <h1>Todo List</h1>
//           <TodoForm addTask={this.addTask} />
//         </div>

//         <TodoList tasks={this.state.tasks} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted} />
//       </div>
//     );
//   }
// }

// export default App;