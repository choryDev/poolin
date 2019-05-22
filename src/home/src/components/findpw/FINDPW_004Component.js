import React from 'react'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import sha256 from 'sha256';
import queryString from 'query-string';
//import {ELW_TOKEN} from "../utils/KEY";
import classNames from 'classnames';
import {Atag, Input, Typography} from '../unit/index';

class FINDPW_004Component extends React.Component {
  constructor(props){
    super(props);
    const parsed = queryString.parse(window.location.search);
    this.state={
        username:'username',
        confirmPassword:'',
        password:'',
        loading:false,
        
        alertMessage:'d',
    }
    this.handleChange=this.handleChange.bind(this);
    this.doSubmit=this.doSubmit.bind(this);
}

  handleChange = (e) => {
    const {name,value} = e.target
    this.setState({
      [name]: [value],
      alertMessage:''
    });
  }

  doSubmit(){
    if(!this.state.loading){
      this.setState({
        loading: true
      });
      // sendData('/api/sign/in', 'post', {}, {
      //   login_id: this.state.email,
      //   password: sha256(this.state.password),
      //   confirmPassword: sha256(this.state.confirmPassword),
      //   key: this.state.key,
      //   cmpy_id: this.state.cmpy_id
      // }, {timeout: 30 * 1000},
      // res => {
      //   sessionStorage.setItem(ELW_TOKEN, res.elw_token)
      //   window.location.replace('/');
      // }, err => {
      //   this.setState({
      //     alertMessage:err.message,
      //     loading: false,
      //   })
      // });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{background:'#fff'}}
        className={classes.root}>
        <Atag 
          className={classes.logo}
          href="/">
          <h1 style={{color: '#2D3135'}}>ASSI</h1>
        </Atag>
        <div>
          <div
            className={classNames(classes.forgetWarp,classes.findPWWrap)}>
          <Typography
            variant="h3"
            style={{color: '#2D3135'}}>
                 Hello, {this.state.username}
            </Typography>
                <Typography
                 variant="body2"
                 style={{ 
                    marginTop: '16px',
                    marginBottom: '24px'}}
                 className={classes.subText}>
                   We will help you to change the new password. 
                </Typography>
            <Input
              style={{marginBottom:'0px'}}
              value={this.state.password}
              placeholder="New password"
              type="password"
              name="password"
              onChange={e => this.handleChange(e)}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.doSubmit()}}}/>
            <Input
              style={{marginTop:'10px'}}
              value={this.state.confirmPassword}
              placeholder="Confirm password"
              type="password"
              name="confirmPassword"
              onChange={e => this.handleChange(e)}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.doSubmit()}}}/>
                <div style={{
                  position: 'relative',
                  marginBottom:'6px', marginTop: '10px'}}>
                  <Typography
                   variant="body2"
                   style={{
                      top: '-12px',
                      left: '1px',
                      color: 'red',
                      position: 'absolute'}}>
                        {this.state.alertMessage}
                  </Typography>
              </div>
            <div className={classes.buttonWarpL}>
              <Button
               onClick={this.doSubmit}>
                <Typography variant="Title" style={{color:"white"}}>
                 Submit
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FINDPW_004Component;