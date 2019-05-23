import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

import LeftComponent from '../../components/internal/LeftComponent';
import style from '../../assets/styles/header';
import {drawerOpen} from "../../actions/behave/ConfigAction";

const mapState = state => ({
  workspace: state.ConfigReducer.toJS().workspace
});

const mapDispatch = dispatch => ({
});

const LeftContainer = connect(mapState, mapDispatch)(
  withStyles(style, { withTheme: true })(LeftComponent)
)

export default LeftContainer;