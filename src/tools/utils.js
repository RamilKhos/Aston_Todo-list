export const checkDataInLS = () => {
  const data = localStorage.getItem('todos');
  return data ? JSON.parse(data) : [];
};

export const filteringTodos = (todos, filter) => {
  switch (filter) {
    case 'Archive':
      return todos.filter((todo) => todo.isArchived);
    case 'Active':
      return todos.filter((todo) => todo.isActive);
    case 'Completed':
      return todos.filter((todo) => todo.isDone);
    default:
      return todos;
  }
};

export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
