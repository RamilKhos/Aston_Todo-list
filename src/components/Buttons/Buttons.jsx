import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import PanoramaFishEyeSharpIcon from '@mui/icons-material/PanoramaFishEyeSharp';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import CommentIcon from '@mui/icons-material/Comment';
import { Button } from '@mui/material';
import ModalWindow from '../ModalWindow/ModalWindow';
import {
  btnChangeStatus, btnDelete, btnChangeTodo, btnToArchive,
} from '../../utils/utils';

export function Buttons({
  todo, deleteTodo, changeStatusTodo,
  addTodoToArchive, addDescription, modalHandler, isOpenModal, changeTitle,
}) {
  const btnsHandler = (e, fn) => {
    e.stopPropagation();
    fn(todo.id);
  };

  return (
    <>
      <Button onClick={(e) => btnsHandler(e, addTodoToArchive)} sx={btnToArchive}>
        {todo.isArchived === true ? (
          <UnarchiveIcon sx={{ color: '#3b3939', margin: 0 }} fontSize="small" />
        ) : (
          <ArchiveIcon sx={{ color: '#828484', margin: 0 }} fontSize="small" />
        )}
      </Button>

      <Button onClick={(e) => btnsHandler(e, changeStatusTodo)} sx={btnChangeStatus}>
        {todo.isDone === true ? (
          <CheckCircleOutlineSharpIcon sx={{ color: '#549D42' }} fontSize="small" />
        ) : (
          <PanoramaFishEyeSharpIcon sx={{ color: '#8A3F1B', margin: 0 }} fontSize="small" />
        )}
      </Button>

      <Button onClick={(e) => modalHandler(e)} sx={btnChangeTodo}>
        <CommentIcon sx={{ color: '#3498db', opacity: 0.6 }} fontSize="small" />
        <ModalWindow
          todo={todo}
          isOpenModal={isOpenModal}
          modalHandler={modalHandler}
          addDescription={addDescription}
          changeTitle={changeTitle}
        />
      </Button>

      <Button onClick={(e) => btnsHandler(e, deleteTodo)} sx={btnDelete}>
        <DeleteIcon sx={{ color: '#F23A29', opacity: 0.6 }} fontSize="small" />
      </Button>
    </>
  );
}
