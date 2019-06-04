import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import People from '@material-ui/icons/People';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import ThumbUp from '@material-ui/icons/ThumbUp';
import CardTravel from '@material-ui/icons/CardTravel';
import Speaker from '@material-ui/icons/Speaker';
import classNames from 'classnames';
import color from '../../assets/styles/material/com/color'

import { PositionCard, Typography, TaskCard, CandidateCard, HistoryCard } from '../unit/index'

const state = {
  step: 0,
}

class VI_POL_ModalComponent extends React.Component {
  constructor(props){
    super(props);
    this.state=state;
  }

  render() {
    const { classes ,handleModal, open} = this.props;
    const MenuArr =  [
      {name: 'Ditails' ,
       Icon:<CardTravel 
       className={classNames( classes.menuIcon,
        this.state.step === 0 ? classes.onColor : classes.offColor)}/>},
      {name: 'Calender' ,
       Icon:<FormatListBulleted 
       className={classNames( classes.menuIcon,
        this.state.step === 1 ? classes.onColor : classes.offColor)}/>},
      {name: 'My Tasks' ,
       Icon:<FormatListBulleted 
       className={classNames( classes.menuIcon,
        this.state.step === 2 ? classes.onColor : classes.offColor)}/>},
      {name: 'Inbox' ,
       Icon:<ThumbUp 
       className={classNames( classes.menuIcon,
        this.state.step === 3 ? classes.onColor : classes.offColor)}/>},
      {name: 'Reports' ,
       Icon:<Speaker 
       className={classNames( classes.menuIcon,
        this.state.step === 4 ? classes.onColor : classes.offColor)}/>},
      {name: 'Reports' ,
       Icon:<People 
       className={classNames( classes.menuIcon,
        this.state.step === 5 ? classes.onColor : classes.offColor)}/>},
    ];
    const Menu__Component = ()=>
      <List className={classes.menu}>
      {MenuArr.map((r, index) => (
        <ListItem 
           key={index}
          button >
          <div style={{position: 'relative'}}>
            {r.Icon}
            <hr className={classes.hr}/>
          </div>
            <Typography
              variant={'caption'}
              fontWeight={2}
              className={classes.menuText}
              color={this.state.step === index ? color.green.onGreen : color.gray.weakGray}>
              {r.name}
            </Typography>
          </ListItem>
        ))}
      </List>;
    return (
        <Dialog
          className={classes.root}
          onClose={handleModal}
          aria-labelledby="customized-dialog-title"
          open={open}>
            <DialogTitle disableTypography className={classes.title}>
              <Typography color={"#fff"} fontWeight={2} variant="h6">New Position</Typography>
            </DialogTitle>
            {Menu__Component()}
            <div></div>
          <DialogActions>
            <Button onClick={()=>console.log(this.state.step)} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
    )
  }
}

export default VI_POL_ModalComponent