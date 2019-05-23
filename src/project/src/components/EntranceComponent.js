import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const tileData = [
  {title: 'ssss', author: '', icon: ''},
  {title: 'ssss', author: '', icon: ''},
  {title: 'ssss', author: '', icon: ''},
  {title: 'ssss', author: '', icon: ''},
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

    const Card = () =>
      <li>
      </li>
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -66
      }}>
        <ul style={{
          border: '1px solid #edeff0',
          backgroundColor: '#f9fafa',
          width: '563px'
        }}>
          {tileData.map((row, key) => <Card />)}
        </ul>
      </div>
    );
  }
}

export default EntranceComponent;