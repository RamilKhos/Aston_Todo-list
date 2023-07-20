/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-expressions */
/* eslint-disable implicit-arrow-linebreak */
import { Component } from 'react';
import { Button, List } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { CssTextField } from '../../utils/utils';
import Todo from '../Todo/Todo';

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
          isActiv: true,
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
            isActiv: !todo.isActiv,
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
    return (
      <main className="main_inner">
        <div className="main_input">
          <CssTextField
            value={state.nameOfTodo}
            onChange={(e) => this.changeNameOfTodo(e)}
            id="custom-css-outlined-input"
            label="Add todo"
            size="small"
            variant="outlined"
          />
          <Button
            onClick={() => this.addTodo(state.nameOfTodo)}
            variant="contained"
            sx={{ marginLeft: 1, opacity: 0.8 }}
          >
            Add
          </Button>
        </div>

        <div className="main__content">
          <List sx={{ width: '100%', color: '#FCFAF1' }}>
            {state.todos.length > 0 ? (
              state.todos.map((todo) => (
                <Todo
                  todo={todo}
                  key={todo.id}
                  deleteTodo={this.deleteTodo}
                  changeStatusTodo={this.changeStatusTodo}
                  addTodoToArchive={this.addTodoToArchive}
                />
              ))
            ) : (
              <div className="main__no-content">No task...</div>
            )}
          </List>
        </div>
      </main>
    );
  }
}

export default Todos;
