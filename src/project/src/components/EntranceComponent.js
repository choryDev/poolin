import React from 'react';
import { CompanyCard } from './unit';
import { Typography } from './unit/index'
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';

const tileData = [
  {title: 'ssss', author: '', icon: 'fas fa-building', color: 'red'},
  {title: '1111', author: '', icon: 'fas fa-industry', color: 'blue'},
  {title: '2222', author: '', icon: 'fas fa-building', color: 'yellow'},
  {title: '3333', author: '', icon: 'fas fa-industry', color: 'green'},
]


class EntranceComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.notInWorkspace();
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
          fontWeight={1}>
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
      </div>
    );
  }
}

export default EntranceComponent;