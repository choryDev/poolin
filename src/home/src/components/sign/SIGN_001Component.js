import React from 'react'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import sha256 from 'sha256';
import sendData from "../../assets/utils/sendData";
import {ELW_TOKEN} from "../../assets/utils/KEY";
import queryString from 'query-string';
import classNames from 'classnames';
import {Atag, Input, Typography} from '../unit/index';

class SIGN_001Component extends React.Component {
  constructor(props){
    super(props);
    const parsed = queryString.parse(window.location.search);
    this.state={
        email:'',
        password:'',
        loading:false,
        chkremember:false,
        email_error:false,
        password_error:false,
        key:parsed.key,
        c_email:parsed.email,
        cmpy_id:parsed.cmpy_id,
        alertMessage:'',
    }
    this.handleChange=this.handleChange.bind(this);
    this.doLogin=this.doLogin.bind(this);
}

  handleChange = (e) => {
    const {name,value} = e.target
    this.setState({
      [name]: [value],
      alertMessage:''
    });
  }

  doLogin(){
    if(!this.state.loading){
      this.setState({
        loading: true
      });
      sendData('/api/sign/in', 'post', {}, {
        login_id: this.state.email,
        password: sha256(this.state.password),
        c_email: this.state.c_email,
        key: this.state.key,
        cmpy_id: this.state.cmpy_id
      }, {timeout: 30 * 1000},
      res => {
        sessionStorage.setItem(ELW_TOKEN, res.elw_token)
        window.location.replace('/');
      }, err => {
        this.setState({
          alertMessage:err.message,
          loading: false,
        })
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Atag 
          className={classes.logo}
          href="/home">
          <h1 style={{color: '#2D3135'}}>ASSI</h1>
        </Atag>
        <div>
          <div className={classes.forgetWarp}>
          <Typography
            variant="h3"
            style={{color: '#2D3135'}}
            className={classNames(classes.centerText)}>
                  Well, Hello there!
            </Typography>
              <div className={classes.snsBtnWrap}>
                <Fab className={classes.snsBtn}>
                  <Typography
                   variant="h4"
                   style={{color:'#f12f38',fontWeight:'600'}}>
                     G
                  </Typography>
                </Fab>
                <Fab className={classes.snsBtn}>
                  <Typography
                    variant="h4"
                    style={{color:'#365998',fontWeight:'600'}}>
                     F
                    </Typography>
                </Fab>
              </div>
            <Atag 
              href="/home">
                <Typography
                 variant="h6"
                 style={{marginTop:'30px'}}
                 className={classNames(classes.centerText,classes.subText)}>
                   or user your email account
                </Typography>
            </Atag>
            <Input
              className={classNames(classes.idPwInput)}
              value={this.state.email}
              placeholder="E-mail"
              type="email"
              name="email"
              onChange={e => this.handleChange(e)}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.doLogin()}}}/>
            <Input
              className={classNames(classes.idPwInput,classes.marginTop0)}
              value={this.state.password}
              placeholder="Password"
              type="password"
              name="password"
              onChange={e => this.handleChange(e)}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.doLogin()}}}/>
            <Atag 
              className={classes.alertWrap}
              href="/findpw">
              <Typography
               variant="subtitle2"
               style={{marginBottom:'48px', marginTop: '16px'}}
               className={classNames(classes.centerText,classes.subText)}>
                    FORGOT YOUR PASSWORD
              </Typography>
              <Typography
               variant="caption"
               className={classes.loginAlert}>
                    {this.state.alertMessage}
              </Typography>
            </Atag>
            <div className={classes.buttonWarpL}>
              <Button
               onClick={this.doLogin}>
                <Typography variant="Title" style={{color:"white"}}>
                 Submit
                </Typography>
              </Button>
            </div>
          </div>
          <div className={classes.joinWarp}>
            <Typography 
              variant="h4"
              style={{marginBottom: 0,color: "white",textAlign: "center"}}>
              Don't have an 
            </Typography>
            <Typography
            variant="h4"
            textAlign="center"
            style={{marginBottom: 40,color: "white",textAlign: "center"}}>
            Account?
            </Typography>
              <Atag 
              className={classes.buttonWarpR}
              href="/">
                <Button style={{width:'50%'}}>
                  <Typography variant="Title">
                    Sign up for free
                  </Typography>
                </Button>
                </Atag>
          </div>
        </div>
      </div>
    )
  }
}

export default SIGN_001Component;