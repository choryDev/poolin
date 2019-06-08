import { connect } from 'react-redux'

import HomeComponent from '../../components/workspace/HomeComponent';
import styles from '../../assets/styles/header';
import {withStyles} from "@material-ui/core";
import {inWorkspace} from '../../actions/behave/ConfigAction'
const mapState = state => ({

});

const mapDispatch = dispatch => ({
  inWorkspace: () => dispatch(inWorkspace())
});

const HomeScreen = connect(mapState, mapDispatch)(
  withStyles(styles, { withTheme: true })(HomeComponent)
)


export default HomeScreen;