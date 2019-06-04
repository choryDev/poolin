import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import List from '@material-ui/core/List';

import People from '@material-ui/icons/People';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import ThumbUp from '@material-ui/icons/ThumbUp';
import CardTravel from '@material-ui/icons/CardTravel';
import Speaker from '@material-ui/icons/Speaker';
import classNames from 'classnames';
import color from '../../assets/styles/material/com/color'
import blue from '@material-ui/core/colors/blue';
import { Input, Typography, Autocomplete, Checkbox } from '../unit/index'

import { countrys } from './dump'

const state = {
  pstTitle: '',
  department: '',
  id: '',
  country: '',
  checkBox: false,
}

class VI_POL_101Component extends React.Component {
  constructor(props){
    super(props);
    this.state=state;
    this.handleChanged=this.handleChanged.bind(this);
    this.handleautocomplete=this.handleautocomplete.bind(this);
  }

  handleChanged(e,flg){
    var obj;
    const {name, value, checked} = e.target;
    if(flg==='checkbox'){
      obj={[name]: checked};
    }else{
      obj={[name]: value};
    }
    this.setState(obj);
  }

  handleautocomplete(name,value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { classes ,handleModal, open} = this.props;
    return (
      <div className={classes.VI_POL_101}>
        <Typography
          variant={'h5'}
          fontWeight={2}
          onClick={console.log(this.state.country)}
          className={classes.titleText}>
          Position Details
        </Typography>
        <Input 
          autoComplete={'off'}
          placeholder='Position Title *'
          value={this.state.pstTitle}
          onChange={e=>{this.handleChanged(e);this.props.handleHeaderChanged(e)}}
          name={'pstTitle'}
          className={classNames(classes.marginBtm10,classes.titleInput)}
          type={'sm'} 
          color={blue}/>
        <div>
          <Input 
            placeholder='Department'
            value={this.state.department}
            onChange={e=>this.handleChanged(e)}
            name={'department'}
            className={classes.subInput} 
            type={'sm'} 
            color={blue}/>
          <Input 
            placeholder='Internal ID'
            value={this.state.id}
            onChange={e=>this.handleChanged(e)}
            name={'id'}
            className={classes.subInput} 
            type={'sm'} 
            color={blue}/>
        </div>
        <Typography
          variant={'subtitle1'}
          fontWeight={3}
          className={classes.subTitle}>
          Location
        </Typography>
        <Autocomplete
          placeholder='Country *'
          keywordValue='value'
          keywordView='name'
          array={countrys}
          valueName='country'
          handleautocomplete={(name, value) =>
          this.handleautocomplete(name, value)}
          style={{marginBottom: '10px'}}/>
          <div style={{display: 'flex'}}>
            <input
              type='checkbox'
              name='checkBox'
              checked={this.state.checkBox}
              className={classes.checkBox}
              onChange={e=>this.handleChanged(e,'checkbox')}/>
            <Typography
              style={{marginTop: 'auto'}}
              variant={'caption'}
              fontWeight={1}>
              Remote / Telecommute
            </Typography>
          </div>
        <Typography
          variant={'subtitle1'}
          fontWeight={3}
          className={classes.subTitle}>
          Details
        </Typography>
        <div style={{display: 'flex',marginBottom: '10px'}}>
          <Autocomplete
            placeholder='Country *'
            keywordValue='value'
            keywordView='name'
            array={countrys}
            valueName='country'
            handleautocomplete={(name, value) =>
            this.handleautocomplete(name, value)}
            style={{marginRight: '10px'}}/>
          <Autocomplete
            placeholder='Country *'
            keywordValue='value'
            keywordView='name'
            array={countrys}
            valueName='country'
            handleautocomplete={(name, value) =>
            this.handleautocomplete(name, value)}/>
        </div>
        <div style={{display: 'flex',marginBottom: '10px'}}>
          <Autocomplete
            placeholder='Country *'
            keywordValue='value'
            keywordView='name'
            array={countrys}
            valueName='country'
            handleautocomplete={(name, value) =>
            this.handleautocomplete(name, value)}
            style={{marginRight: '10px'}}/>
          <Autocomplete
            placeholder='Country *'
            keywordValue='value'
            keywordView='name'
            array={countrys}
            valueName='country'
            handleautocomplete={(name, value) =>
            this.handleautocomplete(name, value)}/>
        </div>
      </div>
    )
  }
}

export default VI_POL_101Component