import React from 'react';
import classNames from 'classnames';
import { Typography, ThreeRadioButton, RequiredButton } from '../unit/index'

const state = {
  pstTitle: '',
  department: '',
  id: '',
  country: '',
  phoneNum: 'optional',
  resumeUpload: 'optional',
  experienceSm: 'optional',
  workHistory: 'optional',
  education: 'optional',
  coverLetter: 'optional',
  expiArr: [{title: 'Resume Upload', value: 'resumeUpload'},
            {title: 'Experience Summary', value: 'experienceSm'},
            {title: 'Work History', value: 'workHistory'},
            {title: 'Education', value: 'education'}],
  emailKey: 'asdfasdfsadfasdfasdfsadfdsf'
}

class VI_POL_102Component extends React.Component {
  constructor(props){
    super(props);
    this.state=state;
  this.handleChanged=this.handleChanged.bind(this);
  }
  
  handleChanged(e){
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {
    const { classes } = this.props;
    const radiobtn__Component = (title,value,idx)=>
      <div className={classes.item102} key={idx}>
        <Typography
          style={{marginTop: 'auto',marginBottom: 'auto'}}
          fontSize={12}
          fontWeight={3}>
          {title}
        </Typography>
        <ThreeRadioButton
          style={{height: '22px'}}
          handleChanged={e=>this.handleChanged(e)}
          name={value}
          value={this.state[value]}/>
      </div>;
    const btn__Component = (title)=>
    <div className={classes.item102}>
      <Typography
        style={{marginTop: 'auto',marginBottom: 'auto'}}
        fontSize={12}
        fontWeight={3}>
        {title}
      </Typography>
      <RequiredButton
        style={{height: '23.99px'}}>
        Required
      </RequiredButton>
    </div>;
    const viaEmailText1 = 'If shared, candidates may apply via email using the follwing email address.'
    const viaEmailText2 = 'The message body will be added as the summary, attached resumes will be embedded and the name/email address will be userd to create the canadidate.'
    return (
      <div className={classes.VI_POL_102}>
        <Typography
          variant={'h5'}
          fontWeight={2}
          className={classes.titleText}>
          Candidate Application
        </Typography>
        <Typography
          variant={'subtitle1'}
          fontWeight={3}
          className={classes.subTitle}>
          Application Form
        </Typography>
        <Typography
          variant={'caption'}
          fontWeight={1}>
          Choose the information collected for candidates applying through your Career or Employee Portals
        </Typography>
        <Typography
          variant={'subtitle1'}
          fontWeight={3}
          className={classNames(classes.marginTop25,classes.marginBtm10)}>
          Personal Information
        </Typography>
        {btn__Component('Name')}
        {btn__Component('Email Address')}
        {radiobtn__Component('Phone Number', 'phoneNum')}
        <Typography
          variant={'subtitle1'}
          fontWeight={3}
          className={classNames(classes.marginTop25,classes.marginBtm10)}>
          Experience
        </Typography>
        {this.state.expiArr.map((r,i)=>
          radiobtn__Component(r.title,r.value,i)
        )}
        <Typography
          variant={'subtitle1'}
          fontWeight={3}
          className={classNames(classes.marginTop25,classes.marginBtm10)}>
          General
        </Typography>
        {radiobtn__Component('Cover Letter', 'coverLetter')}
        <Typography
          variant={'subtitle1'}
          fontWeight={3}
          className={classNames(classes.marginTop25,classes.marginBtm10)}>
          Apply via Email
        </Typography>
        <Typography
          style={{lineHeight: '1.2rem'}}
          variant={'caption'}
          fontWeight={1}>
          {viaEmailText1}
        </Typography>
        <Typography
          style={{lineHeight: '1.2rem'}}
          variant={'caption'}
          fontWeight={1}>
          {viaEmailText2}
        </Typography>
        <input
          className={classNames(classes.marginBtm30,classes.marginTop20,classes.emailInput)}
          value={this.state.emailKey}
          readOnly
          type='text'/>
      </div>
    )
  }
}

export default VI_POL_102Component