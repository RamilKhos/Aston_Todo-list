import {
  Button, Divider, ListItem, ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import PanoramaFishEyeSharpIcon from '@mui/icons-material/PanoramaFishEyeSharp';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';

export function Todo({
  todo, deleteTodo, changeStatusTodo, addTodoToArchive,
}) {
  return (
    <>
      <ListItem disablePadding>
        <Button onClick={() => addTodoToArchive(todo.id)} sx={{ minWidth: 0 }}>
          {todo.isArchived === true ? (
            <UnarchiveIcon sx={{ color: '#3b3939', margin: 0 }} fontSize="small" />
          ) : (
            <ArchiveIcon sx={{ color: '#828484', margin: 0 }} fontSize="small" />
          )}
        </Button>

        <Button onClick={() => changeStatusTodo(todo.id)} sx={{ marginRight: '1rem', minWidth: 0 }}>
          {todo.isDone === true ? (
            <CheckCircleOutlineSharpIcon sx={{ color: '#549D42' }} fontSize="small" />
          ) : (
            <PanoramaFishEyeSharpIcon sx={{ color: '#8A3F1B', margin: 0 }} fontSize="small" />
          )}
        </Button>

        <ListItemText
          primary={todo.title}
          sx={{
            width: '100%',
            display: 'inline-block',
            wordWrap: 'break-word',
            color: todo.isDone ? '#549D42' : '#8A3F1B',
            textDecoration: todo.isDone ? 'line-through' : 'none',
          }}
        />
        <Button onClick={() => deleteTodo(todo.id)} sx={{ minWidth: 0 }}>
          <DeleteIcon sx={{ color: '#F23A29', opacity: 0.6 }} fontSize="small" />
        </Button>
      </ListItem>

      <Divider sx={{ opacity: 0.8, marginBottom: 1.5 }} />
    </>
  );
}
