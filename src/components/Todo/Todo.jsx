import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Component } from 'react';
import { Buttons } from '../Buttons/Buttons';
import { accordion, accordionSummary } from '../../tools/customStylesMuiComponents';
import { ThemesColorContext } from '../ThemesColorContext/ThemesColorContext';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
    };
  }

  modalHandler = (e) => {
    e.stopPropagation();
    this.setState((prevState) => ({
      isOpenModal: !prevState.isOpenModal,
    }));
  };

  render() {
    const {
      todo, deleteTodo, changeStatusTodo, addTodoToArchive, addDescription, changeTitle,
    } = this.props;
    const { isOpenModal } = this.state;
    const { contentBackground } = this.context;

    const stylesAccordion = {
      ...accordion,
      background: contentBackground.background,
    };

    return (
      <Accordion sx={{ ...stylesAccordion }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={accordionSummary}>
          <Buttons
            todo={todo}
            deleteTodo={deleteTodo}
            changeStatusTodo={changeStatusTodo}
            addTodoToArchive={addTodoToArchive}
            addDescription={addDescription}
            modalHandler={this.modalHandler}
            isOpenModal={isOpenModal}
            changeTitle={changeTitle}
          />

          <Typography sx={{
            width: '100%',
            wordWrap: 'break-word',
            marginRight: '1rem',
            color: todo.isDone ? '#549D42' : '#8A3F1B',
            textDecoration: todo.isDone ? 'line-through' : 'none',
          }}
          >
            {todo.title}
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ position: 'relative' }}>
          <Typography sx={{
            color: todo.isDone ? '#549D42' : '#8A3F1B',
            textDecoration: todo.isDone ? 'line-through' : 'none',
          }}
          >
            <span>{todo.description}</span>
          </Typography>
        </AccordionDetails>

      </Accordion>
    );
  }
}
Todo.contextType = ThemesColorContext;
