import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import HeaderComponent from '../../components/internal/HeaderComponent';
import style from '../../assets/styles/header';

const mapState = state => ({
  workspace: state.ConfigReducer.toJS().workspace
});

const mapDispatch = dispatch => ({
});

const HeaderContainer = connect(mapState, mapDispatch)(
  withStyles(style, { withTheme: true })(HeaderComponent)
)

export default HeaderContainer;