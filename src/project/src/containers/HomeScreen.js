import { connect } from 'react-redux'

import HomeComponent from '../components/HomeComponent';
import styles from '../assets/styles/header';
import {withStyles} from "@material-ui/core";

const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

const HomeScreen = connect(mapState, mapDispatch)(
  withStyles(styles, { withTheme: true })(HomeComponent)
)


export default HomeScreen;