export const getLoading = state => state.todo.loading;

export const getError = state => state.todo.error;

export const getCards = state => state.todo.list.tasks;

export const getTasksCount = state => state.todo.list.total_task_count;
