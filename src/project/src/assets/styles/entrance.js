const styles = theme => ({
  entrance: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //marginLeft: '-66px',
  },
  cardWrap: {
    border: '1px solid #edeff0',
    backgroundColor: '#f9fafa',
    maxWidth: `${(290*3)+3}px`,
    marginBottom: '8px',
    float: 'left',
    paddingBottom: '10px'
  },
  bottomTextWrap:{
    width:'100%', display: 'flex'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  ///////////////////////////////modal/////////////////////////////////////
  modalTitle:{
    justifyContent: 'space-between',
    display: 'flex',
  },
  modalBody:{
    display: 'flex',
    flexDirection: 'column'
  },
  modalInput:{
    width:'30rem',
  },
  closeButton:{
    padding: '0'
  }
});

export default styles;