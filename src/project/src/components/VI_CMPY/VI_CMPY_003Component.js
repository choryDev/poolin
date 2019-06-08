import React from 'react'
import Workspace from '../internal/Workspace';
import classNames from 'classnames';
import InputBase from "@material-ui/core/InputBase";
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import {List, Map} from 'immutable';
import Person from '@material-ui/icons/Person';
import CheckCircle from '@material-ui/icons/CheckCircle';
import color from '../../assets/styles/material/com/color'

import { Typography } from '../unit/index'

class VI_CMPY_003Component extends Workspace {
  constructor(props){
    super(props)
    this.state={
      checked: true,
      arr: new List([
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : false, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
        {checked : true, text: '새로 task 확인하시고 마무리하기'},
      ])
    }
    this.handleChanged = this.handleChanged.bind(this);
  }

  handleChanged(e, i, flg){
    const {value, name, checked} = e.target;
    var obj;
    if(flg==='input'){
        obj={ arr: this.state.arr.setIn([i,name],value) }
    }else{
       obj={ arr: this.state.arr.setIn([i,name],checked) }
    }
    this.setState(obj)
  }


  render() {
        const { classes } = this.props;
        const Item = (r,i) =>
          <div className={classes.flex} key={i}>
             <CheckCircle
              className={classes.checkOff}
              style={{margin: '4px 8px 0 0'}}/>
                <div
                style={{justifyContent: 'space-between'}}
                 className={classNames(classes.textWrap003,classes.flex)}>
                 <InputBase
                  onChange={e=>this.handleChanged(e,i,'input')}
                  name='text'
                  className={classes.Input003}
                  value={r.text} />
                  <div>
                    <Checkbox
                      name='checked'
                      onChange={e=>this.handleChanged(e,i)}
                      checked={r.checked}
                      style={{padding: '0', color: color.gray.placeHoldGray}}/>
                    <Person
                    className={classes.checkOff}
                    style={{margin: '8px 8px -8px 0px', width: '1.5rem', height: '1.5rem'}}/>
                </div>
              </div>
          </div>;
    return (
        <div className={classNames(classes.root,classes.full)}>
          <div style={{justifyContent: 'flex-end'}} className={classes.header} >
           <CheckCircle
            className={classes.checkOff}
            style={{margin: '4px 8px 0 0'}}/>
            <Typography
            style={{margin: '4px 8px 0 0'}}
            fontWeight={2}
            variant={'body2'}>
            Imcomplete Tasks
        </Typography>
              <Button
               style={{marginRight: '8px'}} variant="outlined" className={classes.btn003}>
                  <Typography
                  fontWeight={2}
                  variant={'body2'}>
                  Sort
                  </Typography>
              </Button>
              <Button
              variant="outlined" className={classes.btn003}>
                <Typography
                  fontWeight={2}
                  variant={'body2'}>
                  Filter
                </Typography>
              </Button>
          </div>
          <div className={classes.wrap}>
            <div className={classNames(classes.contantWrap,classes.full)}>
              <div className={classNames(classes.contant,classes.full)}>
                <div className={classNames(classes.wrap003)}>
                {this.state.arr.toJS().map((r,i)=>(
                    Item(r,i)
                ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default VI_CMPY_003Component