import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Buttons } from '../Buttons/Buttons';

export function Todo({
  todo, deleteTodo, changeStatusTodo, addTodoToArchive,
}) {
  return (
    <Accordion
      sx={{
        width: '80%',
        padding: '0 2rem 0 4rem',
        background: 'rgba(197, 169, 163, 0.863)',
        boxShadow: `rgb(155, 134, 129) -5px 5px, 
                    rgba(155, 134, 129, 0.718) -10px 10px, 
                    rgba(155, 134, 129, 0.508) -15px 15px, 
                    rgba(155, 134, 129, 0.304) -20px 20px, 
                    #9b868100 -25px 25px`,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ wordBreak: 'break-all', padding: '0 2rem' }}
      >
        <Buttons
          todo={todo}
          deleteTodo={deleteTodo}
          changeStatusTodo={changeStatusTodo}
          addTodoToArchive={addTodoToArchive}
        />

        <Typography sx={{
          width: '100%',
          display: 'inline-block',
          wordWrap: 'break-word',
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>

    </Accordion>
  );
}
