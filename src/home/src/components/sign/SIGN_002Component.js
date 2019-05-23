import React from 'react'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import sha256 from 'sha256';
import queryString from 'query-string';
import sendData from "../../assets/utils/sendData";
import classNames from 'classnames';
import {validateEmail} from "../../assets/utils/comm";
import {Atag, Input, Typography} from '../unit/index';

class SIGN_002Component extends React.Component {
  constructor(props){
    super(props);
    const parsed = queryString.parse(window.location.search);
    this.state={
      inputArr:[
        {name: 'email',
        placeholder: 'E-mail',
        type: 'email',
        ro:true},
        {name: 'username',
        placeholder: 'UserName',
        type: 'text',
        ro:false},
        {name: 'name',
        placeholder: 'Name',
        type: 'text',
        ro:false},
        {name: 'password',
        placeholder: 'Password',
        type: 'Password',
        ro:false},
        {name: 'confirm_password',
        placeholder: 'Confirm Password',
        type: 'Password',
        ro:false},
      ],
      email: parsed.email !== undefined ? parsed.email.toString().replace(/ /gi, '+') : '',
      key: parsed.key,
      cmpy_id: parsed.c === undefined ? '' : parsed.c,
      name: '',
      password: '',
      username: '',
      confirm_password: '',
      alertMessage: '',
      checkBox:false,
      email_valid: false,
      loading: false
    }
    this.handleChanged = this.handleChanged.bind(this);
    this.handleChangedEmail = this.handleChangedEmail.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  handleChangedEmail(e){
    let flg = validateEmail(e.target.value);
    let obj = {};
    obj[e.target.name] = e.target.value;
    obj['email_valid'] = flg;
    this.setState(obj)
  }

  handleChanged(e,flg){
    let obj = {};
    if(flg==='checkBox'){
      obj={ checkBox: e.target.checked}
    }else{
      obj[e.target.name] = e.target.value;
      if(e.target.value === '') obj[e.target.name + '_is_null'] = true;
      else obj[e.target.name + '_is_null'] = false;
    }
    this.setState(obj)
  }
  signUp(){
    if(!this.chkSignup()) {
      return ;
    }
    if(!this.state.loading) {
      this.setState({
        loading: true
      });
      sendData('/api/sign/up', 'post', {}, {
        email: this.state.email,
        username: this.state.username,
        password: sha256(this.state.password),
        confirm_password: sha256(this.state.confirm_password),
        name: this.state.name,
        key: this.state.key,
        cmpy_id: this.state.cmpy_id
      }, {timeout: 30 * 1000}, res => {
        window.location.replace('/ws');
      }, err => {
        this.setState({
          loading: false
        })
      });
    }
  }

  render() {
    const { classes } = this.props;
    const I_AGREE_TO_THE = ' I AGREE TO THE ';
    const AND = ' AND ';
    const input__Container = (r,i) =>
      <Input
        key={i}
        className={classNames(classes.idPwInput,classes.sign002Input)}
        value={this.state[r.name]}
        placeholder={r.placeholder}
        type={r.type}
        name={r.name}
        onChange={e => this.handleChanged(e)}
        readOnly={r.ro}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            this.doLogin()}}}/>;
    return (
      <div className={classes.root}>
        <Atag 
          className={classes.logo}
          href="/home">
          <h1 style={{color: '#fff'}}>ASSI</h1>
        </Atag>
        <div>
        <div className={classes.joinWarp}>
          <Typography
            variant="h3"
            style={{marginBottom: '24px',color: "white",textAlign: "center"}}>
            Don't have an 
          </Typography>
          <Typography
            variant="h3"
            style={{marginBottom: '40px',color: "white",textAlign: "center"}}>
            Account?
          </Typography>
            <Atag 
            className={classes.buttonWarpR}
            href="/">
              <Button>
                <Typography
                  btnTextWeight
                  variant="subtitle2">
                  Sign up for free
                </Typography>
              </Button>
            </Atag>
          </div>
          <div className={classes.forgetWarp}>
            <Typography
              variant="h3"
              style={{color: '#2D3135'}}
              className={classes.centerText}>
                    Start Your Free Trial
            </Typography>
              <Typography
                 variant="body2"
                 style={{marginTop:'30px',marginBottom: '80px', fontWeight: '400'}}
                 className={classNames(classes.centerText,classes.subText)}>
                   Everyting you need to share your budget with your team, sonner!
                </Typography>
                <form className={classes.form}>
                {this.state.inputArr.map((r,i)=>
                   input__Container(r,i)
                  )}
              </form>
            <div
              style={{ position: 'relative'}}>
                <div 
                  className={classes.agreeTextWrap}>
                  <Checkbox 
                    onChange={e=>this.handleChanged(e,'checkBox')}
                    className={classes.checkBox}
                    color="default"
                    value="check" />
                  <Typography
                    variant="caption"
                    style={{marginTop: '2px', fontWeight: '400'}}
                    className={classNames(classes.centerText)}>
                         {I_AGREE_TO_THE}
                        <Atag 
                          className={classNames(classes.agreeText)}
                          href="/home">PRIVACY POLICY</Atag>
                           {AND}
                        <Atag 
                          className={classNames(classes.agreeText)}
                          href="/home">TERMS AND CONDITIONS</Atag>
                  </Typography>
                </div>
              <Typography
               variant="h6"
               style={{left: '23%'}}
               className={classes.loginAlert}>
                    {this.state.alertMessage}
              </Typography>
            </div>
            <div
              className={classes.button002WarpR}>
              <Button
               style={{width:'35%'}}
               onClick={this.doLogin}>
                <Typography
                  btnTextWeight
                  variant="subtitle2"
                  style={{color:"white"}}>
                Get Started for free
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SIGN_002Component;