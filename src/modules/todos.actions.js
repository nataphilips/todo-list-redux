export const addTask = (projectId, taskName) => (
  (dispatch, getState) => {
    dispatch({ type: 'todos/ADD_TASK', payload: {projectId, taskName} })
  }
);
