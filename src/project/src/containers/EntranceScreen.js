import { connect } from 'react-redux'

import EntranceComponent from '../components/EntranceComponent';
import styles from '../assets/styles/entrance';
import {withStyles} from "@material-ui/core";
import {notInWorkspace} from "../actions/behave/ConfigAction";

const mapState = state => ({

});

const mapDispatch = dispatch => ({
  notInWorkspace: () => dispatch(notInWorkspace())
});

const EntranceScreen = connect(mapState, mapDispatch)(
  withStyles(styles, { withTheme: true })(EntranceComponent)
)


export default EntranceScreen;