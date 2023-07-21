/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-expressions */
/* eslint-disable implicit-arrow-linebreak */
import { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Button } from '@mui/material';
import FilterTodos from '../FilterTodos/FilterTodos';
import { CssTextField } from '../../utils/utils';

const checkDataInLS = () => {
  const data = localStorage.getItem('todos');
  return data ? JSON.parse(data) : [];
};

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      nameOfTodo: '',
    };
  }

  addTodo = (title) => {
    if (title.length < 2) return null;
    const { todos } = this.state;
    this.setState((prevState) => ({
      todos: [
        {
          title,
          id: uuidv4(),
          description: '',
          isDone: false,
          isActive: true,
          isArchived: false,
        },
        ...prevState.todos,
      ],
      nameOfTodo: '',
    }));
    return localStorage.setItem('todos', JSON.stringify(todos));
  };

  addTodoToArchive = (id) =>
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isArchived: !todo.isArchived,
          };
        }
        return todo;
      }),
    }));

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  changeStatusTodo = (id) =>
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
            isActive: !todo.isActive,
          };
        }
        return todo;
      }),
    }));

  changeNameOfTodo(e) {
    this.setState({
      nameOfTodo: e.target.value,
    });
  }

  componentDidUpdate(_, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  componentDidMount() {
    const { todos } = this.state;
    const todosFromLS = checkDataInLS();
    todos !== todosFromLS ? this.setState({ todos: [...todosFromLS] }) : null;
  }

  render() {
    const { state } = this;
    const { todos, nameOfTodo } = state;

    return (
      <main className="main_inner">
        <div className="main_input">
          <CssTextField
            value={nameOfTodo}
            onChange={(e) => this.changeNameOfTodo(e)}
            id="custom-css-outlined-input"
            label="Add todo"
            size="small"
            variant="outlined"
          />
          <Button onClick={() => this.addTodo(nameOfTodo)} variant="contained" sx={{ marginLeft: 1, opacity: 0.8 }}>
            Add
          </Button>
        </div>
        <FilterTodos
          todos={todos}
          addTodoToArchive={this.addTodoToArchive}
          deleteTodo={this.deleteTodo}
          changeStatusTodo={this.changeStatusTodo}
        />
      </main>
    );
  }
}

export default Todos;
