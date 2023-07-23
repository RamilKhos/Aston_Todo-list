import {
  Box, Button, Modal, TextField, Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Component } from 'react';
import { boxModal, btnClosedModal } from '../../utils/utils';

export default class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.todo.title,
      description: props.todo.description,
    };
  }

  btnClosedHandler = (e) => {
    const { modalHandler, todo } = this.props;
    modalHandler(e);
    this.setState(() => ({
      title: todo.title,
      description: todo.description,
    }));
  };

  titleHandler = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  descriptionHandler = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  btnAddDescriptionHandler = (e) => {
    const {
      todo, addDescription, modalHandler, changeTitle,
    } = this.props;
    const { title, description } = this.state;
    addDescription(todo.id, description);
    changeTitle(todo.id, title);
    modalHandler(e);
  };

  render() {
    const { todo, isOpenModal } = this.props;
    const { title, description } = this.state;

    return (
      <Modal
        open={isOpenModal}
        sx={{ position: 'absolute' }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClick={(e) => e.stopPropagation()}
      >
        <Box sx={boxModal}>
          <Button onClick={(e) => this.btnClosedHandler(e)} sx={btnClosedModal}>
            <CloseIcon sx={{ color: '#3498db', opacity: 0.6 }} fontSize="small" />
          </Button>

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
            Change todos
          </Typography>

          <TextField value={title} onChange={(e) => this.titleHandler(e)} id="outlined-basic" label="Title" variant="outlined" />

          <TextField value={description} onChange={(e) => this.descriptionHandler(e)} id="outlined-multiline-static" label="Description" multiline rows={3} />

          <Button disabled={title === todo.title && description === todo.description} onClick={(e) => this.btnAddDescriptionHandler(e)} variant="contained" sx={{ marginLeft: 1, opacity: 0.8 }}>Change</Button>

        </Box>
      </Modal>
    );
  }
}
