import { fromJS } from 'immutable';

const initialState = fromJS({
  list: [],
});

export default function(state = initialState, action) {
   switch (action.type) {
     case 'todos/ADD_TASK': {
       return state.update('list', list => list.push(action.payload.taskName));
     }
   }
   return state;
}
