import React from 'react'
import Button from '@material-ui/core/Button';
import { email } from "../../assets/utils/comm";
import sendData from "../../assets/utils/sendData";
import classNames from 'classnames';
import {Atag, Input, Typography} from '../unit/index';

class SIGN_003Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 1,
      email: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.setStatusType = this.setStatusType.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
      status: 0,
    });
  }

  handleSend = () => {
    if (!email(this.state.email)) {
      this.setStatusType(3);
    } else {
      this.setStatusType(1);
    }
    sendData(`/api/request/reset_password`, 'POST', {}, {
      email: this.state.email
    },
      {timeout: 30 * 1000},
      res => {
        this.setStatusType(1);
      }, err => {
      });
  }

  setStatusType(value) {
    // 메일 보내기 성공 시 1, 실패 시 2
    this.setState({
      status: value,
    });
  }

  render() {
    const { classes } = this.props;

    const statusMsg = () => {
      switch (this.state.status) {
        case 1:
          return <Typography variant="body2" className={classes.helpType1}>성공적으로 이메일을 발송하였습니다. :)</Typography>
        case 2:
          return <Typography variant="body2" className={classes.helpType2}>이메일정보는 확인하셨나요?ㅜㅡㅜ</Typography>
        case 3:
          return <Typography variant="body2" className={classes.helpType2}>이메일 형식이 올바르지 않습니다.</Typography>
        default:
          return <p></p>
      }
    }

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
            className={classes.centerText}>
              Forgot your password?
            </Typography>
            <Typography
             variant="body2"
             style={{marginTop: '32px',marginBottom: '24px'}}
             className={classNames(classes.centerText,classes.subText)}>
              No problem, It happens to the best of us. ☺️
            </Typography>
            <Input
              style={{width: '80%'}}
              className={classes.idPwInput}
              value={this.state.email}
              placeholder="E-mail"
              type="email"
              name="email"
              onChange={e => this.handleChange(e)}/>
              <div className={classes.idPwInput}>
                {statusMsg()}
              </div>
            <div className={classes.buttonWarpL} style={{marginTop: '10px'}}>
              <Button 
                onClick={()=>this.handleSend()} >
                <Typography variant="Title" style={{color:"white"}}>
                 Submit
                </Typography>
              </Button>
            </div>
          </div>
          <div className={classes.joinWarp}>
            <Typography 
              variant="h3"
              style={{marginBottom: '24px',color: "white",textAlign: "center"}}>
              Don't have an 
            </Typography>
            <Typography
            variant="h3"
            textAlign="center"
            style={{marginBottom: '40px',color: "white",textAlign: "center"}}>
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

export default SIGN_003Component;