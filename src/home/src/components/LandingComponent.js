import React from 'react';
import Button from '@material-ui/core/Button';
import HeaderConatainer from 'containers/internal/HeaderConatainer';
import sendData from "../assets/utils/sendData";
import classNames from 'classnames';
import {Atag, Input, Typography} from './unit/index';
import loadingbtn from '../assets/images/icons/loadingbtn.svg';

class LandingComponent extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        email: '',
        loading: false,
        checkMessage: '',
        alertMessage: '',
      }
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
  }
  
  handleChange(e){
    const {name,value}= e.target;
    var obj={
      [name]:value,
      checkMessage:'',
      alertMessage:'',};
    this.setState(obj)
  }

  handleSubmit(e) {
    if (!this.state.loading) {
      this.setState({
        loading: true,
      });
         sendData('/api//api/sjoin', 'post', {}, {
           email: this.state.email,
         }, { timeout: 30 * 1000 }, res => {
           this.setState({
             loading: false,
             checkMessage:res.message,
           })
         }, err => {
           this.setState({
             loading: false,
             alertMessage:err.message
           })
         });
     }
  }
  render() {
    const {classes} = this.props;
    const subText1 = 'By signing up, I agree to enLight ';
    const subText2 = ' and ';
    return (
      <div className={classes.root}>
        <HeaderConatainer />
        <div className={classes.divMiddleWrap}>
        <div className={classes.divMiddle}>
          <Typography
            variant="h3"
            className={classNames(classes.seDisplay1,classes.font)}>
            Make your success in Assi which help you
          </Typography>
          <Typography 
            variant="h3"
            className={classNames(classes.seDisplay1,classes.font)}>
            being better than before
          </Typography>
          <Typography className={classes.seDisplay2}>
              It help your company to be successfull, and we want to go up together
          </Typography>
          <div>
            <div>
              <Input
                alert={this.state.alertMessage==='' ? false : true}
                placeholder='E-mail'
                onChange={e => this.handleChange(e)}
                value={this.state.email}
                name="email"
                className={classNames(classes.textField3,classes.font)}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    this.handleSubmit()
                  }
                }} />
              <Button
                  onClick={this.handleSubmit}
                  disabled={this.state.loading}
                  variant="contained"
                  className={classNames(classes.submitButton2,classes.font)}>
                  {this.state.loading ?
                    <img 
                      className='loading-btn'
                      src={loadingbtn}
                      alt=""
                      style={{width:'100%', height:'40px'}} />
                    : 
                    <Typography
                      btnTextWeight
                      style={{color: "#fff"}}
                      variant="subtitle2" >
                      Send
                    </Typography>
                    }
                    </Button>
            </div>
            <p
             className={classNames(classes.sendEmailMsg,classes.font)}
             style={{color: 'green'}}>
             {this.state.checkMessage}
            </p>
            <p 
             className={classNames(classes.sendEmailMsg,classes.font)}
             style={{color: 'red'}}>
             {this.state.alertMessage}
            </p>
          </div>
          <Typography className={classes.seDisplay3}>
              {subText1}
              <Atag
                className={classes.agreeText}
                href={"#"}>
                Privacy Policy </Atag>
               {subText2}
               <Atag
                className={classes.agreeText}
                href={"#"}>
                Teams of service </Atag>.
          </Typography>
          <Typography
            className={classNames(classes.seDisplay4,classes.font)}>
              This page is going to show the description about enLight, as a lending-page.
          </Typography>
          </div>
        </div>
        <div className={classes.footer}>
          <Atag href={"/Sign_001"}>
            <Typography
              variant="h6"
              className={classNames(classes.siteMap,classes.font)}>
              Site map
            </Typography>
          </Atag>
        </div>
      </div>
    )
  }
};

export default LandingComponent;