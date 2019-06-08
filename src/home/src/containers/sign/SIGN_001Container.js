import { connect } from 'react-redux'
import {withStyles} from '@material-ui/core/styles';
import SIGN_001Component from '../../components/sign/SIGN_001Component';
import sign from '../../assets/styles/material/sign';
const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

const SIGN_001Container = connect(mapState, mapDispatch)(
       withStyles(sign, { withTheme: true })(SIGN_001Component)
     )
 export default SIGN_001Container;