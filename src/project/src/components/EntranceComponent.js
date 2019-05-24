import React from 'react';
import { CompanyCard } from './unit';
import { Typography } from './unit/index'
import Modal from './EntranceModalComponent'
import sendData from '../assets/utils/sendData'
const tileData = [
  {title: 'ssss', author: '', icon: 'fas fa-building', color: 'red'},
  {title: '1111', author: '', icon: 'fas fa-industry', color: 'blue'},
  {title: '2222', author: '', icon: 'fas fa-building', color: 'yellow'},
  {title: '3333', author: '', icon: 'fas fa-industry', color: 'green'},
]
const initState ={
  open: false,
  newCardNm: '',
  newCardWb: '',
  loading: false,
}

class EntranceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state=initState;
    this.handleModal = this.handleModal.bind(this);
    this.AddCmpy=this.AddCmpy.bind(this);
  }
  handleChanged(e){
    const {value, name} = e.target;
    this.setState({
      [name] : value
    })
  }
  handleModal(){
    this.setState({
      open: !this.state.open,
    })
  }
  componentDidMount() {
    this.props.notInWorkspace();
  }

  AddCmpy = () => {
    if (this.state.loading) {
      return;
    };
    console.log('hahah');
    sendData(`/api/request/reset_password`, 'POST', {}, {
      newCardNm: this.state.newCardNm,
      newCardWb: this.state.newCardWb,
    },
      {timeout: 30 * 1000},
      res => {
        this.setState({
          newCardNm: '',
          newCardWb: '',
        })
        this.handleModal();
      }, err => {
      });
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.entrance}>
      <div>
      <Typography
        fontWeight={2}
        variant="h5"
        style={{ marginBottom: '20px' }}>
        Select your workspace
      </Typography>
        <div className={classes.cardWrap}>
          {tileData.map((row, i) =>
             <CompanyCard
              headColor={row.color}
              key={i}
              title={row.title}
              author={row.author}
              icon={row.icon} />)}
        </div>
        <div style={{width:'100%', display: 'flex'}}>
        <Typography
          style={{cursor: 'pointer'}}
          variant='caption'
          color='#5ac0e5'
          fontWeight={1}
          onClick={()=>this.handleModal()}>
          <i className="fas fa-plus"/>
          Add Company
        </Typography>
        <Typography
          variant='caption'
          fontWeight={1}
          style={{marginLeft:'5px',marginRight:'5px'}}>
          or
        </Typography>
        <Typography
          style={{cursor: 'pointer'}}
          variant='caption'
          color='#5ac0e5'
          fontWeight={1}>
          <i className="fas fa-sign-out-alt"/>
          Signout
        </Typography>
        </div>
        </div>
        <Modal
          classes = {classes}
          open = {this.state.open}
          newCardNm = {this.state.newCardNm}
          newCardWb = {this.state.newCardWb}
          handleChanged = {e=>this.handleChanged(e)}
          handleModal = {()=>this.handleModal()}
          AddCmpy = {()=>this.AddCmpy()}/>
      </div>
    );
  }
}

export default EntranceComponent;