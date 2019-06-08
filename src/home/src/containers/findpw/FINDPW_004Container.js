import { connect } from 'react-redux'
import {withStyles} from '@material-ui/core/styles';
import FINDPW_004Component from '../../components/findpw/FINDPW_004Component';
import sign from '../../assets/styles/material/sign';
const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

const FINDPW_004Container = connect(mapState, mapDispatch)(
       withStyles(sign, { withTheme: true })(FINDPW_004Component)
     )
 export default FINDPW_004Container;