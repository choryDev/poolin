import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Person from '@material-ui/icons/Person';
import Edit from '@material-ui/icons/Edit';
import VpnKey from '@material-ui/icons/VpnKey';
import Notifications from '@material-ui/icons/Notifications';
import classNames from 'classnames';

import Step01 from './VI_USR_001Component'
import Step02 from './VI_USR_002Component'
import Step04 from '../../containers/VI_POL/VI_POL_104Container'
import Step05 from '../../containers/VI_POL/VI_POL_105Container'
import { Typography } from '../unit/index'

const state = {
  step: 0,
  step001_Input: '',
  step002_Passwd: '',
  step002_PasswdV: '',
}

class VI_USR_ModalComponent extends React.Component {
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
          input={this.state.step001_Input}
          handleChanged={e=>this.handleChanged(e)}/>
         );
      case 1 :  return (
        <Step02
        passwd={this.state.step002_Passwd}
        passwdv={this.state.step002_PasswdV}
        handleChanged={e=>this.handleChanged(e)}/>
       );
      case 2 :  return (
          <Step04/>
        );
      case 3 :  return (
          <Step04/>
        );
      case 4 :  return (
          <Step05/>
        );
      default:  return (
        <div/>
      );
    }
  }

  render() {
    const { classes ,handleModal, open} = this.props;
    const MenuArr =  [
      {name: 'Profile' ,
       Icon:<Person
       className={classNames( classes.menuIcon,
        this.state.step === 0 ? classes.onColor : classes.offColor)}/>},
      {name: 'Password' ,
       Icon:<VpnKey 
       className={classNames( classes.menuIcon,
        this.state.step === 1 ? classes.onColor : classes.offColor)}/>},
      {name: 'Notifications' ,
       Icon:<Notifications 
       className={classNames( classes.menuIcon,
        this.state.step === 2 ? classes.onColor : classes.offColor)}/>},
      {name: 'Signature' ,
       Icon:<Edit 
       className={classNames( classes.menuIcon,
        this.state.step === 3 ? classes.onColor : classes.offColor)}/>},
    ];
    const Menu__Component = ()=>
      <List className={classes.menu}>
      {MenuArr.map((r, index) => (
        <ListItem 
          onClick={()=>this.setState({step: index})}
          style={{cursor: 'pointer'}}
          key={index}>
          <div style={{position: 'relative'}}>
            {r.Icon}           
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
               Use Settings
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
                    <i
                    style={{marginRight: '8px'}}
                    className="fas fa-save"/>
                    Save changes
                  </Button>
                </DialogActions>
              </div>
            </div>
        </Dialog>
    )
  }
}

export default VI_USR_ModalComponent