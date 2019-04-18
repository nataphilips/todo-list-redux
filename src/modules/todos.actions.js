export const addTask = (projectId, taskName) => (
  (dispatch, getState) => {
    dispatch({ type: 'todos/ADD_TASK', payload: {projectId, taskName} })
  }
);

export const addProject = () => (
  (dispatch, getState) => {
    dispatch({ type: 'todos/ADD_PROJECT', payload: {} })
  }
);
