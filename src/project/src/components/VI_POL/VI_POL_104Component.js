import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Divider from '@material-ui/core/Divider';

import {List, Map} from 'immutable';
import CropSquare from '@material-ui/icons/CropSquareRounded';
import classNames from 'classnames';
import color from '../../assets/styles/material/com/color'
import { Typography, Autocomplete2, Input, BgNoneBtn } from '../unit/index'

import { countries } from './dump'

const state = {
  lang: '',
  open: false,
  scoreCaedNm:'',
  scoreCard: List([
    Map ({
      secNn: 'kaka',
      list: List([ {option : 'dd1'},{option : 'dd1'},{option : 'dd1'}])
      }),
      Map ({
      secNn: 'gogo',
      list: List([ {option : 'dd1'},{option : 'dd1'},{option : 'dd1'}])
    }),
    Map ({
      secNn: 'hoho',
      list: List([ {option : 'dd1'},{option : 'dd1'},{option : 'dd1'}])
    })
  ])
}

class VI_POL_104Component extends React.Component {

  constructor(props){
    super(props);
    this.state=state;
    this.handleautocomplete=this.handleautocomplete.bind(this);
    this.handleModal=this.handleModal.bind(this);
    this.handleAdd=this.handleAdd.bind(this);
    this.handleChanged=this.handleChanged.bind(this);
  }

  handleautocomplete(name,value) {
    this.setState({
      [name]: value,
    });
  }
  
  handleModal(){
    this.setState({
      open: !this.state.open
    })
  }

  handleAdd(flg,key){
    var obj;
    if(flg==='sec'){
      obj=this.state.scoreCard.push(Map({
        secNn: '',
        list: List([])
      }))
    }else if(flg==='item'){
      obj=this.state.scoreCard.updateIn([key, 'list'],
      list => list.push(new Map({
         option:''
       })))
     }
    this.setState({scoreCard: obj})
  }

  handleChanged(e,flg,key,subidx){
    const {name, value} = e.target
    var obj={};
    if(flg==='sec'){
      obj={scoreCard: this.state.scoreCard.setIn([key,name],value)}
      console.log('lllllllllllllllllllll')
      console.log(value);
      console.log(name);
      console.log(key);
      console.log(subidx);
      console.log(
        this.state.scoreCard.getIn([key,name])
      )
    }else if(flg==='item'){
      obj={scoreCard: this.state.scoreCard.updateIn([key, 'list'],
      list => list.setIn([subidx,name],value))}
     }else{
      obj={[name]: value}
     }
    this.setState(obj)
  }

  render() {
    const { classes } = this.props;
    const section__Component = (data,idx) =>
  <div className={classNames(classes.marginBtm10)} key={idx}>
    <Typography
      variant={'subtitle1'}
      fontWeight={3}>
      Section {idx+1}
    </Typography>
    <Input
      onChange={e=>this.handleChanged(e, 'sec',idx)}
      value={data.secNn}
      name='secNm'
      shape={'sm'}
      className={classNames(classes.fullWidth,classes.marginBtm10)}/>
       {data.list.map((r,i)=>
      <div key={i}>
          <CropSquare className={classes.rectIcon}/>
          <Input 
            onChange={e=>this.handleChanged(e, 'sec',idx,i)}
            value={r.option}
            name='option'
            shape={'sm'}
            className={classNames(classes.marginBtm10)} 
            style={{width: '400px'}}/>
        </div>
        )}
        <BgNoneBtn
        onClick={()=>this.handleAdd('item', idx)}
          color={color.skyBlue.default}
          hoverColor={color.skyBlue.hover}>
        <i
          style={{marginRight: '8px'}}
          className="fas fa-plus"/>
          Add Item
        </BgNoneBtn> 
    </div>;

    const subModal =()=>
      <Dialog
      open={this.state.open}
      onClose={this.handleModal}
      className={classNames(classes.subModal)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title"
        className={classNames(classes.subModalTitle)}>
        Application Form
      </DialogTitle>
      <DialogContent className={classes.subContent}>
        <Input
          name='scoreCaedNm'
          value={this.state.scoreCaedNm}
          onChange={e=>this.handleChanged(e)}
          shape={'sm'} className={classNames(classes.fullWidth,classes.marginTop10)}/>
        <Divider style={{margin: '10px 0'}}/>
          <div>
            {this.state.scoreCard.toJS().map((r,i)=>
              section__Component(r,i)
            )}
            <Button
              onClick={()=>this.handleAdd('sec')}
              className={classNames(classes.stepBtn,classes.stepBtnH24,classes.marginBtm30)}>
              <i
                style={{marginRight: '8px'}}
                className="fas fa-plus"/>
                Add Section
            </Button> 
          </div>
      </DialogContent>
      <DialogActions>
      <Button
        onClick={this.handleStep}
        className={classes.stepBtn}>
        <i
        style={{marginRight: '8px'}}
        className="fas fa-save"/>
        Save changes
      </Button>
      </DialogActions>
    </Dialog>;

    const subText1 = 'Scorecards define custom criteria your Hiring Team will use to evaluate candidates.'
        return (
      <div className={classes.VI_POL_102}>
        <div className={classes.marginBtm20}>
        <Typography
          variant={'h5'}
          fontWeight={2}
          className={classNames(classes.titleText, classes.marginBtm10)}>
          Position Scorecard
        </Typography>
        <Typography
          style={{display: 'inline-block',marginRight: '8px'}}
          variant={'body2'}
          fontWeight={2}>
          {subText1}
        </Typography>
        <Typography
            style={{cursor: 'pointer',display: 'inline-block'}}
            color={color.skyBlue.default}
            variant={'body2'}
            fontWeight={2}>
            learn
          </Typography>
        </div>
        <div>
         <Typography
           variant={'subtitle1'}
           fontWeight={3}
           className={classes.subTitle}>
           Application Form
         </Typography>
         <Typography
            className={classes.marginBtm10}
            variant={'body2'}
            fontWeight={2}>
            Choose which Scorecard to use with this position
          </Typography>
         <Autocomplete2
            placeholder='언어'
            keywordValue='value'
            keywordView='name'
            array={countries}
            valueName='lang'
            handleautocomplete={(name, value) =>
            this.handleautocomplete(name, value)}
            className={classes.marginBtm10}/>
            <Button
              onClick={this.handleModal}
              className={classNames(classes.stepBtn,classes.stepBtnH24)}>
              <i
                style={{marginRight: '8px'}}
                className="fas fa-plus"/>
                Add Scorecard
            </Button>
        </div>
        {subModal()}
      </div>
    )
  }
}

export default VI_POL_104Component