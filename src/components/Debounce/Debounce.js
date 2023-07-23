// import { useEffect, useState } from 'react';

// export const Debounce = (value, ms = 2000) => {
//   const [debounceValue, setDebounceValue] = useState(value);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setDebounceValue(value);
//     }, ms);

//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }, [value]);

//   return debounceValue;
// };

export const filterTodos = (todos, filter) => {
  let updateTodos = todos;
  switch (filter) {
    case 'Archive':
      updateTodos = todos.filter((todo) => todo.isArchived);
      break;
    case 'Active':
      updateTodos = todos.filter((todo) => todo.isActive);
      break;
    case 'Completed':
      updateTodos = todos.filter((todo) => todo.isDone);
      break;
    default:
      return updateTodos;
  }
  return updateTodos;
};
