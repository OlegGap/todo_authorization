export const getLoadingCards = state => state.todo.loading;

export const getErrorCards = state => state.todo.error;

export const getCards = state => state.todo.list.tasks;

export const getTasksCount = state => state.todo.list.total_task_count;
