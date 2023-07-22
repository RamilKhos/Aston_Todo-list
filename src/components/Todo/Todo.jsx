import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Buttons from '../Buttons/Buttons';
import { accordion, accordionSummary } from '../../utils/utils';

export function Todo({
  todo, deleteTodo, changeStatusTodo, addTodoToArchive, addDescription,
}) {
  return (
    <Accordion sx={accordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={accordionSummary}>
        <Buttons
          todo={todo}
          deleteTodo={deleteTodo}
          changeStatusTodo={changeStatusTodo}
          addTodoToArchive={addTodoToArchive}
          addDescription={addDescription}
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

      <AccordionDetails>
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
