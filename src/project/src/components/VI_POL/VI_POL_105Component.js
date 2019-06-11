import React from 'react';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import {List} from 'immutable';
import classNames from 'classnames';
import { Typography } from '../unit/index'

const state = {
  teamNm: '팀명',
  emailArr:new List(['hahaha@naver.com','hoho123@naver.com']),
  inputValue: '',
  inputLeng:0,
  emailCheck: ''
}

class VI_POL_105Component extends React.Component {
  constructor(props){
    super(props);
    this.state=state;
    this.handleChanged=this.handleChanged.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
    this.handlePush=this.handlePush.bind(this);
  }

  handleDelete(i){
    this.setState({
      emailArr: this.state.emailArr.delete(i)
    })
  }
  
  handlePush(){
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    var obj = {};
    if (regExp.test(this.state.inputValue)){
      obj = {
        emailArr: this.state.emailArr.push(this.state.inputValue),
        inputValue: '',
        emailCheck:''
      }
    } else{
      obj = {
        emailCheck: 'email not valid'
      }
    }
    this.setState(obj)
  }

  handleChanged(e){
    const {name, value} = e.target;
    var obj = {};
       obj={
        [name]: value,
        inputLeng: value.length,
        emailCheck:''
      }
    this.setState(obj)
  }

  render() {
    const { classes } = this.props;
    const subText1 = 'Your teammates will get an email that gives them access to this team.'
        return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography
             variant={'h5'}
             fontWeight={2}
             className={classNames(classes.titleText, classes.marginBtm10)}>
               Invite People to {this.state.teamNm}
            </Typography>
            <Divider style={{margin: '10px 0'}}/>
              <Typography
                style={{margin: '8px 0'}}
                variant={'subtitle1'}
                fontWeight={3}>
                Email address
              </Typography>
              <div className={classes.InputChangeBtn}>
                {this.state.emailArr.map((r,i)=>
                  <div className={classes.icbButton} key={i}>
                    <div>
                      <input
                        readOnly
                        value={r}
                        className={classes.icbText}/>
                        <i onClick={()=>this.handleDelete(i)} className="fas fa-times"></i>
                      </div>
                    </div>)}
                <input
                  style={{width: `${170 + this.state.inputLeng>10 ? 170+(this.state.inputLeng-10)*4 : 0 }px`}}
                  name={'inputValue'}
                  onChange={e=>this.handleChanged(e)}
                  onKeyDown={e=>{if(e.keyCode === 13)this.handlePush()}}
                  value={this.state.inputValue}
                  placeholder={'name@company.com, ...'}
                  className={classes.icbInput}/>
              </div>
              <Typography
                style={{lineHeight: '1.2rem',marginTop: '8px'}}
                variant={'caption'}
                fontWeight={2}>
                {subText1}
              </Typography>
              <Typography
                style={{lineHeight: '1.2rem',marginTop: '8px'}}
                variant={'caption'}
                color={'red'}
                fontWeight={2}>
                {this.state.emailCheck}
              </Typography>
              <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '16px'}}>
                <Button
                  className={classNames(classes.stepBtn,classes.stepBtnH24)}>
                  <i
                    style={{marginRight: '8px'}}
                    className="fas fa-envelope"/>
                    Invite
               </Button>
              </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default VI_POL_105Component