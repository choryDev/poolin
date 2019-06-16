import React from 'react';
import classNames from 'classnames';
import color from '../../assets/styles/material/com/color'

import blue from '@material-ui/core/colors/blue';
import {withStyles} from '@material-ui/core/styles';
import css from "../../assets/styles/vi_usr";

import { Input, Typography, BgNoneBtn } from '../unit/index'

const VI_USR_001 = ({ ...state }) => {

  const {
    classes,
    input,
    handleChanged,
  } = state;

  const subText1 = 'A good user profile will help you better communicate with your team and candidates.'
 
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
        style={{width: '400px'}}
        autoComplete={'off'}
        placeholder='User Name'
        value={input}
        onChange={e=>handleChanged(e)}
        name={'step001_Input'}
        className={classNames(classes.marginBtm10)}
        shape={'sm'} 
        color={blue}/>
      <BgNoneBtn
        className={classes.addItemBtn}
        color={color.skyBlue.default}
        hoverColor={color.skyBlue.hover}>
        <i
          style={{marginRight: '8px'}}
          className="fas fa-plus"/>
           Upload Profile Photo
        </BgNoneBtn> 
    </div>
  );
};
 
const VI_USR_001Component = withStyles(css, { withTheme: true })(VI_USR_001)

export default VI_USR_001Component