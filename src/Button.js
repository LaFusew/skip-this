import { Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogTitle,
  IconButton
} from '@material-ui/core';

import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import React from 'react';

const SafariButton = ({number, reponse}) => {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{padding: 8}}>
      <Button variant='contained' style={{width:120, fontWeight:'bold', color: 'white', background: '#5F6683'}} onClick={handleClickOpen}>
        Solution n°{number}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={`Réponse N°${number}`}
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Pour l'énigme n°${number}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            La ou les bonne(s) réponse(s): <strong>{reponse}</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleClose} >
            <CancelRoundedIcon color='action' />
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SafariButton;