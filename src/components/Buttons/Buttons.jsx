import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import PanoramaFishEyeSharpIcon from '@mui/icons-material/PanoramaFishEyeSharp';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import CommentIcon from '@mui/icons-material/Comment';
import { Button } from '@mui/material';
import { Component } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import {
  btnChangeStatus, btnDelete, btnOpenModal, btnToArchive,
} from '../../utils/utils';

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
    };
  }

  btnsHandler = (e, fn) => {
    const { todo } = this.props;
    e.stopPropagation();
    fn(todo.id);
  };

  modalHandler = (e) => {
    e.stopPropagation();
    this.setState((prevState) => ({
      isOpenModal: !prevState.isOpenModal,
    }));
  };

  render() {
    const {
      todo, deleteTodo, changeStatusTodo, addTodoToArchive, addDescription,
    } = this.props;

    const { isOpenModal } = this.state;

    return (
      <>
        <Button onClick={(e) => this.btnsHandler(e, addTodoToArchive)} sx={btnToArchive}>
          {todo.isArchived === true ? (
            <UnarchiveIcon sx={{ color: '#3b3939', margin: 0 }} fontSize="small" />
          ) : (
            <ArchiveIcon sx={{ color: '#828484', margin: 0 }} fontSize="small" />
          )}
        </Button>

        <Button onClick={(e) => this.btnsHandler(e, changeStatusTodo)} sx={btnChangeStatus}>
          {todo.isDone === true ? (
            <CheckCircleOutlineSharpIcon sx={{ color: '#549D42' }} fontSize="small" />
          ) : (
            <PanoramaFishEyeSharpIcon sx={{ color: '#8A3F1B', margin: 0 }} fontSize="small" />
          )}
        </Button>

        <Button onClick={(e) => this.modalHandler(e)} sx={btnOpenModal}>
          <CommentIcon sx={{ color: '#3498db', opacity: 0.6 }} fontSize="small" />
          <ModalWindow
            todo={todo}
            isOpenModal={isOpenModal}
            modalHandler={this.modalHandler}
            addDescription={addDescription}
          />
        </Button>

        <Button onClick={(e) => this.btnsHandler(e, deleteTodo)} sx={btnDelete}>
          <DeleteIcon sx={{ color: '#F23A29', opacity: 0.6 }} fontSize="small" />
        </Button>
      </>
    );
  }
}
