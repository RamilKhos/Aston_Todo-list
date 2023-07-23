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

  componentDidMount() {
    const { todos } = this.state;
    const todosFromLS = checkDataInLS();
    return todos !== todosFromLS ? this.setState({ todos: [...todosFromLS] }) : null;
  }

  componentDidUpdate(_, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  addTodo = (title) => {
    if (title.length < 2) return null;
    return this.setState((prevState) => ({
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
  };

  addDescription = (id, description) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) return { ...todo, description };
        return todo;
      }),
    }));
  };

  addTodoToArchive = (id) => this.setState((prevState) => ({
    todos: prevState.todos.map((todo) => {
      if (todo.id === id) return { ...todo, isArchived: !todo.isArchived };
      return todo;
    }),
  }));

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  changeStatusTodo = (id) => this.setState((prevState) => ({
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

  changeTitle = (id, title) => this.setState((prevState) => ({
    todos: prevState.todos.map((todo) => {
      if (todo.id === id) { return { ...todo, title }; }
      return todo;
    }),
  }));

  changeNameOfTodo(e) {
    this.setState({ nameOfTodo: e.target.value });
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
          addDescription={this.addDescription}
          changeTitle={this.changeTitle}
        />
      </main>
    );
  }
}

export default Todos;
