import { fromJS } from 'immutable';
import uuidv4 from 'uuid/v4';

const initialState = fromJS({
  projects: [
    { id: uuidv4(), name: "My Tasks", tasks: ['Task 1'] }
  ]
});

export default function(state = initialState, action) {
   switch (action.type) {
     case 'todos/ADD_TASK': {
       var projects = state.get('projects');
       var index = projects.findIndex(i => i.id === action.payload.projectId);
       return state.updateIn(['projects', index, 'tasks'], list => list.push(action.payload.taskName));
     }
   }
   return state;
}
