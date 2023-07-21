import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import PanoramaFishEyeSharpIcon from '@mui/icons-material/PanoramaFishEyeSharp';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import { Button } from '@mui/material';

export function Buttons({
  todo, deleteTodo, changeStatusTodo, addTodoToArchive,
}) {
  const btnsHandler = (e, fn) => {
    e.stopPropagation();
    fn(todo.id);
  };

  return (
    <>
      <Button
        onClick={(e) => btnsHandler(e, addTodoToArchive)}
        sx={{
          minWidth: 0,
          position: 'absolute',
          left: '-3rem',
          top: '15%',
        }}
      >
        {todo.isArchived === true ? (
          <UnarchiveIcon sx={{ color: '#3b3939', margin: 0 }} fontSize="small" />
        ) : (
          <ArchiveIcon sx={{ color: '#828484', margin: 0 }} fontSize="small" />
        )}
      </Button>

      <Button
        onClick={(e) => btnsHandler(e, changeStatusTodo)}
        sx={{
          marginRight: '1rem',
          minWidth: 0,
          position: 'absolute',
          left: '-1rem',
          top: '15%',
        }}
      >
        {todo.isDone === true ? (
          <CheckCircleOutlineSharpIcon sx={{ color: '#549D42' }} fontSize="small" />
        ) : (
          <PanoramaFishEyeSharpIcon sx={{ color: '#8A3F1B', margin: 0 }} fontSize="small" />
        )}
      </Button>

      <Button
        onClick={(e) => btnsHandler(e, deleteTodo)}
        sx={{
          minWidth: 0,
          position: 'absolute',
          right: '-1rem',
          top: '15%',
        }}
      >
        <DeleteIcon sx={{ color: '#F23A29', opacity: 0.6 }} fontSize="small" />
      </Button>
    </>
  );
}
