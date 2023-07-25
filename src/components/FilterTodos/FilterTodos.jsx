import { Component } from 'react';
import {
  Chip, List, Stack,
} from '@mui/material';
import Todo from '../Todo/Todo';
import { CssTextField, list } from '../../tools/customStylesMuiComponents';
import { filteringTodos, debounce } from '../../tools/utils';

export default class FilterTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateTodos: [],
      filter: 'All',
      search: '',
    };
    this.debounceLog = debounce(this.searchTodos.bind(this), 500);
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.props;
    const { filter, search } = this.state;

    if (todos !== prevProps.todos) {
      this.setState({ updateTodos: filteringTodos(todos, filter) });
    }

    if (filter !== prevState.filter) {
      this.setState(({
        updateTodos: filteringTodos(todos, filter),
        search: '',
      }));
    }

    if (search !== prevState.search) {
      this.debounceLog();
    }
  }

  searchTodos() {
    const { todos } = this.props;
    const { filter, search } = this.state;
    const filteredTodos = filteringTodos(todos, filter);
    const foundTodos = filteredTodos.filter((todo) => todo.title.includes(search));
    this.setState({ updateTodos: foundTodos });
  }

  searchHandler(e) {
    this.setState({ search: e.target.value });
  }

  tabsHandler(e) {
    this.setState({ filter: e.target.textContent });
  }

  render() {
    const {
      addTodoToArchive, deleteTodo, changeStatusTodo, addDescription, changeTitle,
    } = this.props;
    const { filter, search, updateTodos } = this.state;

    return (
      <div className="main__content">
        <Stack direction="row" spacing={1}>
          <Chip label="All" variant={filter === 'All' ? 'soft' : 'outlined'} onClick={(e) => this.tabsHandler(e)} />
          <Chip
            label="Active"
            variant={filter === 'Active' ? 'soft' : 'outlined'}
            onClick={(e) => this.tabsHandler(e)}
          />
          <Chip
            label="Completed"
            variant={filter === 'Completed' ? 'soft' : 'outlined'}
            onClick={(e) => this.tabsHandler(e)}
          />
          <Chip
            label="Archive"
            variant={filter === 'Archive' ? 'soft' : 'outlined'}
            onClick={(e) => this.tabsHandler(e)}
          />
        </Stack>

        <List sx={list}>
          <CssTextField
            value={search}
            onChange={(e) => this.searchHandler(e)}
            sx={{ marginBottom: '1rem' }}
            id="custom-css-outlined-input"
            size="small"
            label="Search"
            variant="standard"
          />

          {(updateTodos !== undefined && updateTodos.length > 0) ? (
            updateTodos.map((todo) => (
              <Todo
                todo={todo}
                key={todo.id}
                props={this.props}
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
