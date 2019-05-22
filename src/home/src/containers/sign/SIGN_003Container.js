import { connect } from 'react-redux'
import {withStyles} from '@material-ui/core/styles';
import SIGN_003Component from '../../components/sign/SIGN_003Component';
import sign from '../../assets/styles/material/sign';
const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

const SIGN_003Container = connect(mapState, mapDispatch)(
       withStyles(sign, { withTheme: true })(SIGN_003Component)
     )
 export default SIGN_003Container;