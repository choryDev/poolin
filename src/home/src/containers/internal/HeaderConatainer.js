import { connect } from 'react-redux'
import {withStyles} from '@material-ui/core/styles';
import HeaderComponent from '../../components/internal/HeaderComponent';
import header from '../../assets/styles/material/header';

const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

const HeaderContainer = connect(mapState, mapDispatch)(
       withStyles(header, { withTheme: true })(HeaderComponent)
     )
 export default HeaderContainer;