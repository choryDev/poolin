import React from 'react';
import classNames from 'classnames';

import blue from '@material-ui/core/colors/blue';
import {withStyles} from '@material-ui/core/styles';
import css from "../../assets/styles/vi_usr";

import { Input, Typography } from '../unit/index'

const VI_USR_002 = ({ ...state }) => {

  const {
    classes,
    passwd,
    passwdv,
    handleChanged,
  } = state;

  const subText1 = 'A good password is easy to remember but hard to guess.'
 
  return (
    <div>
      <Typography
        variant={'h5'}
        fontWeight={2}
        className={classNames(classes.titleText,classes.marginBtm10)}>
        User Profile
      </Typography>
      <Typography
        style={{lineHeight: '1.2rem'}}
        className={classes.marginBtm20}
        variant={'caption'}
        fontWeight={2}>
        {subText1}
      </Typography>
      <Input 
        style={{display: 'block'}}
        autoComplete={'off'}
        placeholder='Password'
        type={'password'}
        value={passwd}
        onChange={e=>handleChanged(e)}
        name={'step002_Passwd'}
        className={classNames(classes.marginBtm10)}
        shape={'sm'} 
        color={blue}/>
      <Input 
        style={{display: 'block'}}
        autoComplete={'off'}
        placeholder='Verify password'
        type={'password'}
        value={passwdv}
        onChange={e=>handleChanged(e)}
        name={'step002_PasswdV'}
        className={classNames(classes.marginBtm10)}
        shape={'sm'} 
        color={blue}/>
    </div>
  );
};
 
const VI_USR_002Component = withStyles(css, { withTheme: true })(VI_USR_002)

export default VI_USR_002Component