import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import People from '@material-ui/icons/People';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import ThumbUp from '@material-ui/icons/ThumbUp';
import CardTravel from '@material-ui/icons/CardTravel';
import classNames from 'classnames';

import Step01 from '../../containers/VI_POL/VI_POL_101Container'
import Step02 from '../../containers/VI_POL/VI_POL_102Container'
import Step04 from '../../containers/VI_POL/VI_POL_104Container'
import Step05 from '../../containers/VI_POL/VI_POL_105Container'
import { Typography } from '../unit/index'
import sendData from "../../assets/utils/sendData";

const state = {
  step: 0,
  pstTitle: 'New Position',
  newable: true,
  typePosition: [],
  typeCategory: [],
  typeEdu: [],
  typeExp: [],

  project_no: '',
  project_type: '501-001',
  project_name: '',
  project_department: '',
  project_internal_id: '',
  location: 'kr',
  remote: '',
  position_type: '',
  category: '',
  education: '',
  experience: '',

  name_required: '',
  email_required: '',
  phone_required: '',
  resume_required: '',
  experience_required: '',
  workHistory_required: '',
  education_required: '',
  coverLetter_required: '',
}

class VI_POL_ModalComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = state;
    this.handleChanged = this.handleChanged.bind(this);
    this.fetchGeneralInfo = this.fetchGeneralInfo.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.updateProjectGeneral = this.updateProjectGeneral.bind(this);
    this.handleChangedStep1 = this.handleChangedStep1.bind(this);
    this.handleautocomplete = this.handleautocomplete.bind(this);
    this.addNewOne = this.addNewOne.bind(this);
    this.moveTo = this.moveTo.bind(this);
    this.fetchTypesOfPosition = this.fetchTypesOfPosition.bind(this);
    this.fetchRequired = this.fetchRequired.bind(this);
    this.step__Component = this.step__Component.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);

  }

  componentDidMount() {
    this.fetchTypesOfPosition();
    this.fetchGeneralInfo();
  }

  fetchTypesOfPosition(){
    sendData(`/api/me/codes`, 'get', {}, {},
        {timeout: 30 * 1000},
        res => {
          const {typePosition, typeCategory, typeEdu, typeExp} = res.data.codes;
          this.setState({
            typePosition, typeCategory, typeEdu, typeExp
          });
        });
  }

  handleChangedStep1(e,flg){
    let obj;
    const {name, value, checked} = e.target;
    if(flg === 'checkbox'){
      obj = {
        [name]: checked
      };
    }else{
      obj = {
        [name]: value
      };
    }
    this.setState(obj);
  }

  handleChangeRadio(e){
    let obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj)
    if(this.state.project_id === undefined) return;
    sendData(`/api/project/${this.props.workspaceId}/${this.state.project_id}/required`, 'patch', {}, obj,
        {timeout: 30 * 1000},
        res => {
        });
  }

  addNewOne(){
    sendData(`/api/ws/${this.props.workspaceId}/project`, 'post', {}, {
          project_name: this.state.project_name,
          project_type: '501-001',
        },
        {timeout: 30 * 1000},
        res => {
          this.setState({
            project_id: res.data.project_id,
            newable: false,
          });
        });
  }

  handleautocomplete(name,value) {
    this.setState({
      [name]: value,
    });
  }

  updateProjectGeneral(){
    if(this.state.newable) return;
    sendData(`/api/project/${this.props.workspaceId}/${this.state.project_id}`, 'patch', {}, {
          project_name: this.state.project_name,
          project_department: this.state.project_department,
          project_description: this.state.project_description,
          project_internal_id: this.state.project_internal_id,
          city: this.state.city,
          location: this.state.location,
          project_type: '501-001',
          position_type: this.state.position_type,
          category: this.state.category,
          education: this.state.education,
          experience: this.state.experience
        },
        {timeout: 30 * 1000},
        res => {
          this.moveTo();

        }, err => {

        });
  }

  fetchGeneralInfo(){
    if(this.props.projectId !== undefined && this.props.projectId !== ''){
      sendData(`/api/project/${this.props.workspaceId}/${this.props.projectId}/general`, 'get', {}, {},
          {timeout: 30 * 1000},
          res => {
            this.fetchRequired();
            const {general} = res.data;
            this.setState({
              project_id: general.project_id,
              project_name: general.project_name,
              project_department: general.project_department,
              project_description: general.project_description,
              project_internal_id: general.project_internal_id,
              city: general.city,
              location: general.location,
              project_type: general.project_type,
              position_type: general.position_type,
              category: general.category,
              education: general.education,
              experience: general.experience,
              newable: false
            });
          });
    }
  }

  fetchRequired(){
      if(this.state.project_id === undefined) return;
        sendData(`/api/project/${this.props.workspaceId}/${this.state.project_id}/required`, 'get', {}, {},
            {timeout: 30 * 1000},
            res => {
              this.setState({
                name_required: res.data.name_required,
                email_required: res.data.email_required,
                phone_required: res.data.phone_required,
                resume_required: res.data.resume_required,
                experience_required: res.data.experience_required,
                workHistory_required: res.data.workHistory_required,
                education_required: res.data.education_required,
                coverLetter_required: res.data.coverLetter_required,
              });
            });
  }

  handleChanged(e){
    const {name, value} = e.target;
    this.setState({
      [name] : value
    })
  }

  handleStep(){
    if(this.state.step === 0) {
      this.updateProjectGeneral();
    }

  }

  moveTo(){
    var obj ={
      step: ++this.state.step
    }
    if(this.state.step >4)
      return
    else
      this.setState(obj);
  }

  step__Component(){

    switch(this.state.step){
      case 0 :  return (
         <Step01 project_name={this.state.project_name}
                 newable={this.state.newable}
                 department={this.state.project_department}
                 project_internal_id={this.state.project_internal_id}
                 location={this.state.location}
                 remote={this.state.remote}
                 position_type={this.state.position_type}
                 category={this.state.category}
                 education={this.state.education}
                 experience={this.state.experience}
                 typePosition={this.state.typePosition}
                 typeCategory={this.state.typeCategory}
                 typeEdu={this.state.typeEdu}
                 typeExp={this.state.typeExp}
                 addNewOne={this.addNewOne}
                 handleChangedStep1={(e, flg) => this.handleChangedStep1(e, flg)}
                 handleautocomplete={(name, value) => this.handleautocomplete(name, value)}
                 handleHeaderChanged={e => this.handleChanged(e)}/>
         );
      case 1 :  return (
          <Step02
              name_required={this.state.name_required}
              email_required={this.state.email_required}
              phone_required={this.state.phone_required}
              resume_required={this.state.resume_required}
              experience_required={this.state.experience_required}
              workHistory_required={this.state.workHistory_required}
              education_required={this.state.education_required}
              coverLetter_required={this.state.coverLetter_required}
              handleChangeRadio={this.handleChangeRadio}/>
        );
      case 2 :  return (
          <Step04/>
        );
      case 3 :  return (
          <Step05/>
        );
      // case 4 :  return (
      //     <Step05/>
      //   );
      default:  return (
        <div/>
      );
    }
  }

  render() {
    const { classes ,handleModal, open} = this.props;

    const MenuArr =  [
        {
            name: 'Ditails' ,
            Icon: <CardTravel className={classNames( classes.menuIcon, this.state.step === 0 ? classes.onColor : classes.offColor)} />
        },
        {
            name: 'Applications' ,
            Icon: <FormatListBulleted className={classNames( classes.menuIcon, this.state.step === 1 ? classes.onColor : classes.offColor)} />
        },
        // {
        //     name: 'Pipelines' ,
        //     Icon: <FormatListBulleted className={classNames( classes.menuIcon, this.state.step === 2 ? classes.onColor : classes.offColor)} />
        //   },
        {
            name: 'Scorecard' ,
            Icon: <ThumbUp className={classNames( classes.menuIcon, this.state.step === 2 ? classes.onColor : classes.offColor)} />
        },
        {
            name: 'Hiring Team ' ,
            Icon: <People className={classNames( classes.menuIcon, this.state.step === 3 ? classes.onColor : classes.offColor)} />
        },
    ];

    const Menu__Component = ()=>
      <List className={classes.menu}>
      {MenuArr.map((r, index) => (
        <ListItem 
          onClick={() => {
            if(this.state.newable) return;
            this.setState({step: index})
          }}
          style={{cursor: 'pointer'}}
          key={index}>
          <div style={{position: 'relative'}}>
            {r.Icon}
            {index === 3 ? null : <hr className={classes.hr}/>}
          </div>
            <Typography
              variant={'caption'}
              fontWeight={2}
              className={classes.menuText}>
              {r.name}
            </Typography>
          </ListItem>
        ))}
      </List>;
    return (
        <Dialog
          className={classes.modalRoot}
          onClose={handleModal}
          aria-labelledby="customized-dialog-title"
          open={open}>
            <DialogTitle disableTypography className={classes.title}>
              <Typography color={"#fff"} fontWeight={2} variant="h6">
               {`${this.state.pstTitle} / ${this.state.project_id}`}
              </Typography>
            </DialogTitle>
            <div className={classes.contentWrap}>
              {Menu__Component()}
              <div className={classes.content}>
                <div className={classes.stepWrap}>
                  {this.step__Component()}
                </div>
                <DialogActions className={classes.footer}>
                  <Button
                    onClick={this.handleStep}
                    className={classes.stepBtn}>
                    <i style={{marginRight: '8px'}}
                       className="fas fa-save"/>
                    Save changes
                  </Button>
                </DialogActions>
              </div>
            </div>
        </Dialog>
    )
  }
}

export default VI_POL_ModalComponent