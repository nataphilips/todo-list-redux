import { fromJS } from 'immutable';

const initialState = fromJS({
  projects: [
    { name: "My Tasks", tasks: ['task 1'] }
  ]
});

export default function(state = initialState, action) {
   switch (action.type) {
     case 'todos/ADD_TASK': {
       return state.updateIn(['projects', '0', 'tasks'], list => list.push(action.payload.taskName));
     }
   }
   return state;
}
