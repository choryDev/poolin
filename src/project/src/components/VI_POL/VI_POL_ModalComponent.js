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

import Step01 from '../../containers/VI_POL/VI_POL_101Container'
import { Typography } from '../unit/index'

const state = {
  step: 0,
  pstTitle: 'New Position',
}

class VI_POL_ModalComponent extends React.Component {
  constructor(props){
    super(props);
    this.state=state;
    this.handleChanged = this.handleChanged.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.step__Component = this.step__Component.bind(this);
  }

  handleChanged(e){
    const {name, value} = e.target;
    this.setState({
      [name] : value
    })
  }

  handleStep(){
    var obj ={
      step: ++this.state.step
    }
    if(this.state.step >4)
      return
   else
    this.setState(obj);
  }

  step__Component(){
    switch(this.state.step){
      case 0 :  return (
         <Step01
          handleHeaderChanged={e=>this.handleChanged(e)}/>
         );
      case 1 :  return (
          <Step01/>
        );
      case 2 :  return (
          <Step01/>
        );
      case 3 :  return (
          <Step01/>
        );
      default:  return (
        <div/>
      );
    }
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
          className={classes.dontTouch}
          key={index}>
          <div style={{position: 'relative'}}>
            {r.Icon}
            {index === 5 ? null : <hr className={classes.hr}/>}
          </div>
            <Typography
              variant={'caption'}
              fontWeight={2}
              className={classes.menuText}>
              {r.name}
            </Typography>
          </ListItem>
        ))}
      </List>;
    return (
        <Dialog
          className={classes.modalRoot}
          onClose={handleModal}
          aria-labelledby="customized-dialog-title"
          open={open}>
            <DialogTitle disableTypography className={classes.title}>
              <Typography color={"#fff"} fontWeight={2} variant="h6">
               {this.state.pstTitle}
              </Typography>
            </DialogTitle>
            <div className={classes.contentWrap}>
              {Menu__Component()}
              <div className={classes.content}>
                <div className={classes.stepWrap}>
                  {this.step__Component()}
                </div>
                <DialogActions className={classes.footer}>
                  <Button
                    onClick={this.handleStep}
                    className={classes.stepBtn}>
                    Save changes
                  </Button>
                </DialogActions>
              </div>
            </div>
        </Dialog>
    )
  }
}

export default VI_POL_ModalComponent