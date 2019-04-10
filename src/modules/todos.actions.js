export const addTask = (taskName) => (
  (dispatch, getState) => {
    dispatch({ type: 'todos/ADD_TASK', payload: {taskName} })
  }
);
