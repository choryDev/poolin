import React from 'react';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import { Input, Typography } from './unit/index'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EntranceModalComponent = ({...state}) => {
  const {handleModal, open, classes, newCardNm, newCardWb, handleChanged, AddCmpy}= state;
  return (
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleModal}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description">
      <MuiDialogTitle disableTypography className={classes.modalTitle}>
        <Typography fontWeight={2} variant="h5">{"Add Company"}</Typography>
          <IconButton aria-label="Close" className={classes.closeButton} onClick={handleModal}>
            <CloseIcon />
          </IconButton>
    </MuiDialogTitle>
        <DialogContent className={classes.modalBody} >
        <Typography
          style={{marginBottom: '30px'}}
          fontWeight={2}
          variant="body2">
          {"Hiring for another company, brand or client? Add it here"}
        </Typography>
        <Typography fontWeight={2} variant="h6">
          {"Name"}
        </Typography>
          <Input
            name='newCardNm'
            value={newCardNm}
            className={classes.modalInput}
            onChange={e=>handleChanged(e)}/>
        <Typography fontWeight={2} variant="h6">
          {"Web site"}
        </Typography>
          <Input 
            name='newCardWb'
            value={newCardWb}
            className={classes.modalInput}
            onChange={e=>handleChanged(e)}/>
        <DialogActions style={{marginTop: '40px'}}>
          <Button 
            onClick={()=>AddCmpy()}>
            <Typography fontWeight={2} variant="body1">
            {"Add New Company"}
           </Typography>
          </Button>
        </DialogActions>
        </DialogContent>
      </Dialog>
  );
};

export default EntranceModalComponent;