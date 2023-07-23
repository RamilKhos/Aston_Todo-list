import { Component } from 'react';
import {
  Chip, List, Stack,
} from '@mui/material';
import Todo from '../Todo/Todo';
import { CssTextField } from '../../utils/utils';
import { filterTodos } from '../Debounce/Debounce';

class FilterTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
      search: '',
    };
  }

  tabBtnHandler = (e) => {
    this.setState({ filter: e.target.textContent });
  };

  searchHandler = (e) => {
    this.setState(() => ({
      search: e.target.value,
    }));
  };

  render() {
    const {
      todos, addTodoToArchive, deleteTodo, changeStatusTodo, addDescription, changeTitle,
    } = this.props;
    const { filter, search } = this.state;

    let updateTodos = todos;

    updateTodos = filterTodos(todos, filter);

    updateTodos = updateTodos.filter((todo) => todo.title.includes(search));

    return (
      <div className="main__content">
        <Stack direction="row" spacing={1}>
          <Chip label="All" variant={filter === 'All' ? 'soft' : 'outlined'} onClick={(e) => this.tabBtnHandler(e)} />
          <Chip
            label="Active"
            variant={filter === 'Active' ? 'soft' : 'outlined'}
            onClick={(e) => this.tabBtnHandler(e)}
          />
          <Chip
            label="Completed"
            variant={filter === 'Completed' ? 'soft' : 'outlined'}
            onClick={(e) => this.tabBtnHandler(e)}
          />
          <Chip
            label="Archive"
            variant={filter === 'Archive' ? 'soft' : 'outlined'}
            onClick={(e) => this.tabBtnHandler(e)}
          />
        </Stack>

        <List sx={{
          width: '100%',
          color: '#FCFAF1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <CssTextField
            value={search}
            onChange={(e) => this.searchHandler(e)}
            sx={{ marginBottom: '1rem' }}
            id="custom-css-outlined-input"
            size="small"
            label="Search"
            variant="standard"
          />

          {updateTodos.length > 0 ? (
            updateTodos.map((todo) => (
              <Todo
                todo={todo}
                key={todo.id}
                addTodoToArchive={addTodoToArchive}
                deleteTodo={deleteTodo}
                changeStatusTodo={changeStatusTodo}
                addDescription={addDescription}
                changeTitle={changeTitle}
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
