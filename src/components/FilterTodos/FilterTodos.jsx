import { Component } from 'react';
import { Chip, List, Stack } from '@mui/material';
import { Todo } from '../Todo/Todo';

class FilterTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'Все',
    };
  }

  tabBtnHandler = (e) => {
    this.setState({ filter: e.target.textContent });
  };

  render() {
    const {
      todos, addTodoToArchive, deleteTodo, changeStatusTodo,
    } = this.props;

    const { filter } = this.state;
    let arrTodos = todos;

    switch (filter) {
      case 'Архив':
        arrTodos = todos.filter((todo) => todo.isArchived);
        break;
      case 'Активные':
        arrTodos = todos.filter((todo) => todo.isActive);
        break;
      case 'Выполненные':
        arrTodos = todos.filter((todo) => todo.isDone);
        break;
      default:
        arrTodos = todos;
        break;
    }

    return (
      <div className="main__content">
        <Stack direction="row" spacing={1} sx={{ marginBottom: '1rem' }}>
          <Chip label="Все" variant={filter === 'Все' ? 'soft' : 'outlined'} onClick={(e) => this.tabBtnHandler(e)} />
          <Chip
            label="Активные"
            variant={filter === 'Активные' ? 'soft' : 'outlined'}
            onClick={(e) => this.tabBtnHandler(e)}
          />
          <Chip
            label="Выполненные"
            variant={filter === 'Выполненные' ? 'soft' : 'outlined'}
            onClick={(e) => this.tabBtnHandler(e)}
          />
          <Chip
            label="Архив"
            variant={filter === 'Архив' ? 'soft' : 'outlined'}
            onClick={(e) => this.tabBtnHandler(e)}
          />
        </Stack>

        <List sx={{ width: '100%', color: '#FCFAF1' }}>
          {arrTodos.length > 0 ? (
            arrTodos.map((todo) => (
              <Todo
                todo={todo}
                key={todo.id}
                addTodoToArchive={addTodoToArchive}
                deleteTodo={deleteTodo}
                changeStatusTodo={changeStatusTodo}
              />
            ))
          ) : (
            <div className="main__no-content">No task...</div>
          )}
        </List>
      </div>
    );
  }
}

export default FilterTodos;
