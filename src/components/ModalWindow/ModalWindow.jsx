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
      description: '',
    };
  }

  textFieldHandler = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  btnAddHandler = (e) => {
    const { todo, addDescription, modalHandler } = this.props;
    const { description } = this.state;
    addDescription(todo.id, description);
    modalHandler(e);
  };

  btnClosedHandler = (e) => {
    const { modalHandler } = this.props;
    modalHandler(e);
    this.setState(() => ({
      description: '',
    }));
  };

  render() {
    const { isOpenModal } = this.props;
    const { description } = this.state;

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
            Добавить описание задачи
          </Typography>

          <TextField onChange={(e) => this.textFieldHandler(e)} id="outlined-multiline-static" label="Описание задачи" multiline rows={3} />

          <Button disabled={description === ''} onClick={(e) => this.btnAddHandler(e)} variant="contained" sx={{ marginLeft: 1, opacity: 0.8 }}>Add</Button>

        </Box>
      </Modal>
    );
  }
}
