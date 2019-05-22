import { connect } from 'react-redux'
import {withStyles} from '@material-ui/core/styles';
import SIGN_002Component from '../../components/sign/SIGN_002Component';
import sign from '../../assets/styles/material/sign';
const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

const SIGN_002Container = connect(mapState, mapDispatch)(
       withStyles(sign, { withTheme: true })(SIGN_002Component)
     )
 export default SIGN_002Container;