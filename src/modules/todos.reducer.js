import { fromJS } from 'immutable';
import uuidv4 from 'uuid/v4';

const initialState = fromJS({
  projects: [
    { id: uuidv4(), name: "My Tasks", tasks: [{id: uuidv4(), name: "Task 1", checked: false}] }
  ]
});

export default function(state = initialState, action) {
   switch (action.type) {
     case 'todos/ADD_TASK': {
       const projects = state.get('projects');
       const index = projects.findIndex(i => i.get('id') === action.payload.projectId);
       const task = fromJS({id: uuidv4(), name: action.payload.taskName});
       return state.updateIn(['projects', index, 'tasks'], list => list.push(task));
     }
     case 'todos/ADD_PROJECT': {
       const project = fromJS({ id: uuidv4(), name: "New Project", tasks: [] });
       return state.updateIn(['projects'], list => list.push(project));
     }
     case 'todos/CROSS_TASK': {
       const projects = state.get('projects');
       const projectIndex = projects.findIndex(i => i.get('id') == action.payload.projectId);
       const tasks = state.getIn(['projects', projectIndex, 'tasks']);
       const taskIndex = tasks.findIndex(i => i.get('id') === action.payload.taskId);
       return state.setIn(['projects', projectIndex, 'tasks', taskIndex, 'checked'], true);
     }
   }
   return state;
}
