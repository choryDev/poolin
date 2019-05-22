import { connect } from 'react-redux'
import {withStyles} from '@material-ui/core/styles';
import LandingComponent from '../components/LandingComponent';
import landing from '../assets/styles/material/landing';
const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

const LandingContainer = connect(mapState, mapDispatch)(
       withStyles(landing, { withTheme: true })(LandingComponent)
     )
 export default LandingContainer;